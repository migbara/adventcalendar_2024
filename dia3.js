function decorateTree(levels) {
    let result = [];
    const decorationGifts = ['⭐','🎄','🎁'];
    for (let i = 1; i <= levels; i++) {
        let level = '';
        let char = decorationGifts[(i-1) % decorationGifts.length];
        for (let j = 0; j < i; j++) {
            level += char;
        }
        result.push(level);
    }
    return result;
}

console.log(decorateTree(10));