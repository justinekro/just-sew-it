const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.signUp = async (req, res, next) => {
	try {
		const hash = await bcrypt.hash(req.body.password, 10);
		const user = new User({
			mail: req.body.mail,
			name: req.body.name,
			password: hash
		});
		const response = await user.save();
		return res.status(200).json(response);
	} catch (error) {
		return res.status(400).json({
			error: 'Une erreur est survenue, merci de réessayer !'
		});
	}
};

exports.logIn = async (req, res, next) => {
	try {
		const user = await User.findOne({ mail: req.body.mail });

		if (!!user) {
			const hasValidPassword = await bcrypt.compare(
				req.body.password,
				user.password
			);
			if (!!hasValidPassword) {
				return res.status(200).json({
					userId: user._id,
					token: jwt.sign({ userId: user._id }, 'RANDOM_TOKEN_SECRET', {
						expiresIn: '24h'
					})
				});
			} else {
				return res.status(401).json({ error: 'Mot de passe erroné' });
			}
		} else {
			return res.status(401).json({
				error: 'Cette adresse mail ne correspond à aucun utilisateur'
			});
		}
	} catch (error) {
		return res.status(500).json({
			error: 'Une erreur est survenue, merci de réessayer !'
		});
	}
};
