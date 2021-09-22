const path = require('path');
const fs = require('fs');

module.exports = class Stub {
	/**
	 * Stub properties.
	 *
	 * @returns {object}
	 */
	get props() {
		return { };
	}

	/**
	 * @param {string} name
	 * @param {object} options
	 * @param {string} stubName
	 */
	constructor(name, options, stubName) {
		this.className    = name;
		this.options      = options;
		this.stubName     = stubName;
		this.stubPath     = null;
		this.stubContents = null;

		Object.keys(options).forEach((option) => {
			if (this.props[option] === undefined) {
				throw new Error(`Unknown prop: ${option}`);
			}
		});

		Object.keys(this.props).forEach((option) => {
			if (this.props[option].required) {
				if (options[option] === undefined) {
					throw new Error(`Missing prop: ${option}`);
				}
			}

			if (this.props[option].type && options[option]) {
				if (options[option].constructor !== this.props[option].type) {
					throw new Error(`Invalid prop type: ${option}`);
				}
			}
		});
	}

	/**
	 * Get stub location.
	 *
	 * @returns {String}
	 */
	get stub() {
		return path.join(__dirname, 'stubs', this.stubName, 'stub');
	}

	/**
	 * Stub data.
	 *
	 * @returns {object}
	 */
	get data() {
		return {
			'class': this.realClassName,
			'namespace': this.realPath,
		};
	}

	/**
	 * Stub contents.
	 *
	 * @returns {string}
	 */
	get contents() {
		this.stubPath     = this.stub;
		this.stubContents = fs.readFileSync(this.stubPath).toString();

		Object.keys(this.data).forEach((key) => {
			this.stubContents = this.stubContents.replaceAll(`{{${key}}}`, this.data[key]);
		});

		return this.stubContents;
	}

	/**
	 * File destination.
	 *
	 * @returns {string}
	 */
	get destination() {
		return this.stubName;
	}

	/**
	 * File name from class name.
	 *
	 * @returns {string}
	 */
	get fileName() {
		return this.realClassName + '.imba';
	}

	/**
	 * Real path.
	 *
	 * @returns {string}
	 */
	get realPath() {
		const paths = this.className.split('/');

		if (paths.length === 1) return './';

		paths.pop();

		let realPath = '';

		paths.forEach((path) => {
			realPath = realPath + '../'
		});

		return realPath;
	}

	/**
	 * Class/file namespace.
	 *
	 * @returns {string}
	 */
	get namespace() {
		let namespace = '';

		const paths = this.className.split('/');

		if (paths.length > 1) {
			paths.pop();

			namespace = paths.join('/');
		}

		return namespace;
	}

	/**
	 * Class name without the namespace.
	 *
	 * @returns {string}
	 */
	get realClassName() {
		return this.className.split('/').slice(-1).pop();
	}

	/**
	 * Get make information.
	 *
	 * @return {object}
	 */
	make() {
		return {
			destination: this.destination,
			output: this.contents,
			name: this.realClassName,
			fileName: this.fileName,
		};
	}
}
