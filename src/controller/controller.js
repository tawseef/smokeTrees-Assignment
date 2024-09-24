const http_status = require("http-status");
const { Register } = require("../service/service.js");

const handleRegister = async (req, res) => {
  const { name, address } = req.body;
  try {
    const register = await Register(name, address);
    return res
      .status(http_status.OK)
      .json({ name: register.name, addresses: register.addresses });
  } catch (error) {
    return res.status(http_status.INTERNAL_SERVER_ERROR).json({ error: error });
  }
};

module.exports = { handleRegister };
