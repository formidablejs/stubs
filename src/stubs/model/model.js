const Stub = require('../../Stub');
const pluralize = require('pluralize');

module.exports = class Model extends Stub {
	/**
	 * @inheritdoc
	 */
	get data() {
		return {
			'class': this.realClassName,
			'namespace': this.realPath,
			'table': this.tableName
		};
	}

	/**
	 * @inheritdoc
	 */
	get destination() {
		return 'app/Models';
	}

	/**
	 * Table name used by the model.
	 */
	get tableName() {
		return pluralize(this.realClassName)
			.replace(/([A-Z])/g, '_$1')
			.trim()
			.replace(/^\_+/, '')
			.toLowerCase();
	}
}
