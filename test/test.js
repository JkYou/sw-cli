const ball = count => {
    let str = ''
    for (var i = 0; i < count; i++) {
        let red = [];
        while (red.length < 6) {
            let n = parseInt(Math.random() * 33) + 1;
            let redItem = n >= 10 ? n : '0' + n
            if (!red.includes(redItem)) {
                red.push(redItem)
            }
        }
        let blue = parseInt(Math.random() * 16) + 1;
        red.push(blue >= 10 ? blue : '0' + blue);
        str += red.toString() + ' ' + '\n'
    }
    return str;
}
console.info(ball(5))