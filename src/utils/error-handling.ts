/**
 * Represents an error that occurs when the API encounters an issue.
 *
 * This class extends the built-in Error class to include an HTTP status code,
 * which indicates the specific type of error encountered.
 *
 * @class ApiError
 * @extends Error
 *
 * @constructor
 * @param {number} status - The HTTP status code associated with the error.
 * @param {string} message - A description of the error.
 *
 * @property {number} status - The HTTP status code representing the error type.
 */
export class ApiError extends Error {
    public status: number;

    constructor(status: number, message: string) {
        super(message);
        this.status = status;
        Object.setPrototypeOf(this, ApiError.prototype);
    }
}
