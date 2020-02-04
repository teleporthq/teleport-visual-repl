import { UIDLElementContent } from "../interfaces/UIDL";
const htmlMap = require("../utils/html-mapping.json");

const UILDParser = (obj: UIDLElementContent, depthLevel: number = 0) => {
  const array: UIDLElementContent[] = Array.isArray(obj) ? obj : [obj];

  return array.reduce((acc: UIDLElementContent[], value) => {
    if (value.node) {
      const nestedNode = UILDParser(value.node.content, depthLevel + 1);
      acc = acc.concat(...nestedNode);
      delete value.node;
    }
    if (value.elementType) {
      // PREVIOUS IMPLEMENTATION
      // let myResult: string = htmlMap.elements[value.elementType]
      //   ? htmlMap.elements[value.elementType].elementType
      //   : value.elementType;
      // value.elementType = myResult;

      // OPTIONAL CHAINING
      value.elementType =
        htmlMap.elements[value.elementType]?.elementType || value.elementType;
    }
    acc.push({ elementInfo: value, depthLevel });

    if (value.children) {
      // value.children.forEach(
      //   child => (acc = [...acc, ...UILDParser(child.content, depthLevel + 1)])
      // );

      const newValues = value.children.map(child =>
        UILDParser(child.content, depthLevel + 1)
      );
      acc = acc.concat(...newValues);

      delete value.children;
    }

    if (value.dataSource) {
      const newD = value.dataSource.content
      for (let [key, value] of Object.entries(newD)) {
        console.log(`${key}: ${value}`)
      }
    
      acc = acc.concat(...newD)
      delete value.dataSource;

    }
    return acc;
  }, []);
};

export default UILDParser;
