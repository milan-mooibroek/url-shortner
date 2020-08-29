const express = require('express');
const router = express.Router();
const url = require('../app/models/url/url')
/* GET home page. */
router.get('/:hash', async (req, res, next) => {
   const urlModel = await url.find({hash: req.params.hash});
   if (urlModel === null)  return res.send('Nothing to redirect.');
   return  res.redirect(urlModel.getUrl());
});

module.exports = router;