import { generatePositions, getOffTheBoard } from "./gameboard.js";
import { LinkedList } from "./linkedList.js";

export function buildGraph(from, to, graph = []) {
    if (`${from[0],from[1]}` === `${to[0],to[1]}`) {
        return;
    }
    
    const array = [[from, fillList(from, graph)]];
    graph = [...graph, ...array];

    let temp = array[0][1].headNode();
    while (temp !== null) {
        buildGraph(Array.from(temp.value).filter(v => v >= 0).map(v => +v), to, graph)
        temp = temp.nextNode;
    }

    return graph;
}

function fillList(from, graph = []) {
    const list = new LinkedList();
    const positions = generatePositions(from)
    .filter(pos => {
        return !getOffTheBoard(pos) && !searchSimilar(graph, pos);
    })
    .forEach(pos => {
        list.append(`[${pos[0]},${pos[1]}]`);
    });
    
    return list;
}

function searchSimilar(array, value) {
    return array
    .filter(pos => {
        return `${pos[0][0],pos[0][1]}` === `${value[0],value[1]}`
    })
    .length;
}