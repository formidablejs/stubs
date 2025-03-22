import { type Database } from '@formidablejs/framework';

export const seed = async (DB: Database): Promise<void> => {
	/** Deletes ALL existing entries */
	await DB.table('{{table}}').delete();

	/** Inserts seed entries */
	await DB.table('{{table}}').insert([
		{ colName: 'rowValue1' },
		{ colName: 'rowValue2' },
		{ colName: 'rowValue3' }
	]);
}
