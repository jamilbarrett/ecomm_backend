const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  const categories = await Category.findAll({
    include: Product
  }) 
  return res.json(categories)
  // find all categories
  // be sure to include its associated Products
});

router.get('/:id', async (req, res) => {
  const category = await Category.findByPk(req.params.id, {
    include: Product
  })
  return res.json(category)
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/', async (req, res) => {
  const makecategory = await Category.create(req.body)
  return res.json(makecategory)

  // create a new category
});

router.put('/:id', async (req, res) => {
  const updatecategory = await Category.update({
    id: req.body.id,
    category_name: req.body.category_name
  },
  {
    where: {
      id: req.params.id
    },
  },
  ) 
  return res.json(updatecategory)
  
  // update a category by its `id` value
});

router.delete('/:id', async (req, res) => {
  const deletecategory = await Category.destroy({
    where: {
      id: req.params.id
    }
  })
  return res.json(deletecategory)
  // delete a category by its `id` value
});

module.exports = router;
