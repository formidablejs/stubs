import type { Request } from '@formidablejs/framework';
import type { FastifyReply } from '@formidablejs/framework';

export class {{class}} {
	handle(request: Request, reply: FastifyReply, params: any[]): any {
		return request;
	}
}
