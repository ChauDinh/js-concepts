class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdges(source, destination) {
    if (!this.adjacencyList[source]) {
      this.addVertex(source);
    }

    if (!this.adjacencyList[destination]) {
      this.addVertex(destination);
    }

    this.adjacencyList[source].push(destination);
    this.adjacencyList[destination].push(source);
  }

  removeEdge(source, destination) {
    this.adjacencyList[source] = this.adjacencyList[source].filter(
      (vertex) => vertex !== destination
    );
    this.adjacencyList[destination] = this.adjacencyList[destination].filter(
      (vertex) => vertex !== source
    );
  }

  print() {
    return this.adjacencyList;
  }
}

const graph = new Graph();
graph.addVertex(0);
graph.addVertex(1);
graph.addVertex(2);
graph.addVertex(3);
graph.addVertex(4);
graph.addEdges(0, 1);
graph.addEdges(0, 4);
graph.addEdges(1, 4);
graph.addEdges(1, 3);
graph.addEdges(1, 2);
graph.addEdges(2, 3);
graph.addEdges(3, 4);

console.log(graph.print());
