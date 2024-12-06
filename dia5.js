function encryptMessage(message, shift) {

    let newString = '';

    const limite_mayusculas = {
        inf: 65,
        sup: 90
    }

    const limite_minusculas = {
        inf: 97,
        sup: 122
    }

    for (let i = 0; i < message.length; i++) {
        let lim_inf = 0;
        let lim_sup = 0;

        if (message.charCodeAt(i) >= limite_mayusculas.inf && message.charCodeAt(i) <= limite_mayusculas.sup) {
            lim_inf = limite_mayusculas.inf;
            lim_sup = limite_mayusculas.sup;
        }
        if (message.charCodeAt(i) >= limite_minusculas.inf && message.charCodeAt(i) <= limite_minusculas.sup) {
            lim_inf = limite_minusculas.inf;
            lim_sup = limite_minusculas.sup;
        }
        // console.log(`${message.charAt(i)} ${message.charCodeAt(i)} ${message.charCodeAt(i) + shift} ${lim_sup-lim_inf} ${( (message.charCodeAt(i)+shift-lim_inf + (lim_sup-lim_inf +1)) % (lim_sup-lim_inf +1) ) + lim_inf}`);

        if (lim_inf != 0)
            newString += String.fromCharCode((((message.charCodeAt(i) + shift - lim_inf + (lim_sup - lim_inf + 1)) % (lim_sup - lim_inf + 1)) + lim_inf));
        else
            newString += message.charAt(i);

    }

    // const cad = message.split('').map( el => el = String.fromCharCode((((message.charCodeAt(0)+shift-lim_inf + (lim_sup-lim_inf +1)) % (lim_sup-lim_inf+1)) + lim_inf))).join('');
    // console.log(newString);
    // console.log(cad);

    return newString;
}

console.log(encryptMessage("Programming is fun!", 10));