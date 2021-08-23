const Stub = require('../../Stub');

module.exports = class Config extends Stub {
	/**
	 * @inheritdoc
	 */
	get destination() {
		return 'config';
	}
}
