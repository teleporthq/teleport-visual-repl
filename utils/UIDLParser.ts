import { UIDLNode } from "../interfaces/UIDL";
const myimport = require("./componentfile");
const htmlMap = require("../utils/html-mapping.json");

// const getComponent = (tree: UIDLNode, depth: number = 0) => {
//   const contents = tree.content;
//   let list: any[] = [];
//   if (!contents) {
//     return [];
//   }
//   Object.keys(contents).forEach(key => {
//     const elementType = contents[key];
//     if (typeof elementType === "string") {
//       if (key === "elementType") {
//         let myResult = {
//           elementType: htmlMap.elements[elementType]
//             ? htmlMap.elements[elementType].elementType
//             : elementType,
//           depth: depth
//         };
//         list.push(myResult);
//       } else {
//         list.length ? (list[list.length - 1][key] = elementType) : null;
//       }
//     } else {
//       if (key === "children") {
//         elementType.forEach(
//           (child: UIDLNode) =>
//             (list = [...list, ...getComponent(child, depth + 1)])
//         );
//       } else {
//         list[list.length - 1][key] = elementType;
//       }
//     }
//   });
//   return list;
// };

const flatten = (obj, depthLevel = 0) => {
  const array = Array.isArray(obj) ? obj : [obj];
  return array.reduce((acc, value) => {
    let myResult = htmlMap.elements[value.elementType]
      ? htmlMap.elements[value.elementType].elementType
      : value.elementType;
    if (value.elementType) {
      value.elementType = myResult;
    }
    acc.push({ elementInfo: value, depthLevel });
    if (value.children) {
      value.children.map(
        child => (acc = [...acc, ...flatten(child.content, depthLevel + 1)])
      );
      delete value.children;
    }
    return acc;
  }, []);
};
console.log(flatten(myimport.node.content));
// console.log("Result: ", getComponent(myimport.node));

export default flatten;
