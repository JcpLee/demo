const anagram = require("../lib/anagram")

describe("anagram", ()=> {

    // it("should return 1 when input 1", ()=> {
    //     expect(anagram('')).toBe([])
    // })

    it("should return 1 when input 1", ()=> {
        expect(anagram("ab")).toBe(['ab','ba'])
    })
})

