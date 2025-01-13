const checkAuth = (req, res, next) => {
    if (req.isAuthenticated && req.isAuthenticated()) {
        res.locals.layout = '../views/layout/upload';
    } else {
        res.locals.layout = '../views/layout/main';
    }
    next();
};

module.exports = checkAuth;
