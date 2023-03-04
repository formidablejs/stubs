import { Command } from '@formidablejs/framework'
import { Prop } from '@formidablejs/framework'
import type { PropList } from '@formidablejs/framework'

export class {{class}} extends Command {
	get signature(): string {
		return '{{signature}}'
	}

	get description(): string {
		return 'My command description'
	}

	get props(): PropList {
		return {

		}
	}

	handle(): never {
		this.write("<fg:green>Hello World</fg:green>")

		this.exit()
	}
}
