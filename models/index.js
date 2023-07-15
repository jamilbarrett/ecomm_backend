// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');


// Products belongsTo Category
Product.belongsTo(Category, {
  onDelete: 'CASCADE'
})
// Categories have many Products
Category.hasMany(Product, {
  onDelete: 'CASCADE'
})
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  onDelete: 'CASCADE',
  through: ProductTag
})

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  onDelete: 'CASCADE',
  through: ProductTag
})


module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};