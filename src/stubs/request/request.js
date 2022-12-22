const Stub = require('../../Stub');

module.exports = class Request extends Stub {
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
			return `app/Domain/${this.options.domain}/Requests`;
		}

		return 'app/Http/Requests';
	}
}
