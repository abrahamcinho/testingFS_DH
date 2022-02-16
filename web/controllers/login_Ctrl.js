const db = require('../config/dataBase_config');
const bcryptjs = require("bcryptjs");

const login_Ctrl = {
    showLogin: (req, res) => {
        db.Users.findAll()
        .then((users) => res.render('login'))
        .catch((e) => console.log(e));
    },
    reqLogin: (req, res) => {
        //Manejo de cookies
        if (req.body.remember) {
            var hour = 3600;
            req.session.cookie.maxAge = 14 * 24 * hour;
            res.cookie("Celeste", "algo");
        } else {
            req.session.cookie.expires = false;
        }
        db.Users.findOne({ where: { email: req.body.email } })
        .then((user) => {
            if (user && bcryptjs.compareSync(req.body.password, user.password)) {
                delete user.password;
                console.log('user', user);
                req.session.userLogged = user;
                console.log('logged', req.session.userLogged);
                res.redirect('/', { user: user });
            } else {
                res.render('login');
            }
        })
        .catch((e) => console.log(e));
    }
}

module.exports = login_Ctrl;