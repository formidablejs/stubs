const Stub = require('../../Stub');

module.exports = class Repository extends Stub {
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
	get destination() {
		if (this.options.domain) {
			return `app/Domain/${this.options.domain}/Repositories`;
		}

		return 'app/Repositories';
	}
}
