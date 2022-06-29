module.exports = function toReadable (number) {
    let a = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let b = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let c = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let d = '';
    let e = ['hundred'];
    let result;
    if (number < 10) {
        result = a[number];
    } else if (number >= 10 && number < 20) {
        result = b[number - 10];
    } else if (number >= 20 && number < 100) {
        if (parseInt((String(number))[1]) === 0) {
            result = d + c[(String(number))[0]];
        } else { result = d + c[(String(number))[0]] + ' ' + a[(String(number))[1]]; }
    } else if (number >= 100 && number < 1000) {
        if (parseInt(String(number).slice(1, 3)) === 0) {
            result = d + a[(String(number))[0]] + ' ' + e;
        } else if (parseInt(String(number).slice(1, 3)) < 10) {
            result = d + a[(String(number))[0]] + ' ' + e + ' ' + a[(String(number))[2]];
        } else if (parseInt(String(number).slice(1, 3)) >= 10 && parseInt(String(number).slice(1, 3)) < 20) {
            result = d + a[(String(number))[0]] + ' ' + e + ' ' + b[parseInt(String(number).slice(1, 3)) - 10];
        } else if (parseInt(String(number).slice(1, 3)) >= 20 && parseInt(String(number).slice(1, 3)) < 100) {
            if (parseInt((String(number))[2]) === 0) {
                result = d + a[(String(number))[0]] + ' ' + e + ' ' + c[(String(number))[1]];
            } else { result = d + a[(String(number))[0]] + ' ' + e + ' ' + c[(String(number))[1]] + ' ' + a[(String(number))[2]]; }
        }
    }
    return result;
};