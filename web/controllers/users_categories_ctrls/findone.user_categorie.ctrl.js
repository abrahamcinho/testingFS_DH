const { db } = require("../../config/dataBase_config");

const cbFindOneUserCateg = async (req, res) => {
  try {
    const whereUserCategIdEQ = {
      where: {
        users_categ_id: req.params.users_categ_id
      }
    };

    const userscateg = await db.UsersCateg.findOne(whereUserCategIdEQ);
    res.json({ err: false, payload: userscateg });
  } catch (err) {
    res.json({ err: true, payload: err });
  }
};

module.exports = cbFindOneUserCateg;