import { Repository } from '@formidablejs/framework'

export class {{class}} extends Repository {
    /**
     * Context reference.
     */
    static get context(): string {
        return '{{class}}'
    }
}