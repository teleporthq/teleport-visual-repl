import { UIDLElementContent } from "../interfaces/UIDL";
const htmlMap = require("../utils/html-mapping.json");

const UILDParser = (obj: UIDLElementContent, depthLevel: number = -1) => {
  let defaultState;
  let defaultProps;
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
        } else {
          if (value.stateDefinitions) {
            defaultState = value.stateDefinitions;
          }
          if (value.propDefinitions) {
            defaultProps = value.propDefinitions;
          }
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
        //check if children is a string first
        if (typeof value.children === "string") {
          value.children = [{ type: "static", content: value.children }];
        }
        //check if children is an array of strings
        if (typeof value.children[0] === "string") {
          let test = value.children.map((child, i) => {
            return { type: "static", content: child };
          });

          value.children = test;
        }
        const newValues = value.children.map(child => {
          if (child.type === "conditional") {
            return UILDParser(child.content, depthLevel);
          }
          if (child.type === "dynamic") {
          }
          return UILDParser(child.content, depthLevel + 1);
        });
        acc = acc.concat(...newValues);

        delete value.children;
      }
      return fixSpecialCases(acc, defaultState, defaultProps);
    },
    []
  );
};

const fixSpecialCases = (
  result: UIDLElementContent[],
  state,
  props: object
) => {
  // filter values that can't be transformed into HTML ex: reference
  const filteredResult = result.filter(
    element => element.elementInfo["filterCondition"] !== "filter"
  );
  // Treat DefaultProps Case
  if (props && Object.keys(props).length) {
    const consideringProps = filteredResult.map((element, i) => {
      let myFind = Object.keys(props).find(
        prop => prop === element.elementInfo["id"]
      );
      if (myFind) {
        return (element = {
          elementInfo: props[myFind].defaultValue,
          depthLevel: element.depthLevel
        });
      } else {
        return element;
      }
    });
    return consideringProps;
  }
  return filteredResult;
};

export default UILDParser;
