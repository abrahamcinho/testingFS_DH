const db = require('../config/dataBase_config');

const users_Ctrl = {
    listAll: (req, res) => {
        db.Users.findAll()
        .then((users) => res.render('listadoUsuarios', { users: users }))
        .catch((e) => console.log(e));
    },
    listOne: (req, res) => {
        db.Users.findOne({ where: { user_id: req.params.id } })
        .then((user) => res.render('detalleUsuario', { user: user }))
        .catch((e) => console.log(e));
    },
    modifyUser: (req, res) => {
        db.Users.findOne({ where: { user_id: req.params.id } })
        .then((user) => {
            db.UsersCateg.findAll()
            .then((categories) => {
                res.render('editarUser', { user: user, categories: categories });})
            .catch((e) => console.log(e));})
        .catch((e) => console.log(e));
    },
    updateUser: (req, res) => {
        db.Users.update({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            avatar: req.body.avatar,
            users_categ_id: req.body.users_categ_id
        },
        { where: { user_id: req.params.id } })
        .catch((e) => console.log(e));
        res.redirect('/usuarios');
    },
    deleteUser: (req, res) => {
        db.Users.destroy({ where: { user_id: req.params.id } })
        .catch((e) => console.log(e));
        res.redirect('/usuarios');
    },
    createForm: (req, res) => {
        db.UsersCateg.findAll()
        .then((categories) => res.render('crearUser', { categories: categories }))
        .catch((e) => console.log(e));
    },
    createUser: (req, res) => {
        db.Users.create({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            password: req.body.password,
            avatar: req.body.avatar,
            users_categ_id: req.body.users_categ_id
        })
        .catch((e) => console.log(e));
        res.redirect('/usuarios');
    }
}

module.exports = users_Ctrl;