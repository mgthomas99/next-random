import { assert, expect } from "chai";

import { Random } from "./../src/random"

describe("Random", () => {
    it(
        "Should produce a pseudorandom number within the range 0 (inclusive) to 1 (inclusive)",
        () => {
            const rand = new Random();
            const num = rand.next();

            expect(num).to.be.gte(0);
            expect(num).to.be.lte(1);
        });

    it(
        "Should produce a pseudorandom number within the specified inclusive range",
        () => {
            const rand = new Random();

            for (let i = 0; i < 10; i++) {
                const bound = Math.abs(Math.sin(Date.now()));
                const num = rand.next(bound);

                expect(num).to.be.gte(0);
                expect(num).to.be.lte(bound);
            }
        });

    it(
        "Two instances of `Random` should produce the same sequence of numbers if they share " +
        "the same seed value.",
        () => {
            const rand1 = new Random(42);
            const rand2 = new Random(42);

            for (let i = 0; i < 10; i++) {
                expect(rand1.next()).to.equal(rand2.next());
                expect(rand1.next(100)).to.equal(rand2.next(100));
            }
        });
});
