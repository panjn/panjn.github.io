var contents = document.getElementsByClassName('content');
var content = contents[0];

function fitContent() {
    var pdf = document.getElementById('page-container');
    pdf.style.zoom = content.getBoundingClientRect().width / 720;
}
fitContent();
window.addEventListener('resize', fitContent);


document.onkeydown = checkKey;

function checkKey(e) {

    e = e || window.event;
    var pageElem = document.getElementsByClassName("w0")[0];
    var pageHeight = (pageElem.offsetHeight+13) * content.getBoundingClientRect().width / 720;

    if (e.keyCode === 37) {
        e.preventDefault();
        window.scrollBy(0, -pageHeight);
    }
    else if (e.keyCode === 39) {
        e.preventDefault();
        window.scrollBy(0, pageHeight);
    }
}



