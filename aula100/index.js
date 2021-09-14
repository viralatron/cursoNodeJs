// factory
function criaMecha(unid, atk, spd) {
    const atacar = {
        atacar () {
            console.log(`ataque de ${this.atk} realizado`);
        }
    };
    const correr = {
        correr() {
            console.log(`correndo a ${this.spd} km/h`);
        }
    };
    const identificar = {
        identificar() {
            console.log(`unidade ${this.unidade}`);
        }
    };
    const mechaProto = { ...atacar, ...correr, ...identificar};

    return Object.create(mechaProto, {
        unidade: { value: unid },
        atk: { value: atk },
        spd: { value: spd }
    });
}

const gundam = criaMecha("RX-78", 9500, 1200);

console.log(gundam);
gundam.atacar();