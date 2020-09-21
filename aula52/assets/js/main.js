const lipsum = document.querySelector('.lipsum');

const paragrafos = lipsum.querySelectorAll('p');

const style = getComputedStyle(document.body);
const backgroundColorBody = style.backgroundColor;

for (const p of paragrafos) {
    console.log(p);
    p.style.backgroundColor = backgroundColorBody;
    p.style.color = '#FFFFFF';
    p.style.padding = '5px';
    p.style.borderRadius = '5px';
}