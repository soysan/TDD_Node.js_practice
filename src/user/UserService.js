const User = require('./User');
const bcrypt = require('bcrypt');

const save = async (body) => {
  // bcryptでhashしてオブジェクトを送るようにする
  const hash = await bcrypt.hash(body.password, 10);
  const user = { ...body, password: hash };
  await User.create(user);
};

const findByEmail = async (email) => {
  return await User.findOne({ where: { email: email } });
};

module.exports = { save, findByEmail };

// sugar syntax
// const user = Object.assign({}, req.body, { password: hash });
// const user = {
//   username: req.body.username,
//   email: req.body.email,
//   password: hash,
// };
