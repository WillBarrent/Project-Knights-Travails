import { LinkedList } from "./linkedList.js";

export function buildGraph(from, to, graph = [], level = 0) {
    if (`${from[0]}, ${from[1]}` === `${to[0]}, ${to[1]}` || searchSimilar(graph, from)) {
        return;
    }
    const array = [[from, fillList(from, graph), level + 1]];
    array[0][2] = changeLevel(...array, graph, level + 1);
    graph = [...graph, ...array];

    let temp = array[0][1].headNode();
    while (temp !== null) {
        const newGraph = buildGraph(Array.from(temp.value).filter(v => v >= 0).map(v => +v), to, graph, level + 1)
        if ((newGraph instanceof Array)) {
            graph = [...newGraph]
        }
        temp = temp.nextNode;
    }

    return graph;
}

export function changeLevel(array, graph, currentLevel) {
    const value = `[${array[0][0]},${array[0][1]}]`;

    graph.forEach(v => {
        const findValue = v[1].find(value);
        if (findValue !== null && v[2] < currentLevel) {
            currentLevel = v[2] + 1;
        }
    });
    
    return currentLevel;
}

function fillList(from, graph = [], level = 0) {
    const list = new LinkedList();
        
    const positions = generatePositions(from, level)
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
            return `${pos[0][0]}, ${pos[0][1]}` === `${value[0]}, ${value[1]}`
        })
        .length;
}