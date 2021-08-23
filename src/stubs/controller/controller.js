const Stub = require('../../Stub');

module.exports = class Controller extends Stub {
	/**
	 * @inheritdoc
	 */
	get destination() {
		return 'app/Http/Controllers';
	}
}
