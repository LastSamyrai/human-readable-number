module.exports = function toReadable (number) {
    let unambiguous = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let twoDigit = [ 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let twoDigitNumber = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    let result = '';
    let stringNumber = number.toString().split('');

    if (number >= 0 && number < 10) {
        result = unambiguous[number];
    } else if (number >= 10 && number < 20) {
        result = twoDigit[number-10];
    } else if (number >= 20 && number < 100) {
        if (stringNumber[1] === '0') {
                result = `${twoDigitNumber[stringNumber[0]]}`;
            } else {
                result = `${twoDigitNumber[stringNumber[0]]} ${unambiguous[stringNumber[1]]}`;
        }
    } else if (number >= 100 && number < 1000) {
        if (stringNumber[1] === '0' && stringNumber[2] === '0') {
            result = `${unambiguous[stringNumber[0]]} hundred`;
        } else if (stringNumber[1] === '0') {
            result = `${unambiguous[stringNumber[0]]} hundred ${unambiguous[stringNumber[2]]}`;
        } else if (stringNumber[1] === '1') {
            result = `${unambiguous[stringNumber[0]]} hundred ${twoDigit[stringNumber[2]]}`;
        } else if (stringNumber[2] === '0') {
            result = `${unambiguous[stringNumber[0]]} hundred ${twoDigitNumber[stringNumber[1]]}`;
        } else {
            result = `${unambiguous[stringNumber[0]]} hundred ${twoDigitNumber[stringNumber[1]]} ${unambiguous[stringNumber[2]]}`;
        }
    }

    return result;
}
