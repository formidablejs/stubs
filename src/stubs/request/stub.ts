import { Request } from '@formidablejs/framework';

export class {{class}} extends Request
{
	authorize(): Boolean
	{
		return false;
	}

	rules(): Object
	{
		return {

		};
	}
}
