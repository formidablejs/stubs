const path = require('path');
const Stub = require('../../Stub');

module.exports = class Seeder extends Stub {
	/**
	 * @inheritdoc
	 */
	get props() {
		return {
			table: {
				type: String,
				required: false,
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
		return 'database/seeders';
	}

	/**
	 * @inheritdoc
	 */
	get stub() {
		const ext = this.language == 'imba'
			? '' : (
				this.language == 'typescript' ? '.ts' : ''
			);

		let stub = 'stub-no-table';

		if (this.options.table) {
			stub = 'stub';
		}

		return path.join(__dirname, (stub + ext));
	}

	/**
	 * @inheritdoc
	 */
	get fileName() {
		const ext = this.stub.slice(-3) === '.ts' ? '.ts' : '.js';

		return this.realClassName + (ext);
	}
}
