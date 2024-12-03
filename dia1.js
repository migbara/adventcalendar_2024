function distributeCookies(cookies, elves) {
    return {
        cookiesPerElf: elves == 0 ? 0 : Math.floor(cookies / elves),
        cookiesForSanta: elves == 0 ? cookies : cookies % elves
    };
}

console.log(distributeCookies(25,4));
console.log(distributeCookies(5,0));
console.log(distributeCookies(0,0));
