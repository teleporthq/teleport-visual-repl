const myComponent = {
  "name": "TabSelector",
  "stateDefinitions": {
    "activeTab": {
      "type": "number",
      "defaultValue": 0
    }
  },
  "node": {
    "type": "element",
    "content": {
      "elementType": "container",
      "children": [
        {
          "type": "element",
          "content": {
            "elementType": "container",
            "name": "tablist",
            "style": {
              "margin": "0 0 -1px",
              "overflow": "visible"
            },
            "attrs": {
              "role": "tablist"
            },
            "children": [
              {
                "type": "element",
                "content": {
                  "elementType": "button",
                  "children": [
                    "Tab One"
                  ],
                  "attrs": {
                    "role": "tab",
                    "data-active-tab": "$state.activeTab"
                  },
                  "events": {
                    "click": [
                      {
                        "type": "stateChange",
                        "modifies": "activeTab",
                        "newState": 0
                      }
                    ]
                  },
                  "style": {
                    "fontSize": "18px",
                    "marginRight": "6px",
                    "position": "relative",
                    "overflow": "visible",
                    "cursor": "pointer",
                    "borderTop": "1px solid #ccc",
                    "borderLeft": "1px solid #ccc",
                    "borderRight": "1px solid #ccc",
                    "boxShadow": "0 0 0.2em hsl(219, 1%, 72%)",
                    "padding": "5px",
                    "outline": "0",
                    "background-color": "#eee",
                    "&:focus": {
                      "border-top": "3px solid orange",
                      "padding-top": "3px"
                    },
                    "&[data-active-tab='0']": {
                      "border-top": "3px solid green",
                      "padding-top": "3px",
                      "background-color": "white"
                    },
                    "&[data-active-tab='0']::after": {
                      "bottom": "-1px",
                      "position": "absolute",
                      "height": "5px",
                      "right": "0",
                      "left": "0",
                      "background-color": "white",
                      "content": "' '",
                      "z-index": "3"
                    },
                    "&:hover": {
                      "border-top": "3px solid orange",
                      "padding-top": "3px"
                    }
                  }
                }
              },
              {
                "type": "element",
                "content": {
                  "elementType": "button",
                  "children": [
                    "Tab Two"
                  ],
                  "attrs": {
                    "role": "tab",
                    "data-active-tab": "$state.activeTab"
                  },
                  "events": {
                    "click": [
                      {
                        "type": "stateChange",
                        "modifies": "activeTab",
                        "newState": 1
                      }
                    ]
                  },
                  "style": {
                    "fontSize": "18px",
                    "marginRight": "6px",
                    "position": "relative",
                    "overflow": "visible",
                    "cursor": "pointer",
                    "borderTop": "1px solid #ccc",
                    "borderLeft": "1px solid #ccc",
                    "borderRight": "1px solid #ccc",
                    "boxShadow": "0 0 0.2em hsl(219, 1%, 72%)",
                    "outline": "0",
                    "padding": "5px",
                    "background-color": "#eee",
                    "&:focus": {
                      "border-top": "3px solid orange",
                      "padding-top": "3px"
                    },
                    "&[data-active-tab='1']": {
                      "border-top": "3px solid green",
                      "padding-top": "3px",
                      "background-color": "white"
                    },
                    "&[data-active-tab='1']::after": {
                      "bottom": "-1px",
                      "position": "absolute",
                      "height": "5px",
                      "right": "0",
                      "left": "0",
                      "background-color": "white",
                      "content": "' '",
                      "z-index": "3"
                    },
                    "&:hover": {
                      "border-top": "3px solid orange",
                      "padding-top": "3px"
                    }
                  }
                }
              },
              {
                "type": "element",
                "content": {
                  "elementType": "button",
                  "children": [
                    "Tab Three"
                  ],
                  "attrs": {
                    "role": "tab",
                    "data-active-tab": "$state.activeTab"
                  },
                  "events": {
                    "click": [
                      {
                        "type": "stateChange",
                        "modifies": "activeTab",
                        "newState": 2
                      }
                    ]
                  },
                  "style": {
                    "fontSize": "18px",
                    "marginRight": "6px",
                    "position": "relative",
                    "overflow": "visible",
                    "cursor": "pointer",
                    "borderTop": "1px solid #ccc",
                    "borderLeft": "1px solid #ccc",
                    "borderRight": "1px solid #ccc",
                    "boxShadow": "0 0 0.2em hsl(219, 1%, 72%)",
                    "padding": "5px",
                    "outline": "0",
                    "background-color": "#eee",
                    "&:focus": {
                      "border-top": "3px solid orange",
                      "padding-top": "3px"
                    },
                    "&[data-active-tab='2']": {
                      "border-top": "3px solid green",
                      "padding-top": "3px",
                      "background-color": "white"
                    },
                    "&[data-active-tab='2']::after": {
                      "bottom": "-1px",
                      "position": "absolute",
                      "height": "5px",
                      "right": "0",
                      "left": "0",
                      "background-color": "white",
                      "content": "' '",
                      "z-index": "3"
                    },
                    "&:hover": {
                      "border-top": "3px solid orange",
                      "padding-top": "3px"
                    }
                  }
                }
              }
            ]
          }
        },
        {
          "type": "element",
          "content": {
            "elementType": "container",
            "name": "tabPanel",
            "style": {
              "height": "300px",
              "borderBottom": "1px solid #ccc",
              "borderLeft": "1px solid #ccc",
              "borderRight": "1px solid #ccc",
              "boxShadow": "0 0 0.2em hsl(219, 1%, 72%)",
              "backgroundColor": "white",
              "position": "relative",
              "z-index": "2",
              "padding": "5px"
            },
            "children": [
              {
                "type": "conditional",
                "content": {
                  "node": {
                    "type": "static",
                    "content": "This text is in tab number 1"
                  },
                  "reference": {
                    "type": "dynamic",
                    "content": {
                      "referenceType": "state",
                      "id": "activeTab"
                    }
                  },
                  "value": 0
                }
              },
              {
                "type": "conditional",
                "content": {
                  "node": {
                    "type": "static",
                    "content": "This text is in tab number 2"
                  },
                  "reference": {
                    "type": "dynamic",
                    "content": {
                      "referenceType": "state",
                      "id": "activeTab"
                    }
                  },
                  "value": 1
                }
              },
              {
                "type": "conditional",
                "content": {
                  "node": {
                    "type": "static",
                    "content": "This text is in tab number 3"
                  },
                  "reference": {
                    "type": "dynamic",
                    "content": {
                      "referenceType": "state",
                      "id": "activeTab"
                    }
                  },
                  "value": 2
                }
              }
            ]
          }
        }
      ]
    }
  }
}

module.exports = myComponent