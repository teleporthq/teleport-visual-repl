import { UIDLElementContent } from "../interfaces/UIDL";
const htmlMap = require("../utils/html-mapping.json");

const UILDParser = (obj: UIDLElementContent, depthLevel: number = -1) => {
  const array: UIDLElementContent[] = Array.isArray(obj) ? obj : [obj];

  return array.reduce(
    (acc: UIDLElementContent[], value: UIDLElementContent) => {
      if (!value) {
        return acc;
      }

      if (value.reference && !value.value && value.value !== 0) {
        value.filterCondition = "filter";
        delete value.reference;
      }

      if (value.elementType) {
        value.elementType =
          htmlMap.elements[value.elementType]?.elementType || value.elementType;
      }

      if (value.node) {
        if (depthLevel !== -1) {
          value.filterCondition = "filter";
        }
        const nestedNode = UILDParser(value.node.content, depthLevel + 1);
        acc = acc.concat(...nestedNode);
        delete value.node;
      }

      acc.push({ elementInfo: value, depthLevel });

      if (value.children) {
        //check if children is a string first
        if (typeof value.children === "string") {
          value.children = [{ type: "static", content: value.children }];
        }
        //check if children is an array of strings
        if (typeof value.children[0] === "string") {
          let reference = value.children.map((child: any, i) => {
            // treated dynamic children if it's a prop
            if (child.includes("$")) {
              let neededValue = child.split(".");
              neededValue[0] = neededValue[0].replace(/\$/g, "");
              return {
                type: "dynamic",
                content: { referenceType: neededValue[0], id: neededValue[1] }
              };
            } else {
              return { type: "static", content: child };
            }
          });
          value.children = reference;
        }
        const newValues = value.children.map(child => {
          if (child.type === "conditional") {
            return UILDParser(child.content, depthLevel);
          }
          return UILDParser(child.content, depthLevel + 1);
        });
        acc = acc.concat(...newValues);

        delete value.children;
      }

      return acc;
    },
    []
  );
};

export default UILDParser;
