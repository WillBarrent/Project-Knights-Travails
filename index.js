import { buildGraph } from './graph.js'
import { findShortestPath } from './search.js';

function knightTravails(from, to) {
    const graph = buildGraph(from, to);
    const shortestPath = findShortestPath(graph, from, to);

    return shortestPath;
}

const test1 = [[0, 0], [3, 3]];
const test2 = [[3, 3], [0, 0]];
const test3 = [[0, 0], [7, 7]];
const test4 = [[7, 7], [0, 0]];

console.log(knightTravails(...test1));
console.log(knightTravails(...test2));
console.log(knightTravails(...test3));
console.log(knightTravails(...test4));