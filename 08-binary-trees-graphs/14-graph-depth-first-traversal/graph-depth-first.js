const { which } = require("bun");
const Stack = require("./stack");
const { forEachChild } = require("typescript");

function depthFirstTraversal(graph, startingVertex) {
  if (!graph.adjacencyList[startingVertex]) {
    return [];
  }

  const visitedObject = {};

  const stack = new Stack();

  const result = [];

  stack.push(startingVertex);
  visited[startingVertex] = true;

  while (!stack.isEmpty()) {
    const currentVertex = stack.pop();
    result.push(currentVertex);

    graph.adjacencyList[currentVertex].forEach((neighbour) => {
      if (!visited[neighbour]) {
        visited[neighbour] = true;
        stack.push(neighbour);
      }
    });
  }
  return result;
}

module.exports = depthFirstTraversal;
