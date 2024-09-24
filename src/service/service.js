const User = require("../model/user.model.js");
const Address = require("../model/address.model.js");

const Register = async (name, address) => {
  try {
    let user = await findUserByName(name);
    if (!user) {
      user = new User({ name });
      await user.save();

      const userAddress = new Address({ address, user: user._id });
      await userAddress.save();

      user.addresses.push(userAddress);
      const saved = await user.save();

      return user, saved;
    } else {
      const userAddress = new Address({ address, user: user._id });
      await userAddress.save();

      user.addresses.push(userAddress);
      const saved = await user.save();

      return user, saved;
    }
  } catch (error) {
    throw error;
  }
};

const findUserByName = async (name) => {
  const user = await User.find({ name });
  if (user) return user[0];
  else return null;
};

module.exports = { Register };
