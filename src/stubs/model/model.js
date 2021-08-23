const Stub = require('../../Stub');

module.exports = class Model extends Stub {
	/**
	 * @inheritdoc
	 */
	get destination() {
		return 'app/Models';
	}
}
