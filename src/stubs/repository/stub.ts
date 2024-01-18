import { Repository } from '@formidablejs/framework'

export class {{class}} extends Repository {
	/**
	 * The table associated with the repsitory.
	 */
	get tableName(): string {
		return '{{table}}'
	}

    /**
     * Context reference.
     */
    static get context(): string {
        return '{{class}}'
    }
}
