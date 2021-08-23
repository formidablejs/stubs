const Stub = require('../../Stub');

/**
 * @param {String} str
 * @param {String} padChar
 * @param {Number} totalLength
 * @returns {String} str
 */
const lpad = (str, padChar, totalLength) => {
	str = str.toString();
	let neededPadding = totalLength - str.length;

	for (let i = 0; i < neededPadding; i++) {
		str = padChar + str;
	}

	return str;
}

/**
 * Create date stamp.
 *
 * @param {Date} date
 * @returns {String}
 */
const parseDate = (date) => {
	return [
		date.getUTCFullYear(),
		lpad(date.getUTCMonth() + 1, '0', 2),
		lpad(date.getUTCDate(), '0', 2),
		lpad(date.getUTCHours(), '0', 2),
		lpad(date.getUTCMinutes(), '0', 2),
		lpad(date.getUTCSeconds(), '0', 2)
	].join('');
}

module.exports = class Migration extends Stub {
	/**
	 * @inheritdoc
	 */
	get props() {
		return {
			table: {
				type: String,
				required: true,
			}
		};
	}

	/**
	 * @inheritdoc
	 */
	get data() {
		return {
			'table': this.options.table,
		};
	}

	/**
	 * @inheritdoc
	 */
	get destination() {
		return 'database/migrations';
	}

	/**
	 * @inheritdoc
	 */
	get fileName() {
		return ((parseDate(new Date) + '-') + this.realClassName.replace(/([A-Z])/g, '_$1').trim().toLowerCase())
			.replace('-_', '-')
			.replace(/^\_+/, '') + '.js';
	}
}
