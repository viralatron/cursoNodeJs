// classe e getters/setters
const _ataque = Symbol('atk');
const _velocidade = Symbol('spd');

class Mecha {
    constructor(unid, atk, spd) {
        this.unidade = unid;
        this[_ataque] = atk;
        this[_velocidade] = spd;
    }

    // getter & setters
    set ataque(valor){
        if(typeof valor !== 'number') return;
        if(valor <= 0 || valor >= 8000) return;
        this[_ataque] = valor;
    }
    get ataque(valor){
        return this[_ataque];
    }

    // getter & setters
    set velocidade(valor){
        if(typeof valor !== 'number') return;
        if(valor <= 0 || valor >= 8000) return;
        this[_velocidade] = valor;
    }
    get velocidade(valor){
        return this[_velocidade];
    }

    atacar() {
        console.log(`ataque de ${this[_ataque]} realizado`);
    }

    correr() {
        console.log(`correndo a ${this[_velocidade]} km/h`);
    }

    identificar() {
        console.log(`unidade ${this.unidade}`);
    }
}

const gundam = criaMecha("RX-78", 9500, 1200);

console.log(gundam);
gundam.atacar();