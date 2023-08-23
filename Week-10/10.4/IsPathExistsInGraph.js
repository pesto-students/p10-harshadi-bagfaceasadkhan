function validPath(n, edges, source, destination) {
  // Build an adjacency list representation of the graph
  const adjList = Array.from({ length: n }, () => []);
  for (const [u, v] of edges) {
    adjList[u].push(v);
    adjList[v].push(u);
  }

  // Create a helper function to perform DFS
  function dfs(node, visited) {
    if (node === destination) {
      return true; // Found a path to the destination
    }

    visited.add(node);

    for (const neighbor of adjList[node]) {
      if (!visited.has(neighbor)) {
        if (dfs(neighbor, visited)) {
          return true; // Found a valid path through the neighbor
        }
      }
    }

    return false; // No valid path from this node
  }

  // Start DFS from the source vertex
  return dfs(source, new Set());
}

// Example usage:
const n = 3;
const edges = [
  [0, 1],
  [1, 2],
  [2, 0],
];
const source = 0;
const destination = 2;

console.log(validPath(n, edges, source, destination)); // Output: true
