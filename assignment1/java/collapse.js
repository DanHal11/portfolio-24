const collapseButton = document.querySelector('.collapse-button');
const collapsibleHeader = document.querySelector('header');
collapseButton.addEventListener('click', function () {
    collapsibleHeader.classList.toggle('collapsed');

});

const flipButton = document.querySelector('.collapse-button');
flipButton.addEventListener('click', function () {
    this.classList.toggle('clicked');
    this.classList.toggle('unclicked');
});
