if (localStorage.getItem('text_in_editor') !== null) {
    document.getElementById('editor').innerHTML = localStorage.getItem('text_in_editor');
}

document.addEventListener('keydown', function (e) {
    localStorage.setItem('text_in_editor', document.getElementById('editor').innerHTML);
});