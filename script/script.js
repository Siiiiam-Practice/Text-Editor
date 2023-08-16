const textarea = document.getElementById('text');
const bold = document.getElementById('bold').addEventListener('click', function() {
    textarea.style.fontWeight = 'bold';
});

const italic = document.getElementById('italic').addEventListener('click', function() {
    textarea.style.fontStyle = 'italic';
});

const underline = document.getElementById('underline').addEventListener('click', function() {
    textarea.style.textDecoration = 'underline';
});

const alignLeft = document.getElementById('align-left').addEventListener('click', function() {
    textarea.style.textAlign = 'start';
});

const alignRight = document.getElementById('alignRight').addEventListener('click', function() {
    textarea.style.textAlign = 'end';
});

const alignCenter = document.getElementById('alignCenter').addEventListener('click', function() {
    textarea.style.textAlign = 'center';
});

const alignJustify = document.getElementById('alignJustify').addEventListener('click', function() {
    textarea.style.textAlign = 'justify';
});

const fontCase = document.getElementById('fontCase').addEventListener('click', function() {
    textarea.style.textTransform = 'uppercase';
});

const fontSize = document.getElementById('font-size');
document.getElementById('font-size').addEventListener('keyup', function() {
    textarea.style.fontSize = fontSize.value+'px';
})


