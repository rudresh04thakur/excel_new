module.exports = async (req, res, next) => {
    if (req.session.profile) {
        res.locals.profile = req.session.profile
        next();
    } else {
        res.redirect('/login');
    }
};
