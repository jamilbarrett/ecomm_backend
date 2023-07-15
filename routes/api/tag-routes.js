const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  const tags = await Tag.findAll({
    include: Product
  })
  return res.json(tags)
  // find all tags
  // be sure to include its associated Product data
});

router.get('/:id', async (req, res) => {
  const tag = await Tag.findByPk(req.params.id, {
    include: Product
    
  })
  return res.json(tag)
  // find a single tag by its `id`
  // be sure to include its associated Product data
});

router.post('/', async (req, res) => {
  const createTag = await Tag.create(req.body)
  return res.json(createTag)
  // create a new tag
});

router.put('/:id', async (req, res) => {
  const updateTag = await Tag.update({
    id: req.body.id,
    tag_name: req.body.tag_name
  },
  {
    where: {
      id: req.params.id
    }
  })
  return res.json(updateTag)
  // update a tag's name by its `id` value
});

router.delete('/:id', async (req, res) => {
  const deleteTag = await Tag.destroy({
    where: {
      id: req.params.id
    }
  })
  return res.json(deleteTag)
  // delete on tag by its `id` value
});

module.exports = router;
