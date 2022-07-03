new Set([1,1,2,2,3,4]) // {1,2,3,4}

[...new Set("referee")].join("")// 'ref'

let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);
// 0: {Array(3) => true}
// key: (3) [1, 2, 3]
// value: true
// 1: {Array(3) => false}
// key: (3) [1, 2, 3]
// value: false

const hasDuplicate = arr => {
    if(new Set(arr).size !== arr.length) {
        return true;
    } return false;
}

function vowelCount(str) {
    let vowels = 'aieou';
    const vowelMap = new Map();
    for (let letter of str) {
        let lowerLetter = letter.toLowerCase();
        if (vowels.indexOf(lowerLetter) !== -1) {
            if (vowelMap.has(lowerLetter)) {
                vowelMap.set(lowerLetter, vowelMap.get(lowerLetter) + 1);
            } else {
                vowelMap.set(lowerLetter, 1);
            }
        }
    }
    return vowelMap;
}