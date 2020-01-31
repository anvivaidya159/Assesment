const HELLO = 'Hello';
const GOODBYE = 'Good Bye';
const COUNT = 5;
const ITEM_CLASS = 'item';

const navigationBar = document.getElementById('nav');
const helloBtn = document.getElementById('helloBtn');
const goodbyeBtn = document.getElementById('goodbyeBtn');
const container = document.getElementById('container');

navigationBar.addEventListener('click', event => {
    let target = event.target.id;
    if (target === helloBtn.id) {
        show(HELLO);
    } else if (target === goodbyeBtn.id) {
        show(GOODBYE);
    }
}, false);

const show = (data) => {

    if (container.hasChildNodes()) {
        for (let i=0; i < COUNT; i++) {
            let row = document.getElementsByClassName(ITEM_CLASS)[i];
            row.innerHTML = data;
        }
    } else {
        for (let i=0; i < COUNT; i++) {
            let row = document.createElement('div');
            row.innerHTML = data;
            row.className = ITEM_CLASS;
            container.appendChild(row);
        }
    }
}