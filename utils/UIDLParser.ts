import { UIDLElementContent } from "../interfaces/UIDL";
const htmlMap = require("../utils/html-mapping.json");

const UILDParser = (obj: UIDLElementContent, depthLevel: number = -1) => {
  let defaultState;
  let defaultProps;
  const array: UIDLElementContent[] = Array.isArray(obj) ? obj : [obj];

  return array.reduce(
    (acc: UIDLElementContent[], value: UIDLElementContent) => {
      if (value.reference && !value.value) {
        // value.filterCondition = "filter";
        // delete value.node;
        // delete value.reference;
        console.log(value);
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
  if (props) {
    const consideringProps = filteredResult.map(element => {
      if (element.elementInfo["id"] === Object.keys(props)[0]) {
        return (element = {
          elementInfo: props[Object.keys(props)[0]].defaultValue,
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
