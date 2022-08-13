import { Request } from '@formidablejs/framework';
import { Controller } from '{{namespace}}Controller';
import { use } from '@formidablejs/ts-ports'
import type { Response } from '@formidablejs/framework';

export class {{class}} extends Controller {
    /**
     * Display a listing of the resource.
     */
    index(): Response {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    store(request: Request): Response {
        //
    }

    /**
     * Display the specified resource.
     */
    @use('param') show(id: number): Response {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    @use('param') update(id: number, request: Request): Response {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    @use('param') destroy(id: number): Response {
        //
    }
}
