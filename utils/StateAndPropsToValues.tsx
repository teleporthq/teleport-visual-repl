function ParseAndReplace(object: object, stateAndProps: object): object {
  Object.keys(object).forEach(key => {
    if (typeof object[key] === "string") {
      if (/\$/g.test(object[key])) {
        const parts = object[key].split(".");
        if (parts[0] === "$props" || parts[0] === "$prop") {
          object[key] =
            stateAndProps["propDefinitions"][parts[1]]?.defaultValue ?? "";
        } else if (parts[0] === "$state") {
          object[key] =
            stateAndProps["stateDefinitions"][parts[1]]?.defaultValue ?? "";
        }
      }
    }
    if (typeof object[key] === "object") {
      if (object[key].referenceType) {
        if (
          object[key].referenceType === "prop" ||
          object[key].referenceType === "props"
        ) {
          object[key] =
            stateAndProps["propDefinitions"][object[key].id]?.defaultValue ??
            "";
        } else if (object[key].referenceType === "state") {
          object[key] =
            stateAndProps["stateDefinitions"][object[key].id]?.defaultValue ??
            "";
        }
      } else {
        object[key] = ParseAndReplace(object[key], stateAndProps);
      }
    }
  });

  return object;
}

const StateAndPropsToValues = (FlattenedUIDL: object[]) => {
  const stateAndProps = FlattenedUIDL[FlattenedUIDL.length - 1]["elementInfo"];
  const result = FlattenedUIDL.map(element => {
    return ParseAndReplace(element, stateAndProps);
  });

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
