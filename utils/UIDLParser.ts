import { UIDLNode } from "../interfaces/UIDL";
const myimport = require("./componentfile");
const htmlMap = require("../utils/html-mapping.json");

const getComponent = (tree: UIDLNode, depth: number = 0) => {
  const contents = tree.content;
  let list: any[] = [];

  if (!contents) {
    return [];
  }

  let myResult = { depth: depth };
  list.push(myResult);

  Object.keys(contents).forEach(key => {
    const keyContents = contents[key];
    if (typeof keyContents === "string") {
      //if the key is elementType then use
      //the html mappings to try and translate it
      if (key === "elementType") {
        const element = htmlMap.elements[keyContents]
          ? htmlMap.elements[keyContents].elementType
          : keyContents;
        list[list.length - 1] ? (list[list.length - 1][key] = element) : null;

        return;
      }
      return;
      // exit fast. Return and skip the 'else' statement
    } else {
      if (key === "children") {
        keyContents.forEach(
          (child: UIDLNode) =>
            (list = [...list, ...getComponent(child, depth + 1)])
        );
        return;
      }
      if (key === "node") {
        list = [...list, ...getComponent(keyContents, depth + 1)];
        return;
      }
    }
    list.length ? (list[list.length - 1][key] = keyContents) : null;

    // try to call list[list.length - 1][key] = elementType; here, insead
    // of the else branches above
  });
  return list;
};
console.log("Result: ", getComponent(myimport.node));
export default {};
