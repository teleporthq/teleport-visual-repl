const myComponent = {
  "name": "ContactForm",
  "node": {
    "type": "element",
    "content": {
      "elementType": "form",
      "attrs": {
        "type": "get",
        "url": "/"
      },
      "style": {
        "font-size": "18px"
      },
      "children": [
        {
          "type": "element",
          "content": {
            "elementType": "container",
            "name": "name-group",
            "style": {
              "margin-bottom": "10px"
            },
            "children": [
              {
                "type": "element",
                "content": {
                  "elementType": "label",
                  "attrs": {
                    "for": "name"
                  },
                  "style": {
                    "vertical-align": "middle",
                    "display": "inline-block",
                    "width": "100px"
                  },
                  "children": [
                    "Name:"
                  ]
                }
              },
              {
                "type": "element",
                "content": {
                  "elementType": "textinput",
                  "style": {
                    "padding": "5px",
                    "fontSize": "16px"
                  },
                  "attrs": {
                    "id": "name",
                    "name": "name"
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
            "name": "email-group",
            "style": {
              "margin-bottom": "10px"
            },
            "children": [
              {
                "type": "element",
                "content": {
                  "elementType": "label",
                  "attrs": {
                    "for": "email"
                  },
                  "style": {
                    "vertical-align": "middle",
                    "display": "inline-block",
                    "width": "100px"
                  },
                  "children": [
                    "Email:"
                  ]
                }
              },
              {
                "type": "element",
                "content": {
                  "elementType": "textinput",
                  "style": {
                    "padding": "5px",
                    "fontSize": "16px"
                  },
                  "attrs": {
                    "type": "email",
                    "id": "email",
                    "name": "email"
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
            "name": "message-group",
            "style": {
              "margin-bottom": "10px"
            },
            "children": [
              {
                "type": "element",
                "content": {
                  "name": "message-label",
                  "elementType": "label",
                  "attrs": {
                    "for": "message"
                  },
                  "style": {
                    "vertical-align": "top",
                    "display": "inline-block",
                    "width": "100px",
                    "marginTop": "5px"
                  },
                  "children": [
                    "Message:"
                  ]
                }
              },
              {
                "type": "element",
                "content": {
                  "elementType": "textarea",
                  "style": {
                    "padding": "5px",
                    "fontSize": "16px",
                    "border-color": "#ccc"
                  },
                  "attrs": {
                    "rows": "8",
                    "cols": "30",
                    "id": "message",
                    "name": "message"
                  }
                }
              }
            ]
          }
        },
        {
          "type": "element",
          "content": {
            "elementType": "button",
            "style": {
              "font-size": "18px",
              "padding": "5px 10px",
              "background-color": "white",
              "color": "green",
              "marginLeft": "100px",
              "border": "1px solid grey",
              "transition": "all .35s ease-out",
              "border-radius": "3px",
              "cursor": "pointer",
              "&:hover": {
                "type": "nested-style",
                "content": {
                  "background-color": "green",
                  "color": "white"
                }
              }
            },
            "children": [
              "Send"
            ]
          }
        }
      ]
    }
  }
}
module.exports = myComponent;
