const express = require('express');
const router = express.Router();
const {
  accountsGet,
  accountUpdate,
  accountDelete,
  accountCreate,
  getAccountsByFund,
} = require('./accounts.controllers');

router.get('/', accountsGet);
router.get('/:fund', getAccountsByFund);
router.post('/', accountCreate);

router.delete('/:accountId', accountDelete);

router.put('/:accountId', accountUpdate);

module.exports = router;
