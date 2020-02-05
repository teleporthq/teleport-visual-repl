const myComponent = {
  "name": "Navbar",
  "node": {
    "type": "element",
    "content": {
      "elementType": "nav",
      "style": {
        "border-bottom": {
          "type": "static",
          "content": "1px solid rgba(0,0,0,0.25)"
        }
      },
      "children": [
        {
          "type": "element",
          "content": {
            "elementType": "ul",
            "name": "list-container",
            "style": {
              "list-style": "none",
              "margin": "0px",
              "padding": "0px",
              "display": "flex",
              "font-size": "18px"
            },
            "children": [
              {
                "type": "element",
                "content": {
                  "elementType": "li",
                  "name": "home-link",
                  "style": {
                    "padding": "10px 20px",
                    "transition": "all .15s ease-in-out",
                    "cursor": "pointer",
                    "&:hover": {
                      "type": "nested-style",
                      "content": {
                        "color": {
                          "type": "static",
                          "content": "red"
                        },
                        "border-bottom": "3px solid red",
                        "padding-bottom": "7px"
                      }
                    }
                  },
                  "children": [
                    {
                      "type": "element",
                      "content": {
                        "elementType": "navlink",
                        "attrs": {
                          "transitionTo": "home"
                        },
                        "children": [
                          "Home"
                        ]
                      }
                    }
                  ]
                }
              },
              {
                "type": "element",
                "content": {
                  "name": "team-link",
                  "elementType": "li",
                  "style": {
                    "padding": "10px 20px",
                    "transition": "all .15s ease-in-out",
                    "cursor": "pointer",
                    "&:hover": {
                      "type": "nested-style",
                      "content": {
                        "color": {
                          "type": "static",
                          "content": "red"
                        },
                        "border-bottom": "3px solid red",
                        "padding-bottom": "7px"
                      }
                    }
                  },
                  "children": [
                    {
                      "type": "element",
                      "content": {
                        "elementType": "navlink",
                        "attrs": {
                          "transitionTo": "team"
                        },
                        "children": [
                          "Team"
                        ]
                      }
                    }
                  ]
                }
              },
              {
                "type": "element",
                "content": {
                  "elementType": "li",
                  "name": "contact-link",
                  "style": {
                    "padding": "10px 20px",
                    "transition": "all .15s ease-in-out",
                    "cursor": "pointer",
                    "&:hover": {
                      "type": "nested-style",
                      "content": {
                        "color": {
                          "type": "static",
                          "content": "red"
                        },
                        "border-bottom": "3px solid red",
                        "padding-bottom": "7px"
                      }
                    }
                  },
                  "children": [
                    {
                      "type": "element",
                      "content": {
                        "elementType": "navlink",
                        "attrs": {
                          "transitionTo": "contact-us"
                        },
                        "children": [
                          "Contact Us"
                        ]
                      }
                    }
                  ]
                }
              }
            ]
          }
        }
      ]
    }
  }
}
module.exports = myComponent;
