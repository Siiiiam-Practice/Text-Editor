function backgroundAdd(params) {
    const param = document.getElementById(params);
    param.style.padding = '10px';
    param.style.background = '#3B3B3B';
    param.style.borderRadius = '5px';
}

const textarea = document.getElementById('text');
const bold = document.getElementById('bold').addEventListener('click', function() {
    textarea.style.fontWeight = 'bold';
    backgroundAdd('bold');
});


const italic = document.getElementById('italic').addEventListener('click', function() {
    textarea.style.fontStyle = 'italic';
    backgroundAdd('italic');

});

const underline = document.getElementById('underline').addEventListener('click', function() {
    textarea.style.textDecoration = 'underline';
    backgroundAdd('underline');

});

const alignLeft = document.getElementById('align-left').addEventListener('click', function() {
    textarea.style.textAlign = 'start';
    backgroundAdd('align-left');

});

const alignRight = document.getElementById('alignRight').addEventListener('click', function() {
    textarea.style.textAlign = 'end';
    backgroundAdd('alignRight');

});

const alignCenter = document.getElementById('alignCenter').addEventListener('click', function() {
    textarea.style.textAlign = 'center';
    backgroundAdd('alignCenter');

});

const alignJustify = document.getElementById('alignJustify').addEventListener('click', function() {
    textarea.style.textAlign = 'justify';
    backgroundAdd('alignJustify');

});

const fontCase = document.getElementById('fontCase').addEventListener('click', function() {
    textarea.style.textTransform = 'uppercase';
    backgroundAdd('fontCase');

});

const fontSize = document.getElementById('font-size');
document.getElementById('font-size').addEventListener('keyup', function() {
    textarea.style.fontSize = fontSize.value+'px';
})

const color = document.getElementById('color');
document.getElementById('color').addEventListener('change', function() {
    textarea.style.color = color.value;
})

