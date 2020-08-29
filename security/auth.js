const auth = require('basic-auth');
const admin = { name: process.env.HTACCESS_API_USER, password: process.env.HTACCESS_API_PASS };
module.exports = function(req, res, next) {
    let user = auth(req);
    if (!user || !admin.name || admin.password !== user.pass) {
        res.set('WWW-Authenticate', 'Basic realm="Wrong username / password combination"');
        return res.status(401).send();
    }
    req.auth = {
        user: process.env.HTACCESS_API_USER
    }
    return next()
};