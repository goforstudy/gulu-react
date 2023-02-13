function add(a: number, b: number) {
    return a + b
}

describe("add function test", () => {
    it('1 add 2 equal 3', () => {
        expect(add(1,2)).toEqual(3)
    })
})