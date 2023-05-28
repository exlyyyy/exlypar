let v1 = document.getElementById('v1');
let v2 = document.getElementById('v2');
let v3 = document.getElementById('v3');
let v4 = document.getElementById('v4');

window.addEventListener('scroll', () => {
let value = window.scrollY;
v1.style.left = value * -1.5 + 'px';
v2.style.left = value * 2.5 + 'px';
v3.style.left = value * -2 + 'px';
v4.style.left = value * 1 + 'px';
});