// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id',
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'categorey_id',
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: {
    model: 'product_tag',
    unique: false,
  },
  as: "product_descrip"
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany (Product, {
  through: {
    model: 'product_tag',
    unique: false
  },
  as: 'product_type'
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
