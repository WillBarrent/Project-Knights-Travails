export function findShortestPath(graph, from, to) {
    const shortestPath = [to, graph.at(-1)[0]];
    let findValue = shortestPath.at(-1);

    while (`[${shortestPath.at(-1)[0]},${shortestPath.at(-1)[1]}]` !== `[${from[0]},${from[1]}]`) {
        findValue = graph.find(v => {
            const value = v[1].find(`[${shortestPath.at(-1)[0]},${shortestPath.at(-1)[1]}]`);
            if (value) {
                return value;
            }
        });
        shortestPath.push(findValue[0]);
    }
    
    return shortestPath.reverse();
}