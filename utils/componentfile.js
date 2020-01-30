const myComponent = {
  "$schema": "https://docs.teleporthq.io/uidl-schema/v1/component.json",
  "name": "Page",
  "node": {
    "type": "element",
    "content": {
      "elementType": "container",
      "name": "page",
      "children": [
        {
          "type": "element",
          "content": {
            "elementType": "text",
            "name": "text",
            "children": [
              {
                "type": "static",
                "content": "Hello"
              }
            ],
            "style": {
              "fontWeight": {
                "type": "static",
                "content": "lighter"
              },
              "fontSize": {
                "type": "static",
                "content": "160px"
              }
            },
            "attrs": {}
          }
        },
        {
          "type": "element",
          "content": {
            "elementType": "container",
            "name": "container",
            "children": [
              {
                "type": "element",
                "content": {
                  "elementType": "text",
                  "name": "text",
                  "children": [
                    {
                      "type": "static",
                      "content": "Text"
                    }
                  ],
                  "style": {},
                  "attrs": {}
                }
              },
              {
                "type": "element",
                "content": {
                  "elementType": "heading6",
                  "name": "heading6",
                  "children": [
                    {
                      "type": "static",
                      "content": "Heading Level 6"
                    }
                  ],
                  "style": {
                    "fontSize": {
                      "type": "static",
                      "content": ".75em"
                    },
                    "marginTop": {
                      "type": "static",
                      "content": "2.33em"
                    },
                    "marginBottom": {
                      "type": "static",
                      "content": "2.33em"
                    }
                  },
                  "attrs": {}
                }
              }
            ],
            "style": {
              "width": {
                "type": "static",
                "content": "200px"
              },
              "height": {
                "type": "static",
                "content": "100px"
              },
              "backgroundColor": {
                "type": "static",
                "content": "rgba(20, 20, 20, 0.2)"
              }
            },
            "attrs": {}
          }
        },
        {
          "type": "element",
          "content": {
            "elementType": "link",
            "name": "link",
            "children": [
              {
                "type": "static",
                "content": "Teleport Yourself"
              }
            ],
            "style": {
              "textDecoration": {
                "type": "static",
                "content": "underline"
              },
              "color": {
                "type": "static",
                "content": "#000"
              },
              "position": {
                "type": "static",
                "content": "absolute"
              },
              "top": {
                "type": "static",
                "content": "10px"
              },
              "right": {
                "type": "static",
                "content": "50px"
              }
            },
            "attrs": {
              "href": {
                "type": "static",
                "content": "https://teleporthq.io"
              },
              "target": {
                "type": "static",
                "content": "_blank"
              }
            }
          }
        },
        {
          "type": "element",
          "content": {
            "elementType": "image",
            "name": "image",
            "children": [],
            "style": {
              "width": {
                "type": "static",
                "content": "200px"
              },
              "position": {
                "type": "static",
                "content": "absolute"
              },
              "top": {
                "type": "static",
                "content": "50px"
              },
              "left": {
                "type": "static",
                "content": "500px"
              },
              "opacity": {
                "type": "static",
                "content": "0.55"
              }
            },
            "attrs": {
              "src": {
                "type": "static",
                "content": "https://images.unsplash.com/photo-1580371544413-49388e6beb21?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjkxMzIxfQ"
              }
            }
          }
        },
        {
          "type": "element",
          "content": {
            "elementType": "container",
            "name": "container",
            "children": [
              {
                "type": "element",
                "content": {
                  "elementType": "text",
                  "name": "text",
                  "children": [
                    {
                      "type": "static",
                      "content": "Text"
                    }
                  ],
                  "style": {},
                  "attrs": {}
                }
              },
              {
                "type": "element",
                "content": {
                  "elementType": "text",
                  "name": "text",
                  "children": [
                    {
                      "type": "static",
                      "content": "Text"
                    }
                  ],
                  "style": {},
                  "attrs": {}
                }
              },
              {
                "type": "element",
                "content": {
                  "elementType": "text",
                  "name": "text",
                  "children": [
                    {
                      "type": "static",
                      "content": "Text"
                    }
                  ],
                  "style": {},
                  "attrs": {}
                }
              },
              {
                "type": "element",
                "content": {
                  "elementType": "text",
                  "name": "text",
                  "children": [
                    {
                      "type": "static",
                      "content": "Text"
                    }
                  ],
                  "style": {},
                  "attrs": {}
                }
              }
            ],
            "style": {
              "display": {
                "type": "static",
                "content": "grid"
              },
              "height": {
                "type": "static",
                "content": "100px"
              },
              "backgroundColor": {
                "type": "static",
                "content": "rgba(20, 20, 20, 0.2)"
              },
              "gridGap": {
                "type": "static",
                "content": "10px"
              },
              "gridTemplateColumns": {
                "type": "static",
                "content": "1fr 1fr"
              },
              "gridTemplateRows": {
                "type": "static",
                "content": "auto auto"
              },
              "width": {
                "type": "static",
                "content": "300px"
              },
              "margin": {
                "type": "static",
                "content": "50px"
              },
              "padding": {
                "type": "static",
                "content": "1px"
              },
              "borderWidth": {
                "type": "static",
                "content": "6px"
              },
              "borderStyle": {
                "type": "static",
                "content": "solid"
              },
              "borderRadius": {
                "type": "static",
                "content": "15px"
              }
            },
            "attrs": {}
          }
        },
        {
          "type": "element",
          "content": {
            "elementType": "textblock",
            "name": "textblock",
            "children": [
              {
                "type": "static",
                "content": "Paragraph"
              }
            ],
            "style": {
              "marginTop": {
                "type": "static",
                "content": "1em"
              },
              "marginBottom": {
                "type": "static",
                "content": "1em"
              }
            },
            "attrs": {}
          }
        }
      ],
      "style": {
        "backgroundColor": {
          "type": "static",
          "content": "#fdf"
        },
        "display": {
          "type": "static",
          "content": "block"
        },
        "fontFamily": {
          "type": "static",
          "content": "-apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Roboto\", \"Oxygen\",\"Ubuntu\", \"Cantarell\", \"Fira Sans\",\"Droid Sans\", \"Helvetica Neue\", sans-serif"
        },
        "fontSize": {
          "type": "static",
          "content": "16px"
        },
        "overflow": {
          "type": "static",
          "content": "auto"
        },
        "width": {
          "type": "static",
          "content": "100%"
        },
        "minHeight": {
          "type": "static",
          "content": "100%"
        },
        "position": {
          "type": "static",
          "content": "static"
        },
        "right": {
          "type": "static",
          "content": "px"
        },
        "top": {
          "type": "static",
          "content": "px"
        }
      },
      "attrs": {}
    }
  },
  "propDefinitions": {}
};

module.exports = myComponent;
