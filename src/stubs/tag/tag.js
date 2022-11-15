const Stub = require('../../Stub');

module.exports = class Tag extends Stub {
	/**
	 * @inheritdoc
	 */
	get data() {
		return {
			'class': this.customClassName,
		};
	}

	/**
	 * Get custom class name.
	 *
	 * @returns {string}
	 */
	get customClassName() {
		if (this.realClassName.toLowerCase() === 'index' && this.className.split('/').length > 1) {
			const paths = this.className.split('/');

			return paths[paths.length - 2];
		}

		return this.realClassName;
	}

	/**
	 * @inheritdoc
	 */
	get destination() {
		return 'resources/imba';
	}
}
