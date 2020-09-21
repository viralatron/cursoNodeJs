/**
 * criar uma lista de tarefa
 * deve levar push
 * deve salvar na sessão
 * deve buscar e apagar o item selecionado
 */

const fieldTarefa = document.querySelector('.field-tarefa');
const btnTarefa = document.querySelector('.add-tarefa');
const tarefas = document.querySelector('.tarefas');

function tarefaHTML(){
    return document.createElement('li');
}

function saveTarefas(){
    const allTarefas = tarefas.querySelectorAll('li');
    const listTarefas = [];

    for (let tarefa of allTarefas) {
        let textTarefa = tarefa.innerText;
        textTarefa = textTarefa.replace(' Apagar', '');
        listTarefas.push(textTarefa);
    }

    const tarefasJSON = JSON.stringify(listTarefas);
    localStorage.setItem('tarefas', tarefasJSON);
}

function clearTarefaField() {
    fieldTarefa.value = '';
    fieldTarefa.focus;
}

function createDeleteButton(li) {
    li.innerText += " ";
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete");
    deleteBtn.innerText = 'Apagar';
    li.appendChild(deleteBtn);
}

function newTarefa(text) {
    const li = tarefaHTML();
    li.innerText = text;
    createDeleteButton(li);
    tarefas.appendChild(li);
    clearTarefaField();
    saveTarefas();
};

function loadTarefas(){
    const storedTarefas = localStorage.getItem('tarefas');
    const listTarefas = JSON.parse(storedTarefas);

    for (let tarefa of listTarefas) {
        let tHTML = tarefaHTML();
        tHTML.innerText = tarefa;
        createDeleteButton(tHTML);
        tarefas.appendChild(tHTML);
    }
}

fieldTarefa.addEventListener('keypress', (e) => {
    if(e.key === 'Enter') {
        if(!fieldTarefa.value) return;
        newTarefa(fieldTarefa.value);
    }
});

btnTarefa.addEventListener('click', (e) => {
    if(!fieldTarefa.value) return;
    newTarefa(fieldTarefa.value);
});

document.addEventListener('click', (e) => {
    const el = e.target;

    if(el.classList.contains('delete')){
        el.parentElement.remove();
        saveTarefas();
    }
});

try {
    loadTarefas();
} catch (error) {
    console.log("sem tarefas para carregar");
}