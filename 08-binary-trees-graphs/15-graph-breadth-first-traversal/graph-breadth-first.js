const Queue = require("./queue");

function breadthFirstTraversal(graph, startingVertex) {
  const visited = new Set();
  const result = [];

  const queue = new Queue();

  queue.enqueue(startingVertex);

  visited.add(startingVertex);

  while (!queue.isEmpty()) {
    const currentVertex = queue.dequeue();
    result.push(currentVertex);

    for (const neighbour of graph.adjacencyList[currentVertex]) {
      if (!visited.has(neighbour)) {
        queue.enqueue(neighbour);

        visited.add(neighbour);
      }
    }
  }
  return result;
}

module.exports = breadthFirstTraversal;
