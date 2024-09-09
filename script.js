const cgrid = document.querySelector('#container');
const gridInput = document.getElementById('grid-size');
const gridValue = gridInput.value;
let color = document.querySelector('#color-picker');

function addGrid(row, column) {
    cgrid.style.setProperty('grid-template-columns', `repeat(${column}, 1fr)`);
    cgrid.style.setProperty('grid-template-rows', `repeat(${row}, 1fr)`);
    for (let i = 0; i < (row * column); i++) {
        const div = document.createElement('div');
        div.classList.add('grid');
        cgrid.appendChild(div);
    }
    hoverGrid();
}

function changeGrid(row, column) {
    row = gridInput.value;
    column = gridInput.value;
    if (row > 0 && row < 65 && column > 0 && column < 65) {

        document.querySelectorAll(".grid")
            .forEach((e) => e.parentNode.removeChild(e));
        addGrid(row, column);
    }
    else {
        var snackbar = document.getElementById('snackbar');
        snackbar.className = "show";
        setTimeout(function () { snackbar.className = snackbar.className.replace("show", ""); }, 3000);
    }
}

function hoverGrid() {
    let item = document.querySelectorAll('.grid');

    item.forEach(item => item.addEventListener('mouseover', () => {
        item.style.backgroundColor = color.value;
    }));
}

function randomColor() {
    let item = document.querySelectorAll('.grid');
    item.forEach(item => item.addEventListener('mouseover', () => {
        for (let i = 0; i < 10; i++) {
            const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
            item.style.backgroundColor = randomColor;
        }

    }));
}

function colorGrid() {
    let item = document.querySelectorAll('.grid');

    item.forEach(item => item.addEventListener('mouseover', () => {
        item.style.backgroundColor = color.value;
    }));
}

function eraseGrid() {
    let item = document.querySelectorAll('.grid');

    item.forEach(item => item.addEventListener('mouseover', () => {
        item.style.backgroundColor = 'transparent';
    }));
}

function resetGrid() {
    let item = document.querySelectorAll('.grid');

    item.forEach(item => item.style.backgroundColor = 'transparent');
};


addGrid(16, 16);

