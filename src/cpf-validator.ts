export class CpfValidator {
    /**
     * Validates a cpf.
     * @param {string} cpf
     * @returns {boolean}
    */
    static validate(cpf: string): boolean {
        const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/
        return cpfRegex.test(cpf)
    }
}
