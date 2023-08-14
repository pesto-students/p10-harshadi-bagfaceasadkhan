function allPathsSourceTarget(graph) {
  const n = graph.length;
  const result = [];

  // Helper function to perform DFS and find paths
  function dfs(node, path) {
    path.push(node);

    if (node === n - 1) {
      result.push([...path]); // Found a path from 0 to n-1
    } else {
      for (const neighbor of graph[node]) {
        dfs(neighbor, path);
      }
    }

    path.pop(); // Backtrack
  }

  dfs(0, []);
  return result;
}

// Example 1:
const graph1 = [[1, 2], [3], [3], []];
console.log(allPathsSourceTarget(graph1));
// Output: [[0, 1, 3], [0, 2, 3]]

// Example 2:
const graph2 = [[4, 3, 1], [3, 2, 4], [3], [4], []];
console.log(allPathsSourceTarget(graph2));
// Output: [[0, 4], [0, 3, 4], [0, 1, 3, 4], [0, 1, 2, 3, 4], [0, 1, 4]]
