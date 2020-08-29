const express = require('express');
const router = express.Router();
const urls = require('../app/models/url/url');
const validUrl = require('valid-url');

//Todo put all text in .json and remove error handling from routes

router.post('/create', async (req, res, next) => {
  const user = req.auth.user;
  const url = req.body.url;
  if (!validUrl.isWebUri(url)) return res.json({error: 'Please submit a valid url'});
  const urlModal = await urls.create(url, user);
  return  res.json(urlModal);
});

router.post('/delete', async (req, res, next) => {
  const user = req.auth.user;
  const removeId = req.body.remove_id;
  if (!removeId) return res.json({error: 'Please submit a valid id'});
  const deleteStatus = await urls.delete({removeId: removeId, user: user});
  return (deleteStatus.deletedCount  > 0) ? res.json({success: 'Sucessfully deleted'}) : res.json({error: 'Did not find user / id combo'});
});

module.exports = router;