import { Command } from '@formidablejs/framework';
import { Prop } from '@formidablejs/framework';

export class {{class}} extends Command
{
	get signature(): String
	{
		return '{{signature}}';
	}

	get description(): String
	{
		return 'My command description';
	}

	get props(): Object
	{
		return {

		};
	}

	handle(): any
	{
		return this.write("<fg:green>Hello World</fg:green>");
	}
}
