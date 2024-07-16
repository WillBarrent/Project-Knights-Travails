import { generatePositions, getOffTheBoard } from "./positions.js";
import { LinkedList } from './linkedList.js';

export function buildGraph(from, to) {
    const queue = [from], graph = [];

    const unshifted = [queue.length];
    let weight = 0, j = 0;

    while (queue.length > 0) {
        const current = queue.pop();

        const vertices = buildVerticies(current, weight)[0];
        const positions = buildVerticies(current, weight)[1];

        graph.push(vertices);
        
        unshifted.unshift(positions.length);
        j += 1;
        
        if (j === unshifted.at(-1)) {
            unshifted.pop();
            j = 0;
            weight+=1;
        }

        for (let i = 0; i < positions.length; i++) {
            if (`[${positions[i][0]},${positions[i][1]}]` === `[${to[0]},${to[1]}]`) {
                return graph;
            }

            queue.unshift(positions[i]);
        }
    }

    return graph;
}

function buildVerticies(pos, level = 0) {
    const vertex = [pos];
    const list = new LinkedList();
    const positions = generatePositions(pos)
        .filter(v => !getOffTheBoard(v));

    positions.forEach(el => {
        const value = `[${el[0]},${el[1]}]`;
        list.append(value);
    });

    vertex.push(list, level);

    return [vertex, positions];
}