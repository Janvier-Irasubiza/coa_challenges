function transformString(str) {
    let result = '';
    
    if (str.length % 15 === 0) {
        result = str.split('').reverse().join('');
        result = result.split('').map(char => char.charCodeAt(0)).join(' ');
    } else if (str.length % 3 === 0) {
        result = str.split('').reverse().join('');
    } else if (str.length % 5 === 0) {
        result = str.split('').map(char => char.charCodeAt(0)).join(' ');
    } else {
        result = str;
    }
    
    return result;
}

function testTransformString() {
    const testCases = [
        { input: "Hamburger", expected: "regrubmaH" },
        { input: "Pizza", expected: "80 105 122 122 97" },
        { input: "Chocolate Chip Cookie", expected: "eikooC pihC etalocohC" },
        { input: "Banana", expected: "ananaB" }
    ];

    testCases.forEach((testCase, index) => {
        const result = transformString(testCase.input);
        if (result === testCase.expected) {
            console.log(`Test case ${index + 1}: Passed`);
        } else {
            console.log(`Test case ${index + 1}: Failed`);
            console.log(`  Input: ${testCase.input}`);
            console.log(`  Expected: ${testCase.expected}`);
            console.log(`  Got: ${result}`);
        }
    });
}

testTransformString();
