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
			"store-request": {
				type: String,
			},
			"update-request": {
				type: String,
			}
		};
	}

	/**
	 * @inheritdoc
	 */
	 get data() {
		return {
			'class': this.realClassName,
			'namespace': this.realPath,
			'requestNamespace': this.requestNamespace,
			'storeRequest': this.options["store-request"],
			'storeRequestClass': this.storeRequestClass,
			'updateRequest': this.options["update-request"],
			'updateRequestClass': this.updateRequestClass,
		};
	}

	/**
	 * Store Request class.
	 *
	 * @returns {string}
	 */
	get storeRequestClass() {
		return this.options["store-request"].split('/').pop();
	}

	/**
	 * Store Request class.
	 *
	 * @returns {string}
	 */
	 get updateRequestClass() {
		return this.options["update-request"].split('/').pop();
	}

	/**
	 * Real path.
	 *
	 * @returns {string}
	 */
	 get requestNamespace() {
		const paths = this.className.split('/');

		paths.pop();

		let realPath = '../';

		paths.forEach((path) => {
			realPath = realPath + '../';
		});

		realPath = realPath + 'Requests/'

		return realPath;
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
