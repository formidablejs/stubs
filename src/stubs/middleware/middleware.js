const Stub = require('../../Stub');

module.exports = class Middleware extends Stub {
	/**
	 * @inheritdoc
	 */
	get destination() {
		return 'app/Http/Middleware';
	}
}
