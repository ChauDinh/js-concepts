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

const graph = new Graph(13);
graph.addEdge(1, 10);
graph.addEdge(1, 8);
graph.addEdge(0, 9);
graph.addEdge(0, 7);
graph.addEdge(0, 11);
graph.addEdge(9, 8);
graph.addEdge(8, 12);
graph.addEdge(2, 12);
graph.addEdge(3, 4);
graph.addEdge(3, 2);
graph.addEdge(3, 7);
graph.addEdge(7, 11);
graph.addEdge(6, 7);
graph.addEdge(5, 6);
graph.addEdge(10, 9);

// console.log(JSON.stringify(graph, 0, 2));
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

console.log("BFS shortest path: ", bfs(0, 12));

function dfs(s) {
  let visited = new Array(graph.vertices).fill(false);
  let prev = new Array(graph.vertices).fill(null);

  let visit = (at) => {
    // if (visited[at]) return;
    console.log("visit node: ", at);
    visited[at] = true;

    let neighbors = graph.edges[at];
    let curr = neighbors.head;
    while (curr) {
      prev[curr.data] = at;
      if (!visited[curr.data]) {
        visit(curr.data);
      }
      curr = curr.next;
    }
  };

  visit(s);

  // let path = [];
  // for (let i = 0; i !== null; i = prev[i]) {
  //   path.push(i);
  // }

  // console.log("path: ", path.reverse());

  return prev;
}

console.log("DFS from 0: ", dfs(0));

let newGraph = new Graph(18);

newGraph.addEdge(0, 4);
newGraph.addEdge(0, 8);
newGraph.addEdge(0, 13);
newGraph.addEdge(0, 14);
newGraph.addEdge(14, 8);
newGraph.addEdge(13, 14);
newGraph.addEdge(4, 8);
newGraph.addEdge(1, 5);
newGraph.addEdge(17, 5);
newGraph.addEdge(5, 16);
newGraph.addEdge(6, 11);
newGraph.addEdge(11, 7);
newGraph.addEdge(7, 6);
newGraph.addEdge(3, 9);
newGraph.addEdge(9, 2);
newGraph.addEdge(2, 15);
newGraph.addEdge(9, 15);
newGraph.addEdge(10, 15);

function findComponents() {
  let count = 0;
  let components = [];
  let visited = new Array(newGraph.vertices).fill(false);

  for (let i = 0; i < newGraph.vertices; i++) {
    if (!visited[i]) {
      count++;
      visit(i);
    }
  }

  function visit(at) {
    visited[at] = true;
    components[at] = count;

    let neighbors = newGraph.edges[at];
    let curr = neighbors.head;
    while (curr) {
      if (!visited[curr.data]) {
        visit(curr.data);
      }
      curr = curr.next;
    }
  }

  let map = new Map();
  for (let i = 0; i < components.length; i++) {
    if (map.has(`Connected component ${components[i]}`)) {
      map.get(`Connected component ${components[i]}`).push(i);
    } else {
      map.set(`Connected component ${components[i]}`, [i]);
    }
  }

  console.log("Connected Components: ", map);

  return {
    count: count,
    components: components,
  };
}

console.log("Find components: ", findComponents());

// function solvePractice(s) {
//   let queue = []; // Initialize the queue
//   queue.push(s); // enqueue node S for first visiting

//   // Initialize visited array determine node ith is visited or not
//   let visited = new Array(graph.vertices).fill(false);
//   visited[s] = true;

//   // Initialize prev array tracking visited nodes during BFS process
//   let prev = new Array(graph.vertices).fill(null);

//   // looping until the queue is empty
//   while (queue.length) {
//     let node = queue.shift(); // dequeue
//     let neighbors = graph.edges[node]; // get all neighbors of nodes

//     // looping throw the adjacency list of node
//     let curr = neighbors.head;
//     while (curr) {
//       // checking if the current node is not visited yet
//       if (!visited[curr.data]) {
//         // checking if the current node is not included in queue
//         if (!queue.includes(curr.data)) {
//           queue.push(curr.data);
//         }
//         // marking the current node is visited in visited array
//         visited[curr.data] = true;
//         // tracking the previous node of current node
//         prev[curr.data] = node;
//       }
//       curr = curr.next;
//     }
//   }

//   return prev;
// }
