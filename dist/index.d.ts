/**
 * processString uglifies a CSS string
 *
 * @param {string} content - CSS string
 * @param {options} options - UglifyCSS options
 *
 * @return {string} Uglified result
 */
export function processString(content?: string, options?: options): string;
/**
 * @typedef {object} options - UglifyCSS options
 * @property {number} [maxLineLen=0] - Maximum line length of uglified CSS
 * @property {boolean} [expandVars=false] - Expand variables
 * @property {boolean} [uglyComments=false] - Removes newlines within preserved comments
 * @property {boolean} [cuteComments=false] - Preserves newlines within and around preserved comments
 * @property {string} [convertUrls=''] - Converts relative urls using the given directory as location target
 * @property {boolean} [debug=false] - Prints full error stack on error
 * @property {string} [output=''] - Output file name
 */
/**
 * @type {options} - UglifyCSS options
 */
export const defaultOptions: options;
/**
 * - UglifyCSS options
 */
export type options = {
    /**
     * - Maximum line length of uglified CSS
     */
    maxLineLen?: number;
    /**
     * - Expand variables
     */
    expandVars?: boolean;
    /**
     * - Removes newlines within preserved comments
     */
    uglyComments?: boolean;
    /**
     * - Preserves newlines within and around preserved comments
     */
    cuteComments?: boolean;
    /**
     * - Converts relative urls using the given directory as location target
     */
    convertUrls?: string;
    /**
     * - Prints full error stack on error
     */
    debug?: boolean;
    /**
     * - Output file name
     */
    output?: string;
};
