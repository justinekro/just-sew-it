import validator from 'email-validator';

export function checkValidationSignUp({ name, mail, password }) {
	if (!name.length) {
		return { name: 'Merci de renseigner votre prénom' };
	}
	if (!validator.validate(mail)) {
		return { mail: 'Merci de rentrer une adresse mail valide' };
	}
	if (password.length < 6) {
		return {
			password: "Merci de rentrer un mot de passe d'au moins 6 caractères"
		};
	}
}

export function checkValidationLogIn({ mail, password }) {
	if (!validator.validate(mail)) {
		return { mail: 'Merci de rentrer une adresse mail valide' };
	}
	if (password.length < 6) {
		return { password: 'Merci de renseigner votre mot de passe' };
	}
}
