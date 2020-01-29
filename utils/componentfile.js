const myComponent = {
  $schema: "https://docs.teleporthq.io/uidl-schema/v1/component.json",
  name: "Page",
  node: {
    type: "element",
    content: {
      elementType: "container",
      name: "page",
      children: [
        {
          type: "element",
          content: {
            elementType: "container",
            name: "container",
            children: [
              {
                type: "element",
                content: {
                  elementType: "heading1",
                  name: "heading1",
                  children: [
                    {
                      type: "static",
                      content: "Vlad Grecu"
                    }
                  ],
                  style: {
                    fontSize: {
                      type: "static",
                      content: "2em"
                    },
                    marginTop: {
                      type: "static",
                      content: "0.67em"
                    },
                    marginBottom: {
                      type: "static",
                      content: "0.67em"
                    },
                    color: {
                      type: "static",
                      content: "white"
                    },
                    textAlign: {
                      type: "static",
                      content: "center"
                    },
                    "@media(max-width: 479px)": {
                      type: "nested-style",
                      content: {
                        textAlign: {
                          type: "static",
                          content: "center"
                        }
                      }
                    }
                  },
                  attrs: {}
                }
              },
              {
                type: "element",
                content: {
                  elementType: "container",
                  name: "container",
                  children: [],
                  style: {
                    width: {
                      type: "static",
                      content: "100px"
                    },
                    height: {
                      type: "static",
                      content: "100px"
                    },
                    backgroundColor: {
                      type: "static",
                      content: "#ffffff"
                    },
                    margin: {
                      type: "static",
                      content: "auto"
                    },
                    borderRadius: {
                      type: "static",
                      content: "50%"
                    },
                    "@media(max-width: 479px)": {
                      type: "nested-style",
                      content: {
                        backgroundColor: {
                          type: "static",
                          content: "#d14141"
                        },
                        margin: {
                          type: "static",
                          content: "auto"
                        },
                        padding: {
                          type: "static",
                          content: "0"
                        }
                      }
                    }
                  },
                  attrs: {}
                }
              },
              {
                type: "element",
                content: {
                  elementType: "heading6",
                  name: "heading6",
                  children: [
                    {
                      type: "static",
                      content: "Heading Level 6"
                    }
                  ],
                  style: {
                    fontSize: {
                      type: "static",
                      content: ".75em"
                    },
                    marginTop: {
                      type: "static",
                      content: "2.33em"
                    },
                    marginBottom: {
                      type: "static",
                      content: "2.33em"
                    },
                    color: {
                      type: "static",
                      content: "#ffffff"
                    },
                    margin: {
                      type: "static",
                      content: "auto"
                    },
                    border: {
                      type: "static",
                      content: "1px solid red"
                    },
                    textAlign: {
                      type: "static",
                      content: "center"
                    }
                  },
                  attrs: {}
                }
              }
            ],
            style: {
              height: {
                type: "static",
                content: "300px"
              },
              backgroundColor: {
                type: "static",
                content: "black"
              },
              borderRadius: {
                type: "static",
                content: "2%"
              },
              border: {
                type: "static",
                content: "1px solid red"
              },
              padding: {
                type: "static",
                content: "30px"
              },
              boxSizing: {
                type: "static",
                content: "border-box"
              },
              width: {
                type: "static",
                content: "300px"
              },
              marginTop: {
                type: "static",
                content: "auto"
              },
              marginRight: {
                type: "static",
                content: "auto"
              },
              marginBottom: {
                type: "static",
                content: "auto"
              },
              marginLeft: {
                type: "static",
                content: "auto"
              },
              "@media(max-width: 479px)": {
                type: "nested-style",
                content: {
                  borderTopLeftRadius: {
                    type: "static",
                    content: "2%"
                  },
                  borderTopRightRadius: {
                    type: "static",
                    content: "2%"
                  },
                  borderBottomLeftRadius: {
                    type: "static",
                    content: "2%"
                  },
                  borderBottomRightRadius: {
                    type: "static",
                    content: "2%"
                  },
                  height: {
                    type: "static",
                    content: "300px"
                  },
                  width: {
                    type: "static",
                    content: "300px"
                  },
                  marginTop: {
                    type: "static",
                    content: "auto"
                  },
                  marginRight: {
                    type: "static",
                    content: "auto"
                  },
                  marginBottom: {
                    type: "static",
                    content: "auto"
                  },
                  marginLeft: {
                    type: "static",
                    content: "auto"
                  },
                  margin: {
                    type: "static",
                    content: "20px auto"
                  }
                }
              }
            },
            attrs: {}
          }
        }
      ],
      style: {
        backgroundColor: {
          type: "static",
          content: "#fcfcfc"
        },
        display: {
          type: "static",
          content: "block"
        },
        fontFamily: {
          type: "static",
          content: "Open Sans"
        },
        width: {
          type: "static",
          content: "100%"
        },
        height: {
          type: "static",
          content: "100%"
        },
        overflow: {
          type: "static",
          content: "auto"
        }
      },
      attrs: {}
    }
  },
  propDefinitions: {}
};

module.exports = myComponent;
