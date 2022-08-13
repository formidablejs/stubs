const path = require('path');
const Stub = require('../../Stub');

module.exports = class Controller extends Stub {
	/**
	 * @inheritdoc
	 */
	 get props() {
		return {
			api: {
				type: Boolean,
				default: false,
			},
			resource: {
				type: Boolean,
				default: false,
			},
			invokable: {
				type: Boolean,
				default: false,
			},
		};
	}

	/**
	 * @inheritdoc
	 */
	 get stub() {
		const ext = this.language == 'imba'
			? '' : (
				this.language == 'typescript' ? '.ts' : ''
			);

		let stub = 'stub';

		if (this.options.api) {
			stub = 'api-stub';
		} else if (this.options.resource) {
			stub = 'resource-stub';
		} else if (this.options.invokable) {
			stub = 'invokable-stub';
		}

		return path.join(__dirname, (stub + ext));
	}

	/**
	 * @inheritdoc
	 */
	get destination() {
		return 'app/Http/Controllers';
	}
}
