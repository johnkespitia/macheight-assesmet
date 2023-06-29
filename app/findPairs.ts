export function findPairs(nums:number[], targetSum: number):[number,number][]{
    const result: [number,number][] = []
    const numFreqMap: Record<number, number> = {};
    for (const num of nums) {
        const complement = targetSum - num;
        if (numFreqMap[complement] && numFreqMap[complement] > 0) {
            result.push([num, complement]);
            numFreqMap[complement]--;
        }
        if (numFreqMap[num]) {
            numFreqMap[num]++;
        } else {
            numFreqMap[num] = 1;
        }
    }

    return result
}