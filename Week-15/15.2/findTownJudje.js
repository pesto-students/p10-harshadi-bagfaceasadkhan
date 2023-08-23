function findTownJudge(n, trust) {
  // Initialize arrays to keep track of the in-degree and out-degree of each person
  const inDegree = Array(n + 1).fill(0);
  const outDegree = Array(n + 1).fill(0);

  // Update the in-degree and out-degree based on the trust relationships
  for (const [a, b] of trust) {
    inDegree[b]++;
    outDegree[a]++;
  }

  // Find the person who has in-degree 0 and out-degree n - 1
  for (let i = 1; i <= n; i++) {
    if (inDegree[i] === n - 1 && outDegree[i] === 0) {
      return i; // Found the town judge
    }
  }

  return -1; // No town judge found
}

// Example 1:
const n1 = 2;
const trust1 = [[1, 2]];
console.log(findTownJudge(n1, trust1)); // Output: 2

// Example 2:
const n2 = 3;
const trust2 = [
  [1, 3],
  [2, 3],
];
console.log(findTownJudge(n2, trust2)); // Output: 3

// Example 3:
const n3 = 3;
const trust3 = [
  [1, 3],
  [2, 3],
  [3, 1],
];
console.log(findTownJudge(n3, trust3)); // Output: -1
