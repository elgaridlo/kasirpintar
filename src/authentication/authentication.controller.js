const jwt = require('jsonwebtoken');
const asyncHandlerExpress = require('express-async-handler')
const AppError = require('../errorHandler/appError');

const signToken = (id) => {
    // const expires10second = Math.floor((new Date().getTime() / 1000) + (15 * 1000)) 
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        // expiresIn: process.env.JWT_EXPIRES_IN,
        expiresIn: '60s',
    });
};

const login = async(req, res, next) => {
    const {username} = req.body
    const token = signToken(username);

    res.status(200).json({
        status: 'Success',
        token
    });
};

const protect = asyncHandlerExpress(async (req, res, next) => {
    let token;
    // 1) Gettitng token and check if its there

    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith('Bearer')
    ) {
        token = req.headers.authorization.split(' ')[1];
    }
    
    // 2 ) Verification token
    if (!token) {
        return next(
            new AppError('Token tidak ditemukan ! Tolong login untuk mendapatkan akses.', 401)
        );
    }
    // Build in promisify node, it is the same as await. It is es6 destructuring
    // jwt.verify is the function that we want to call, and after that is the param that we want to pass
    
    const data = await jwt.verify(token, process.env.JWT_SECRET)

    if ('kasir_pintar' !== data.id) {
        return next(
            new AppError('username tidak sesuai! Tolong login dengan username yang benar', 401)
        )
    }
    // console.log('exp = ', Math.floor(new Date().getTime() / 1000) )

    // Send the user to the other middleware only req that could accessed by the other middleware
    // GRANT ACCESS TO THE PROTECTED ROUTE
    next();
});


module.exports = {login, protect}