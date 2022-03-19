var pdf = document.getElementById('page-container');
var contents = document.getElementsByClassName('content');
var content = contents[0];
var w0Width = document.getElementsByClassName('w0')[0].style.width;
pdf.style.zoom = content.getBoundingClientRect().width / parseInt(w0Width.substring(0, w0Width.length-2));