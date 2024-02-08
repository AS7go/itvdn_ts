function let1() {
    // console.log(i); // Cannot find name 'i'
    // console.log(test); // Cannot find name 'test'
    for (var i = 0; i < 10; i++) {
        var test = i;
    }
    // console.log(i); // Cannot find name 'i'
    // console.log(test); // Cannot find name 'test'
}
// let1();
// Повторне визначення змінної не призводить до помилки.
function let2() {
    var a = 10;
    // Cannot redeclare block-scoped variable 'a'
    // var a = 20;
    console.log(a); // 10
}
// let2();
// 0, 1, 2, 3, 4
function let3() {
    var _loop_1 = function (i) {
        setTimeout(function () {
            console.log(i);
        }, 10);
    };
    for (var i = 0; i < 5; i++) {
        _loop_1(i);
    }
}
let3();
//# sourceMappingURL=03-let-scoping.js.map