import { UIDLNode } from "../interfaces/UIDL";
const myimport = require("./componentfile");
const htmlMap = require("../utils/html-mapping.json");


const getComponent = (tree: UIDLNode, depth: number) => {
  
  const contents = tree.content;
  let list: any[] = [];
  if (!contents) return [];
  
  let myResult = { depth : depth }
  list.push(myResult);
  
  Object.keys(contents).forEach(key => {
    const keyContents = contents[key];
    if (typeof keyContents === "string") {
      //if the key is elementType then use 
      //the html mappings to try and translate it
      if(key === "elementType"){
        const element = htmlMap.elements[keyContents]
        ? htmlMap.elements[keyContents].elementType
        : keyContents
        list[list.length - 1]
        ? (list[list.length - 1][key] = element)
        : null;

      } else {
        list[list.length - 1]
          ? (list[list.length - 1][key] = keyContents)
          : null;
      }
    } else {
      if (key === "children") {
        keyContents.forEach(
          (child: UIDLNode) =>
            (list = [...list, ...getComponent(child, depth + 1)])
        );
      } else if(key === "node"){
        list = [...list, ...getComponent(keyContents, depth + 1)]
      } else {
        //if there are attributes after the children attribute this will not work
        list[list.length - 1][key] = keyContents;
      }
    }
  });
  return list;
};
console.log("Result: ", getComponent(myimport.node, 0));
export default {};
