const Fbnq=require('../lib/Fbnq')
describe("Fbnq", ()=> {

    it("should return 2 when input 3", ()=> {
        expect(Fbnq(3)).toBe(2)
    })
    it("should return 3 when input 4", ()=> {
        expect(Fbnq(4)).toBe(3)
    })

    
})