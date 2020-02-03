import { ParsedUIDLNode } from "../interfaces/ParsedUIDLNode";

function camelCaseToDash( myStr : string ) {
    return myStr.replace( /([a-z])([A-Z])/g, '$1-$2' ).toLowerCase();
}

function eliminateQuotes( myStr : string){
    return myStr.replace( /"/g, '');
}

function getInlineStyleObjectContents(result : string, object : object){
    Object.keys(object).forEach(key => {
        if(typeof object[key].content !== "string"){
            result += camelCaseToDash(key) + ":"
            result = getInlineStyleObjectContents(result, object[key].content);
        } else {
            result += camelCaseToDash(key) + ":" + eliminateQuotes(object[key].content) + "; "
        }
    });
    return result;
}

function getOuterStyleContents(className : string, object : object, result : string = "." + className + "{"){
    Object.keys(object).forEach(key => {
        if(key.match("@media")){
            result += "}"
        }
        if(typeof object[key].content !== "string"){
            result += camelCaseToDash(key) + "{" + "." + className + "{ " 
            result = getOuterStyleContents(className, object[key].content, result);
        } else {
            result += camelCaseToDash(key) + ":" + eliminateQuotes(object[key].content) + "; "
        }
    });
    return result + "}";
}

function getAttrContents(result : string, object : object){
    Object.keys(object).forEach(key => {
        result += camelCaseToDash(key) + "=" + object[key].content + " "   
    });
    return result;
}

const UIDLToHtml = (UIDLArray:object[]) => {
    let counter : number = 0;
    let stack:string[] = []
    let prevDepth:number = -1;
    let styleResult : string = "";
    let htmlResult : string = UIDLArray.reduce((accumulator : string, entry:ParsedUIDLNode) => {
        if(entry.depthLevel === -1){
            return accumulator
        }
        counter += 1;
        if(typeof entry.elementInfo === "string"){
            return accumulator += entry.elementInfo
        }

        //more depth means that multiple opened tags must close
        while(prevDepth >= entry.depthLevel){
            prevDepth -= 1;
            accumulator += "</" + stack.pop() + ">"
        }
        accumulator += "<";


        Object.keys(entry.elementInfo).forEach(key =>{
            if(key === "elementType"){
                accumulator += entry.elementInfo[key] + " "
                return
            }

            if(key === "attrs"){
                accumulator = getAttrContents(accumulator, entry.elementInfo[key]);
                return
            }

            if(key === "style"){
                if(typeof entry.elementInfo["name"] !== "undefined"){
                    styleResult += getOuterStyleContents(entry.elementInfo["name"] + counter, entry.elementInfo[key]);
                    return
                }   
            }

            //name should be translated into class(?)
            accumulator += key === "name"? "class=" : key + "="

            if(typeof entry.elementInfo[key] === "string"){
                accumulator += key==="name" ? entry.elementInfo[key] + counter + " " : entry.elementInfo[key] + " ";
                return;
            }
            accumulator += '"';
            accumulator = getInlineStyleObjectContents(accumulator, entry.elementInfo[key]);
            accumulator += '"';
        })

        accumulator += ">"

        stack.push(entry.elementInfo["elementType"])
        prevDepth = entry.depthLevel
        
        return accumulator
    }, "")
    while(stack.length > 0){
        htmlResult += "</" + stack.pop() + ">";
    }
    return {html : htmlResult, style : styleResult}
}


export default UIDLToHtml