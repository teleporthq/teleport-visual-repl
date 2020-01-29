const myimport = require("./componentfile");
console.log(myimport);

let depth = 0;
const getComponent = (tree, depth) => {
  const contents = tree.content;
  let list = [];
  if (!contents) return [];
  Object.keys(contents).forEach(key => {
    const content = contents[key];
    if (typeof content === "string") {
      if (key === "elementType") {
        list.push({ content, depth });
      }
    } else {
      if (key === "children") {
        content.forEach(
          child => (list = [...list, ...getComponent(child, depth + 1)])
        );
      }
    }
  });
  return list;
};
console.log("Result: ", getComponent(myimport.node, depth));
