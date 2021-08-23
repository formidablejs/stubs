const Stub = require('../../Stub');

module.exports = class Exception extends Stub {
	/**
	 * @inheritdoc
	 */
	get destination() {
		return 'app/Exceptions';
	}
}
