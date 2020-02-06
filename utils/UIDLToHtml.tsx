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
                    getStyleContents(className, object[key].content, result, false):
                    getStyleContents(className, object[key].content, result)
            } else {
                result += camelCaseToDash(key) + ":" + eliminateQuotes(object[key].content) + "; "
            }
        } else {
            result += camelCaseToDash(key) + ":" + eliminateQuotes(object[key]) + "; "
        }
    });
    return end ? result + "} " : result
}
function getAttrContents(result : string, object : unknown, stateAndProps : object, currentElement : string){
    Object.keys(object).forEach(key => {
        let printedKey : string;
        if(currentElement === "img"){
            printedKey = "src";
        } else if (currentElement === "a"){
            printedKey = "href";
        }
        if(typeof object[key] !== "string"){
            if(object[key].content.referenceType){
                result += camelCaseToDash(printedKey) + "=" + stateAndProps["propDefinitions"][object[key].content.id].defaultValue  + " "
                return result;
            }
            result += camelCaseToDash(key) + "=" + object[key].content + " "
        } else {
            if(/\$/.test(object[key])){
                const parts = object[key].split(".");
                result += camelCaseToDash(printedKey) + "=" + stateAndProps["propDefinitions"][parts[1]].defaultValue + " "
                return result;
            }
            result += camelCaseToDash(key) + "=" + object[key] + " "
        }
    });
    return result;
}
const UIDLToHtml = (UIDLArray:object[]) => {
    let stack:string[] = []
    let prevDepth:number = -1;
    let styleResult : string = "";
    const className : string = "class";
    const stateAndProps = UIDLArray[UIDLArray.length - 1]["elementInfo"];
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
                accumulator = getAttrContents(accumulator, entry.elementInfo[key], stateAndProps, stack[stack.length - 1]);
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