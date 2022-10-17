const Stub = require('../../Stub');

module.exports = class Repository extends Stub {
	/**
	 * @inheritdoc
	 */
	get destination() {
		return 'app/Repositories';
	}
}
