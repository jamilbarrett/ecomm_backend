// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');


// Products belongsTo Category
Product.belongsTo(Category, {
  onDelete: 'CASCADE',
  foreignKey: 'category_id'
})
// Categories have many Products
Category.hasMany(Product, {
  onDelete: 'CASCADE',
  foreignKey: 'category_id'
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

ProductTag.belongsTo(Tag, {
  foreignKey: 'tagId',
  onDelete: 'CASCADE'
})


Tag.hasMany(ProductTag, {
  foreignKey: 'tagId',
  onDelete: 'CASCASE'
})

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
