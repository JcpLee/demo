const fibonacci = require("../lib/fibonacci")

describe("fibonacci", ()=> {

    it("should return 1 when input 1", ()=> {
        expect(fibonacci(5)).toBe(5)
    })

    it("should return 1 when input 1", ()=> {
        expect(fibonacci(5)).toBe(7)
    })
})

