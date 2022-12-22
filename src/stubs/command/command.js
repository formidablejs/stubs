const Stub = require('../../Stub');

module.exports = class Command extends Stub {
	/**
	 * @inheritdoc
	 */
	get props() {
		return {
			domain: {
				type: String,
				required: false
			}
		};
	}

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
		if (this.options.domain) {
			return `app/Domain/${this.options.domain}/Commands`;
		}

		return 'app/Console/Commands';
	}

    /**
	 * Signature used by the command.
	 */
	get signature() {
		return this.realClassName
			.replace(/([A-Z])/g, ':$1')
			.trim()
			.replace(/^\:+/, '')
			.toLowerCase();
	}
}
