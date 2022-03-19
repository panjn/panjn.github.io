var pdf = document.getElementById('page-container');
var contents = document.getElementsByClassName('content');
var content = contents[0];
pdf.style.zoom = content.getBoundingClientRect().width / 720;
