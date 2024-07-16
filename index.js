import { buildGraph } from './graph.js'
import { findShortestPath } from './search.js';

function knightTravails(from, to) {
    const graph = buildGraph(from, to);
    const shortestPath = findShortestPath(graph, to);
}

knightTravails([0, 0], [4, 4])