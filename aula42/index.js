const data = new Date();

const diaSemana = data.getDay();

const strDiaSem = [
    `Domingo`,
    `Segunda`,
    `Terça`,
    `Quarta`,
    `Quinta`,
    `Sexta`,
    `Sábado`,
];


let swtDiaSem;
console.log(strDiaSem[diaSemana]);

switch (diaSemana) {
    case 0:
        swtDiaSem = `Domingo`;
        break;
    case 1:
        swtDiaSem = `Segunda`;
        break;
    case 2:
        swtDiaSem = `Terça`;
        break;
    case 3:
        swtDiaSem = `Quarta`;
        break;
    case 4:
        swtDiaSem = `Quinta`;
        break;
    case 5:
        swtDiaSem = `Sexta`;
        break;
    case 6:
    default:
        swtDiaSem = `Sábado`;
        break;
}

console.log(swtDiaSem);
console.log(data.toString());

console.log(Date(Date.now()).toString());