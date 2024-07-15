import { buildGraph } from './graph.js'

function knightTravails(from, to) {
    const graph = buildGraph(from, to);
    console.log(graph)
}

knightTravails([0, 0], [4, 4])