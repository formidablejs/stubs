const Stub = require('../../Stub');

module.exports = class Request extends Stub {
	/**
	 * @inheritdoc
	 */
	get destination() {
		return 'app/Http/Requests';
	}
}
