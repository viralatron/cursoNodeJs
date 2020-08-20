const nome = prompt(`Digite seu nome`);

document.body.innerHTML += `<h1>Bem vindo ${nome}</h1>`;
document.body.innerHTML += `<p>Seu nome tem <strong>${nome.length}</strong> letras</p>`;
document.body.innerHTML += `<p>A segunda letra do seu nome é: <strong>${nome.charAt(1)}</strong></p>`;
document.body.innerHTML += `<p>Qual o primeiro índice da letra L no seu nome? <strong>${nome.indexOf(`l`) + 1}</strong></p>`;
document.body.innerHTML += `<p>Qual o último índice da letra L no seu nome? <strong>${nome.lastIndexOf(`l`) + 1}</strong></p>`;
document.body.innerHTML += `<p>As últimas 3 letras do seu nome são: <strong>${nome.slice(-3)}</strong></p>`;
document.body.innerHTML += `<p>As palavras do seu nome são: <strong>${nome.split(` `)}</strong></p>`;
document.body.innerHTML += `<p>Seu nome com letras maiúsculas: <strong>${nome.toUpperCase()}</strong></p>`;
document.body.innerHTML += `<p>Seu nome com letras minúsculas: <strong>${nome.toLowerCase()}</strong></p>`;