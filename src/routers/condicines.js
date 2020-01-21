const express = require('express');
const router = express.Router();
const  modelCondiciones = require('../models/Condiciones');


router.get('/condiciones', async(req, res) => {
  const result = await modelCondiciones.findall();
  res.json(result);
});

router.post('/condiciones/add', async(req, res) => {
  console.log(req.body);
  const result = await modelCondiciones.insert(req.body);
  res.json(result);
});
router.delete('/condiciones/:id', async(req, res) => {
  const { id } = req.params;
  console.log(id);
  const result = await modelCondiciones.delete(id);
  res.json(result);
});

module.exports = router;