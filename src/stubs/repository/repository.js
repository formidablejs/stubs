const Stub = require('../../Stub');

module.exports = class Repository extends Stub {
	/**
	 * @inheritdoc
	 */
	get props() {
		return {
			table: {
				type: String,
				required: true
			},
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
			'table': this.options['table'],
			'namespace': this.realPath,
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
