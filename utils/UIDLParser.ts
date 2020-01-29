import { UIDLNode } from "../interfaces/UIDL";
const myimport = require("./componentfile");
const htmlMap = require("../utils/html-mapping.json");
console.log(htmlMap);

let depth = 0;
const getComponent = (tree: UIDLNode, depth: number) => {
  const contents = tree.content;
  let list: any[] = [];
  if (!contents) return [];
  console.log(Object.keys(contents));
  Object.keys(contents).forEach(key => {
    const elementType = contents[key];
    if (typeof elementType === "string") {
      if (key === "elementType") {
        let myResult = {
          elementType: htmlMap.elements[elementType]
            ? htmlMap.elements[elementType].elementType
            : elementType,
          depth: depth
        };
        list.push(myResult);
      } else {
        list[list.length - 1]
          ? (list[list.length - 1][key] = elementType)
          : null;
      }
    } else {
      if (key === "children") {
        elementType.forEach(
          (child: UIDLNode) =>
            (list = [...list, ...getComponent(child, depth + 1)])
        );
      } else {
        list[list.length - 1][key] = elementType;
      }
    }
  });
  return list;
};
console.log("Result: ", getComponent(myimport.node, depth));
export default {};
