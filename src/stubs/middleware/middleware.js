const Stub = require('../../Stub');

module.exports = class Middleware extends Stub {
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
			return `app/Domain/${this.options.domain}/Middleware`;
		}

		return 'app/Http/Middleware';
	}
}
