const chai = require("chai");

const nextrandom = require("./../dist/index");

describe("Random", function () {
    it("Should produce a pseudorandom number within the range [0,1)",
    function () {
        const rand = new nextrandom.Random();
        const num = rand.next();

        expect(num).to.be.gte(0);
        expect(num).to.be.lt(1);
    });

    it("Should produce a pseudorandom number within the specified inclusive bounds",
    function () {
        const rand = new nextrandom.Random();
        const bound = Math.random() * 100;
        const num = rand.next(bound);

        expect(num).to.be.gte(0);
        expect(num).to.be.lt(bound);
    });

    it("Should produce the same sequence of numbers as a `Random` with the same seed",
    function () {
        const rand1 = new nextrandom.Random(42);
        const rand2 = new nextrandom.Random(42);

        for (let i = 0; i < 100; i++) {
            expect(rand1.next()).to.equal(rand2.next());
            expect(rand1.next(10)).to.equal(rand2.next(10));
        }
    })
});
