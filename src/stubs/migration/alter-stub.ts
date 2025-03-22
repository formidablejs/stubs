import type { Database } from '@formidablejs/framework';

export async function up(DB: Database): Promise<void> {
	return DB.schema.table('{{table}}', (table) => {

	});
}

export async function down(DB: Database): Promise<void> {
	return DB.schema.table('{{table}}', (table) => {

	});
}
