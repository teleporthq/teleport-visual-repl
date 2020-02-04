const myComponent = {
  "name": "Simple Component",
  "propDefinitions": {
    "heading": {
      "type": "string",
      "defaultValue": "Hello"
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
            "elementType": "text",
            "children": [
              {
                "type": "dynamic",
                "content": {
                  "referenceType": "prop",
                  "id": "heading"
                }
              },
              {
                "type": "static",
                "content": "World!"
              }
            ]
          }
        }
      ]
    }
  }
};
  

module.exports = myComponent;
