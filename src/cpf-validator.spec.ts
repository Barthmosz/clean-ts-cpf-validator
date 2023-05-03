import { CpfValidator } from './cpf-validator'
import { type Validator } from './cpf-protocol'

const makeSut = (): Validator => {
    const sut = CpfValidator
    return sut
}

describe('Cpf Validator', () => {
    test('should return false if an invalid cpf is provided', () => {
        const sut = makeSut()
        expect(sut.validate('123.456.789')).toBe(false)
    })

    test('should return false if an empty cpf is provided', () => {
        const sut = makeSut()
        expect(sut.validate('')).toBe(false)
    })

    test('should return true if a valid cpf is provided', () => {
        const sut = makeSut()
        expect(sut.validate('123.456.789-12')).toBe(true)
    })
})
