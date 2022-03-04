const pluralize = require('pluralize');
const Stub = require('../../Stub');

module.exports = class Command extends Stub {
    /**
	 * @inheritdoc
	 */
	get data() {
		return {
			'class': this.realClassName,
			'signature': this.signature
		};
	}

	/**
	 * @inheritdoc
	 */
	get destination() {
		return 'app/Console/Commands';
	}

    /**
	 * Signature used by the command.
	 */
	get signature() {
		return pluralize(this.realClassName)
			.replace(/([A-Z])/g, ':$1')
			.trim()
			.replace(/^\:+/, '')
			.toLowerCase();
	}
}
