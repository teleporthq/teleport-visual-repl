import { UIDLElementContent } from "../interfaces/UIDL";
const htmlMap = require("../utils/html-mapping.json");

const UILDParser = (obj: UIDLElementContent, depthLevel: number = -1) => {
  const array: UIDLElementContent[] = Array.isArray(obj) ? obj : [obj];

  return array.reduce((acc: UIDLElementContent[], value) => {
    if (value.node) {
      const nestedNode = UILDParser(value.node.content, depthLevel + 1);
      acc = acc.concat(...nestedNode);
      delete value.node;
    }

    if (value.elementType) {
      value.elementType =
        htmlMap.elements[value.elementType]?.elementType || value.elementType;
    }

    acc.push({ elementInfo: value, depthLevel });

    if (value.children) {
      // let test = value.children.filter(child => child.type !== "conditional");
      // console.log(test);

      const newValues = value.children.map(child => {
        return UILDParser(child.content, depthLevel + 1);
      });
      acc = acc.concat(...newValues);

      delete value.children;
    }

    return acc;
  }, []);
};

export default UILDParser;
