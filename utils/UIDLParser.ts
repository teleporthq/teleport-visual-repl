import { UIDLElementContent } from "../interfaces/UIDL";
const htmlMap = require("../utils/html-mapping.json");

const UILDParser = (obj: UIDLElementContent, depthLevel: number = -1) => {
  const array: UIDLElementContent[] = Array.isArray(obj) ? obj : [obj];

  return array.reduce(
    (acc: UIDLElementContent[], value: UIDLElementContent) => {
      if (value.reference && !value.value) {
        value.filterCondition = "filter";
        delete value.node;
        delete value.reference;
      }
      if (value.node) {
        if (depthLevel !== -1) {
          value.filterCondition = "filter";
        }
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
        const newValues = value.children.map(child => {
          if (child.type === "conditional") {
            return UILDParser(child.content, depthLevel);
          }
          return UILDParser(child.content, depthLevel + 1);
        });
        acc = acc.concat(...newValues);

        delete value.children;
      }

      return acc.filter(
        element => element.elementInfo["filterCondition"] !== "filter"
      );
    },
    []
  );
};

export default UILDParser;
