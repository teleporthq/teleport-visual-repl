import { ParsedUIDLNode } from "../interfaces/ParsedUIDLNode";

function camelCaseToDash( myStr : string ) {
    return myStr.replace( /([a-z])([A-Z])/g, '$1-$2' ).toLowerCase();
}

function eliminateQuotes( myStr : string){
    return myStr.replace( /"/g, '');
}

function getObjectContents(result : string, object : object){
    Object.keys(object).forEach(key => {
        if(typeof object[key].content !== "string"){
            result += camelCaseToDash(key) + ":"
            result = getObjectContents(result, object[key].content);
        } else {
            result += camelCaseToDash(key) + ":" + eliminateQuotes(object[key].content) + "; "
        }
    });
    return result;
}

function getAttrContents(result : string, object : object){
    Object.keys(object).forEach(key => {
        result += camelCaseToDash(key) + "=" + object[key].content + " "   
    });
    return result;
}

const UIDLToHtml = (UIDLArray:object[]) => {
    let stack:string[] = []
    let prevDepth:number = -1;
    let result = UIDLArray.reduce((accumulator : string, entry:ParsedUIDLNode) => {
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

            accumulator += key + "=";
            if(typeof entry.elementInfo[key] === "string"){
                accumulator += entry.elementInfo[key] + " ";
                return;
            }
            accumulator += '"';
            accumulator = getObjectContents(accumulator, entry.elementInfo[key]);
            accumulator += '"';
        })

        accumulator += ">"

        stack.push(entry.elementInfo["elementType"])
        prevDepth = entry.depthLevel
        
        return accumulator
    }, "")
    while(stack.length > 0){
        result += "</" + stack.pop() + ">";
    }
    console.log(result);
    return result
}
//const test = flatten(myimport.node.content);
// console.log(test);
// console.log(UIDLToHtml(test));
export default UIDLToHtml