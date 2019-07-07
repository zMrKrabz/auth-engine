const expressjwt = require('express-jwt');
const config = require('../config.json');
const userService = require('../user/service');

function jwt (user) {
	const secret = config.jwt.secret;

	return expressjwt({
		secret: secret,
		credentialsRequired: false,
		getToken: getToken
	}).unless({
		path: [
			'/users/login',
			'/users/register'
		]
	});
}

function getToken(req) {
	if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
		return req.headers.authorization.split(' ')[1];
	} else {
		if (req.query && req.query.token) {
			return req.query.token;
		};

		return null;
	};
};