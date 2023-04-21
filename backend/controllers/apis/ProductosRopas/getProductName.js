const modelRopa = require('../../../model/ropasProducts')
getProductsRopaName = async (req, res) => {
    const name = req.params.name;
    try {
      const product = await modelRopa.findOne({ name: name });
      res.json(product);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
  module.exports = getProductsRopaName;