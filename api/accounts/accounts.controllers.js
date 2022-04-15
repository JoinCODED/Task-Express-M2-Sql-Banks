let accounts = require('../../accounts');
let Account = require('../../db/models/Account');
const { Op } = require('sequelize');

exports.accountCreate = async (req, res) => {
  try {
    const newAccount = await Account.create(req.body);
    res.status(201).json(newAccount);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.accountDelete = async (req, res) => {
  const { accountId } = req.params;
  try {
    const foundAccount = await Account.findByPk(+accountId);
    if (foundAccount) {
      await foundAccount.destroy();
      res.status(204).end();
    } else {
      res.status(404).json({ message: 'account not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.accountUpdate = async (req, res) => {
  const { accountId } = req.params;
  try {
    const foundAccount = Account.findByPk(+accountId);
    if (foundAccount) {
      await foundAccount.update(req.body);
      res.status(204).end();
    } else {
      res.status(404).json({ message: 'Account not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.accountsGet = async (req, res) => {
  try {
    const accounts = await Account.findAll();
    res.json(accounts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getAccountsByFund = async (req, res) => {
  const { fund } = req.params;
  const accounts = await Account.findAll({
    where: {
      funds: {
        [Op.gt]: +fund,
      },
    },
  });
  res.json(accounts);
};
