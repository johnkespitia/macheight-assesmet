import { findPairs } from '../findPairs';

describe('findPairs', () => {
    it('should return an empty array if no pairs are found', () => {
        expect(findPairs([1, 2, 3, 4, 5], 10)).toEqual([]);
    });

    it('should return an array of pairs that sum up to the target sum', () => {
        expect(findPairs([1, 2, 3, 4, 5], 5)).toEqual([[3, 2], [4, 1]]);
        expect(findPairs([1, 2, 3, 4, 5], 7)).toEqual([[4, 3], [5, 2]]);
        expect(findPairs([1, 1, 2, 2, 3, 3], 4)).toEqual([[2, 2], [3, 1], [3, 1]]);
    });

    it('should handle negative numbers and zero', () => {
        expect(findPairs([-1, 2, -3, 4, 0], -1)).toEqual([ [ -3, 2 ], [ 0, -1 ] ]);
        expect(findPairs([-1, 2, -3, 4, 0], 3)).toEqual([[4, -1]]);
        expect(findPairs([-1, -1, 0, 0, 1, 1], 0)).toEqual([ [ 0, 0 ], [ 1, -1 ], [ 1, -1 ] ]);
    });
});
