var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) {
    greeting = '晚上好!';
} else if (hourNow > 12) {
    greeting = '下午好!';
} else if (hourNow > 0) {
    greeting = '早上好!';
} else {
    greeting = '欢迎您来到我的博客!';
}

document.write('<h3>' + greeting + '</h3>');
