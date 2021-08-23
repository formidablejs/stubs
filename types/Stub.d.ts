export = Stub;
declare class Stub {
    /**
     * @param {string} name
     * @param {object} options
     * @param {string} stubName
     */
    constructor(name: string, options: object, stubName: string);
    /**
     * Stub properties.
     *
     * @return {object}
     */
    get props(): any;
    className: string;
    options: any;
    stubName: string;
    stubPath: any;
    stubContents: any;
    /**
     * Stub data.
     *
     * @return {object}
     */
    get data(): any;
    /**
     * Stub contents.
     *
     * @return {string}
     */
    get contents(): string;
    /**
     * File destination.
     *
     * @return {string}
     */
    get destination(): string;
    /**
     * File name from class name.
     *
     * @return {string}
     */
    get fileName(): string;
    /**
     * Real path.
     *
     * @return {string}
     */
    get realPath(): string;
    /**
     * Class/file namespace.
     *
     * @return {string}
     */
    get namespace(): string;
    /**
     * Class name without the namespace.
     *
     * @return {string}
     */
    get realClassName(): string;
    /**
     * Get make information.
     *
     * @return {object}
     */
    make(): object;
}
