const retornaHora = (data) => {
    if (data && !(data instanceof Date)) {
        throw new TypeError('esperando instancia de date');
    }

    if (!data) {
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
    });
};


try {
    const data = new Date('01-01-1970 12:58:12')
    console.log(retornaHora(data));
    console.log(retornaHora(11));
} catch(e) {
    console.log('data invalida!');
} finally {
    console.log(`seguindo programação às ${retornaHora()}`);
}