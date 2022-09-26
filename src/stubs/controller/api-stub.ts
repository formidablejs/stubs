import { Controller } from '{{namespace}}Controller';
import { {{storeRequestClass}} } from '{{requestNamespace}}{{storeRequest}}';
import { {{updateRequestClass}} } from '{{requestNamespace}}{{updateRequest}}';
import { use } from '@formidablejs/ts-ports';
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
    @use({{storeRequestClass}})
    store(request: {{storeRequestClass}}): Response {
        //
    }

    /**
     * Display the specified resource.
     */
    @use('param')
    show(id: number): Response {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    @use('param', {{updateRequestClass}})
    update(id: number, request: {{updateRequestClass}}): Response {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    @use('param')
    destroy(id: number): Response {
        //
    }
}
