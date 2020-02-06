import { ParsedUIDLNode } from "../interfaces/ParsedUIDLNode";

function camelCaseToDash( myStr : string ) {
    return myStr.replace( /([a-z])([A-Z])/g, '$1-$2' ).toLowerCase().replace(/&/g, '');
}
function eliminateQuotes( myStr : string){
    return myStr.replace( /"/g, '');
}
function getStyleContents(className : string, object : unknown, result : string = "." + className + "{", end : boolean = true){
    Object.keys(object).forEach(key => {
        if(key.match("@media")){
            result += "}"
        }
        if(key.match("&")){
            result +=  "}." + className
        }
        if(typeof object[key] !== "string"){
            if(typeof object[key].content !== "string"){
                result += key.match("@media") ?
                    camelCaseToDash(key) + "{" + "." + className + "{ " :
                    camelCaseToDash(key) + "{"
                result = key.match("&") ?
                    getStyleContents(className, object[key].content || object[key], result, false):
                    getStyleContents(className, object[key].content || object[key], result)
            } else {
                result += camelCaseToDash(key) + ":" + eliminateQuotes(object[key].content || object[key]) + "; "
            }
        } else {
            result += camelCaseToDash(key) + ":" + eliminateQuotes(object[key]) + "; "
        }
    });
    return end ? result + "} " : result
}

function getAttrContents(result : string, object : unknown, currentElement : string){
    Object.keys(object).forEach(key => {
        let printedKey : string;
        if(currentElement === "img" && key === "url"){
            printedKey = "src";
        } else if (currentElement === "a" && key ==="url"){
            printedKey = "href";
        } else {
            printedKey = key;
        }
        if(typeof object[key] !== "string"){
            result += camelCaseToDash(printedKey) + "=" + object[key].content + " "
        } else {
            result += camelCaseToDash(printedKey) + "=" + object[key] + " "
        }
    });
    return result;
}

const UIDLToHtml = (UIDLArray:object[]) => {
    let stack:string[] = []
    let prevDepth:number = -1;
    let styleResult : string = "";
    const className : string = "class";
    let counter = 0;
    let htmlResult : string = UIDLArray.reduce((accumulator : string, entry:ParsedUIDLNode) => {
        counter += 1;
        const elementType : string = /[A-Z]/.test(entry.elementInfo["elementType"]) ? "div" : entry.elementInfo["elementType"]
        if(entry.depthLevel === -1){
            return accumulator
        }``
        if(typeof entry.elementInfo === "string"){
            return accumulator += entry.elementInfo
        }
        //more depth means that multiple opened tags must close
        while(prevDepth >= entry.depthLevel){
            prevDepth -= 1;
            accumulator += "</" + stack.pop() + ">"
        }
        accumulator += "<" + elementType + " ";
        stack.push(elementType)
        Object.keys(entry.elementInfo).forEach(key =>{
            if(key === "elementType"){
                return
            }
            if(key === "attrs"){
                accumulator = getAttrContents(accumulator, entry.elementInfo[key], stack[stack.length - 1]);
                return
            }
            if(key === "style"){
                accumulator += " class=" + className + counter + " ";
                styleResult += getStyleContents(className + counter, entry.elementInfo[key]);
                return
            }
            accumulator += key + "="
            if(typeof entry.elementInfo[key] === "string"){
                accumulator += entry.elementInfo[key] + " ";
                return;
            }
        })
        accumulator += ">"
        prevDepth = entry.depthLevel
        return accumulator
    }, "")
    while(stack.length > 0){
        htmlResult += "</" + stack.pop() + ">";
    }
    return {html : htmlResult, style : styleResult}
}
export default UIDLToHtml