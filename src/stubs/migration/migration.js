const Stub = require('../../Stub');
const path = require('path');

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
			},
			alter: {
				type: Boolean,
				default: false,
			},
			schema: {
				type: String,
				required: false
			}
		};
	}

	/**
	 * @inheritdoc
	 */
	get stub() {
		return path.join(__dirname, (this.options.alter ? 'alter-stub' : 'stub'));
	}

	/**
	 * @inheritdoc
	 */
	get data() {
		return {
			'table': this.options.table,
			'schema': this.getSchema
		};
	}

	/**
	 * Create new schema.
	 *
	 * @returns {string}
	 */
	get getSchema() {
		if (!this.options.schema) return '';

		const definitions = this.options.schema.split(',');

		const lines = [
			"\t\ttable.bigIncrements().primary()",
		];

		for (const key in definitions) {
			if (Object.hasOwnProperty.call(definitions, key)) {
				const element = definitions[key];
				let [ name, type ] = element.split(':')

				type = type.split('.')[0]

				let line = `table.${type}("` + name.trim() + '")'

				let chain = element.split(':')[1].split('.')

				chain = chain.slice(1)

				for (const key in chain) {
					if (Object.hasOwnProperty.call(chain, key)) {
						const method = chain[key];
						line += `.${method}()`
					}
				}

				if (!lines.includes(`\t\t${line}`)) {
					lines.push(`\t\t${line}`)
				}
			}
		}

		const timestamps = "\t\ttable.timestamps(true, true)"

		if (!lines.includes(timestamps)) {
			lines.push(timestamps);
		}

		return lines.join(';\n') + ';'
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
		const name = (this.realClassName.replace(/([A-Z])/g, '_$1').trim().toLowerCase())
			.replace('-_', '-')
			.replace(/^\_+/, '') + '.js';

		return (parseDate(new Date) + '_') + (name.startsWith('_') ? name.substr(1) : name);
	}
}
