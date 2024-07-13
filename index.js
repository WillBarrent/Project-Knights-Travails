import { buildGraph } from "./graph.js"

function knightMoves(from, to) {
    const graph = buildGraph(from, to);
    console.log(graph)
}

knightMoves([0, 0], [4, 4])
