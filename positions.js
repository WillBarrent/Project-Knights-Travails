export function generatePositions(from) {
    const i = from[0], j = from[1];
    return [
        [i + 1, j - 2], [i + 2, j - 1],
        [i + 2, j + 1], [i + 1, j + 2],
        [i - 1, j + 2], [i - 2, j + 1],
        [i - 2, j - 1], [i - 1, j - 2]
    ];
}

export function getOffTheBoard(pos) {
    return pos[0] < 0 || pos[1] < 0 || pos[0] > 7 || pos[1] > 7;
}