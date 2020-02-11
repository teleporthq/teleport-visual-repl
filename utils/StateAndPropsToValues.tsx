function ParseAndReplace(object: object, stateAndProps: object): object {
  Object.keys(object).forEach(key => {
    if (typeof object[key] === "string") {
      if (/\$/g.test(object[key]) && object["type"] !== "static") {
        const parts = object[key].split(".");
        if (parts[0] === "$props" || parts[0] === "$prop") {
          object[key] = stateAndProps["propDefinitions"]
            ? stateAndProps["propDefinitions"][parts[1]]?.defaultValue ??
              new Error(
                "The value " +
                  object[key] +
                  " does not exist. Pleas add it in propDefinitions"
              )
            : new Error("Props are undefined!");
        } else if (parts[0] === "$state") {
          object[key] = stateAndProps["stateDefinitions"]
            ? stateAndProps["stateDefinitions"][parts[1]]?.defaultValue ??
              new Error(
                "The value " +
                  object[key] +
                  " does not exist. Pleas add it in stateDefinitions"
              )
            : new Error("State is undefined!");
        }
      }
    }
    if (typeof object[key] === "object") {
      if (object[key].referenceType) {
        if (
          object[key].referenceType === "prop" ||
          object[key].referenceType === "props"
        ) {
          object[key] = stateAndProps["propDefinitions"]
            ? stateAndProps["propDefinitions"][object[key].id]?.defaultValue ??
              new Error(
                "The value " +
                  object[key].id +
                  " does not exist. Pleas add it in propDefinitions"
              )
            : new Error("Props are undefined!");
        } else if (object[key].referenceType === "state") {
          object[key] = stateAndProps["stateDefinitions"]
            ? stateAndProps["stateDefinitions"][object[key].id]?.defaultValue ??
              new Error(
                "The value " +
                  object[key].id +
                  " does not exist. Pleas add it in stateDefinitions"
              )
            : new Error("State is undefined!");
        }
      } else {
        object[key] = ParseAndReplace(object[key], stateAndProps);
      }
    }
    if (object[key] instanceof Error) {
      throw object[key];
    }
  });

  return object;
}

const StateAndPropsToValues = (FlattenedUIDL: object[]) => {
  const stateAndProps = FlattenedUIDL[FlattenedUIDL.length - 1]["elementInfo"];
  const repeatItems = [];
  let indexOfRepeat = -1;
  const result = FlattenedUIDL.map((element, i) => {
    if (
      element["elementInfo"]["elementType"] === "ul" &&
      element["elementInfo"].attrs?.items
    ) {
      indexOfRepeat = i;
      element["elementInfo"].attrs.items.content.forEach(item => {
        repeatItems.push({
          elementInfo: { elementType: "li" },
          depthLevel: element["depthLevel"] + 1
        });
        repeatItems.push({
          elementInfo: item,
          depthLevel: element["depthLevel"] + 2
        });
      });
    }
    return ParseAndReplace(element, stateAndProps);
  });

  result.splice(indexOfRepeat + 1, 0, ...repeatItems);

  for (let i = 0; i < result.length; i++) {
    let ref = result[i]["elementInfo"]["reference"];
    if (ref) {
      if (ref["content"] !== result[i]["elementInfo"]["value"]) {
        result[i - 1]["elementInfo"] = { filterCondition: "filter" };
      }
    }
  }

  return result.filter(
    element => element["elementInfo"]["filterCondition"] !== "filter"
  );
};

export default StateAndPropsToValues;
