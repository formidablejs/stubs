const Stub = require('../../Stub');

module.exports = class Factory extends Stub {
	/**
	 * @inheritdoc
	 */
	get destination() {
		return 'database/factories';
	}

	/**
	 * @inheritdoc
	 */
	get fileName() {
		const ext = this.stub.slice(-3) === '.ts' ? '.ts' : '.js';

		return this.realClassName + (ext);
	}
}
