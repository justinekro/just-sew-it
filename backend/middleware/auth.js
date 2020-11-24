const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
	try {
		const token = req.body.token;
		if (!token) {
			return res
				.status(401)
				.json({ error: 'Une erreur est survenue, merci de réessayer !' });
		}
		const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
		const userId = decodedToken.userId;
		if (req.body.userId && req.body.userId !== userId) {
			throw { error: 'Une erreur est survenue, merci de réessayer !' };
		} else {
			next();
		}
	} catch {
		res.status(401).json({
			error: 'Une erreur est survenue, merci de réessayer !'
		});
	}
};
