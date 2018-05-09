const Anagrarns=require('../lib/Anagrarns')
describe("Anagrarns", ()=> {

    it("should return [] when input empty string", ()=> {
        expect(Anagrarns()).toEqual([])
    })
    it("should return [abc] when input abc", ()=> {
        expect(Anagrarns('abc')).toEqual(['abc'])
    })
    
})