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
  propDefinitions: {
    heading: {
      type: "string",
      defaultValue: "Hello ce urat e rezolvata dar macar merge "
    }
  },
  node: {
    type: "element",
    content: {
      elementType: "div",
      children: [
        {
          type: "element",
          content: {
            elementType: "text",
            children: [
              {
                type: "dynamic",
                content: {
                  referenceType: "prop",
                  id: "heading"
                }
              },
              {
                type: "static",
                content: "World!"
              }
            ]
          }
        },
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
                    content: "Now you see me!"
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
                    content: "Now you don't!"
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
