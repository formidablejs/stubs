const Stub = require('../../Stub');

module.exports = class Mail extends Stub {
	/**
	 * @inheritdoc
	 */
	get destination() {
		return 'app/Mail';
	}
}
