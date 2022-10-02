const Stub = require('../../Stub');

module.exports = class View extends Stub {
	/**
	 * @inheritdoc
	 */
	get destination() {
		return 'resources/views';
	}
}
