import { buildGraph } from "./graph.js"

function knightMoves(from, to) {
    const graph = buildGraph(from, to);
    graph.forEach(g => {
        console.log(g[0], g[1].toString());
    });
}

knightMoves([0, 0], [3, 3])
