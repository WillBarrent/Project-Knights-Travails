import { generatePositions, getOffTheBoard } from "./positions.js";
import { LinkedList } from './linkedList.js';

export function buildGraph(from, to) {
    const queue = [from], graph = [];

    while (queue.length > 0) {
        const current = queue.pop();
        const vertices = buildVerticies(current)[0];
        const positions = buildVerticies(current)[1];

        graph.push(vertices);

        for (let i = 0; i < positions.length; i++) {
            if (`[${positions[i][0]},${positions[i][1]}]` === `[${to[0]},${to[1]}]`) {
                return graph;
            }

            queue.unshift(positions[i]);
        }
    }

    return graph;
}

function buildVerticies(pos) {
    const vertex = [pos];
    const list = new LinkedList();
    const positions = generatePositions(pos)
        .filter(v => !getOffTheBoard(v));

    positions.forEach(el => {
        const value = `[${el[0]},${el[1]}]`;
        list.append(value);
    });

    vertex.push(list);

    return [vertex, positions];
}