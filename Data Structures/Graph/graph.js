const LinkedList = require("../Linked Lists/index");

class Graph {
  constructor(vertices) {
    this.vertices = vertices;
    this.edges = [];
    for (let i = 0; i < vertices; i++) {
      let temp = new LinkedList();
      this.edges.push(temp);
    }
  }

  addEdge(source, destination) {
    this.edges[source].insertLast(destination);
    this.edges[destination].insertLast(source);
  }
}

const graph = new Graph(5);
// console.log(graph);
graph.addEdge(0, 1);
graph.addEdge(0, 4);
graph.addEdge(1, 4);
graph.addEdge(1, 3);
graph.addEdge(1, 2);
graph.addEdge(2, 3);
graph.addEdge(3, 4);
console.log(JSON.stringify(graph, 0, 2));
// console.log(JSON.stringify(graph, 0, 2));
// console.log("vertices: ", graph.vertices);
// console.log("1 edges: ", graph.edges[1]);

function bfs(s, e) {
  // Do a BFS starting at node s
  let prev = solve(s);
  console.log("prev: ", prev);
  // Return reconstructed path from s to e
  return reconstructPath(s, e, prev);
}

function solve(s) {
  let q = [];
  q.push(s); // enqueue method: push node into the array

  let visited = new Array(graph.vertices).fill(false);
  visited[s] = true;

  let prev = new Array(graph.vertices).fill(null);

  while (q.length) {
    let node = q.shift(); // dequeue method: shift first node (s) from the array
    let neighbors = graph.edges[node]; // get all neighbors (nodes) in adjacency list of s

    let curr = neighbors.head;
    while (curr) {
      if (!visited[curr.data]) {
        if (!q.includes(curr.data)) {
          q.push(curr.data);
        }
        visited[curr.data] = true;
        prev[curr.data] = node;
      }
      curr = curr.next;
    }
  }
  return prev;
}

function reconstructPath(s, e, prev) {
  let path = [];

  for (let i = e; i !== null; i = prev[i]) {
    path.push(i);
  }

  path.reverse();

  if (path[0] === s) {
    return path;
  }
  return [];
}

console.log(bfs(0, 3));
