import { ServiceResolver } from '@formidablejs/framework'

export class {{class}} extends ServiceResolver {
	/**
	 * Context classes.
	 */
	get context(): Array<any> {
		return [
			//
		]
	}

	/**
	 * Boot service resolver.
	 */
	boot(): {{class}} {
		return this
	}
}
