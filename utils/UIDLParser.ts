import { UIDLNode } from "../interfaces/UIDL";
const myimport = require("./componentfile");
const htmlMap = require("../utils/html-mapping.json");

let depth = 0;

const getComponent = (tree: UIDLNode, depth: number) => {
  const contents = tree.content;
  let list: any[] = [];

  // Even if you only have one line of code after the 'if' statement
  // you can place it into brackets
  if (!contents) return [];

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
        // list.length ? ...
        list[list.length - 1]
          ? (list[list.length - 1][key] = elementType)
          : null;
      }
      // exit fast. Return and skip the 'else' statement
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

    // try to call list[list.length - 1][key] = elementType; here, insead
    // of the else branches above
  });
  return list;
};
console.log("Result: ", getComponent(myimport.node, depth));
export default {};
