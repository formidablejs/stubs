const Stub = require('../../Stub');

module.exports = class Resolver extends Stub {
	/**
	 * @inheritdoc
	 */
	get destination() {
		return 'app/Resolvers';
	}
}
