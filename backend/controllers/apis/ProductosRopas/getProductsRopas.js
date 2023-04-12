const modelRopa = require('../../../model/ropasProducts')

getProductsRopas =  async (req, res) => {
    try {
      const getProducts = await modelRopa.find();
      res.json(getProducts);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
  module.exports = getProductsRopas;