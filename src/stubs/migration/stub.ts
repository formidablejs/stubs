import type { Database } from '@formidablejs/framework';

export async function up(DB: Database): Promise<void> {
	return DB.schema.createTable('{{table}}', (table) => {
{{schema}}
	});
};

export async function down(DB: Database): Promise<void> {
	return DB.schema.dropTable('{{table}}');
}
