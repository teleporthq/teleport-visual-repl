const myComponent = {
  $schema: "https://docs.teleporthq.io/uidl-schema/v1/component.json",
  name: "MyConditionalElement",
  stateDefinitions: {
    isVisible: {
      type: "boolean",
      defaultValue: true
    },
    isAlive: {
      type: "boolean",
      defaultValue: true
    }
  },
  node: {
    type: "element",
    content: {
      elementType: "div",
      children: [
        {
          type: "conditional",
          content: {
            reference: {
              type: "dynamic",
              content: {
                referenceType: "state",
                id: "isVisible"
              }
            },
            value: true,
            node: {
              type: "element",
              content: {
                elementType: "text",
                children: [
                  {
                    type: "static",
                    content: "If you can see me!"
                  }
                ]
              }
            }
          }
        },
        {
          type: "conditional",
          content: {
            reference: {
              type: "dynamic",
              content: {
                referenceType: "state",
                id: "isAlive"
              }
            },
            value: true,
            node: {
              type: "element",
              content: {
                elementType: "text",
                children: [
                  {
                    type: "static",
                    content: "I am alive!"
                  }
                ]
              }
            }
          }
        }
      ]
    }
  }
};

module.exports = myComponent;
