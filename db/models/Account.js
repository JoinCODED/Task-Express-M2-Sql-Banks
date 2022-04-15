const AccountModel = (sequelize, DataTypes) => {
  const Account = sequelize.define('Account', {
    username: {
      type: DataTypes.STRING,
    },
    funds: {
      type: DataTypes.INTEGER,
    },
  });
  return Account;
};

module.exports = AccountModel;
