
// Returns all consecutive substrings from the input string.
// Time: O(n^2), Space: O(n^2)

function consecutiveSubstrings(string) {
  const result = [];

  for (let start = 0; start < string.length; start++) {
    let substring = '';
    for (let end = start; end < string.length; end++) {
      substring += string[end];
      result.push(substring);
    }
  }

  return result;
}

if (require.main === module) {
  console.log("Expecting: ['a', 'ab', 'abc', 'b', 'bc', 'c']");
  console.log("=>", consecutiveSubstrings('abc'));

  console.log("");

  console.log("Expecting: ['a']");
  console.log("=>", consecutiveSubstrings('a'));
}

module.exports = consecutiveSubstrings;
