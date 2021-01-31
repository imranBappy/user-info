let colors = ['00FF00', '18A5D6', 'D60808', 'FF9C00', '9C00FF', 'FF00CC', 'D60808', '00FF00', '8D99AE', 'EF233C'];
var testColor = ''
function countDown(fromNumber) {
    if (fromNumber < -1) {
        return
    }
    let random = Number(Math.ceil(Math.random() * fromNumber).toString()[0])
    setTimeout(() => {
        console.log(testColor);
        testColor = colors[random]
        countDown(fromNumber + 1);
    }, 700);
}
countDown(0);