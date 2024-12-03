function organizeGifts(gifts) {
	const unique = gifts.filter((el,index,arr) => arr.indexOf(el) === index);
    let result = {};
    unique.forEach(el => {
        result[el] = gifts.filter((r) => el == r).length;
    });
    return result;
}

console.log(organizeGifts(['a','b','c','a']));
console.log(organizeGifts(["pelota", "muñeca", "pelota", "rompecabezas"]));
