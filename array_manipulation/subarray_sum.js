
function checkSubarraySum(arr, target) {
    let currentSum = arr[0];
    let start = 0;

    for (let i = 1; i <= arr.length; i++) {
        while (currentSum > target && start < i - 1) {
            currentSum -= arr[start];
            start++;
        }

        if (currentSum === target) {
            return true;
        }

        if (i < arr.length) {
            currentSum += arr[i];
        }
    }

    return false;
}

function testCheckSubarraySum() {
    const testCases = [
        { arr: [4, 2, 7, 1, 9, 5], target: 17, expected: true },
        { arr: [1, 2, 3, 4, 5], target: 20, expected: false }
    ];

    testCases.forEach((testCase, index) => {
        const result = hasSubarrayWithSum(testCase.arr, testCase.target);
        if (result === testCase.expected) {
            console.log(`Test case ${index + 1}: Passed`);
        } else {
            console.log(`Test case ${index + 1}: Failed`);
            console.log(`  Array: ${testCase.arr}`);
            console.log(`  Target: ${testCase.target}`);
            console.log(`  Expected: ${testCase.expected}`);
            console.log(`  Actual: ${result}`);
        }
    });
}

testCheckSubarraySum();
