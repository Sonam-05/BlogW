const JWT = require('jsonwebtoken');

module.exports = async (req, res, next) => {
    try {
        const token = req.headers['authorization'].split('')[1];
        JWT.verify(token, process.env.JWT_SECRETKEY, (err, decode) => {
            if (err) {
                return res.status(200).send({ success: false, message: `authentication issue` })
            } else {
                req.body.userId = decode.id;
                next();
            }
        })
    } catch (error) {
        res.status(500).send({ success: false, message: `authmiddlewares api issue : ${error.message}`, error });
    }
}