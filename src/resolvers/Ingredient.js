module.exports = {
  Ingredient: {
    detailedDescription: (parent) => {
      console.log(parent); // returns an Ingredient object with properties such as: id, text, name
      return parent.text;
    },
  },
};