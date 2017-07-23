
/**
 * A seeded pseudorandom number generator implementation for
 * generating consistent numeric sequences.
 */
export class Random {

    private unique: number;
    private _seed: number;

    public get seed(): number { return this._seed; }
    public set seed(value: number) {
        this._seed = value;
        this.unique = 0;
    }

    /**
     * Constructs a new `Random` instance using the specified seed.
     * If no seed is specified, the current time (in milliseconds
     * since the epoch) is used.
     *
     * @param   seed
     *          The seed value to apply to this `Random`.
     */
    public constructor(seed?: number) {
        this.seed = seed || Date.now();
    }

    /**
     * Returns the next pseudorandom number in this `SeededRandom`'s
     * number sequence, which is a value between 0 (inclusive) and 1
     * (inclusive).
     *
     * @param   bound?
     *          The upper bound of the random number. If specified,
     *          the random number will be a pseudorandom number
     *          between 0 (inclusive) and `bound` (inclusive).
     * @return  This `Random`'s next value.
     */
    public next(bound?: number): number {
        bound = bound || 1;

        const prn = Math.abs(Math.sin(this.seed + this.unique++));
        return prn * bound;
    }

}
