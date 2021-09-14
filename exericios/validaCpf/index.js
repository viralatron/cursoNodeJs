// 705.484.450-52 070.987.720-03
/*
7x  0x 5x 4x 8x 4x 4x 5x 0x
10  9  8  7  6  5  4  3  2
70  0  40 28 48 20 16 15 0 = 237

11 - (237 % 11) = 5 (Primeiro dígito)
Se o número digito for maior que 9, consideramos 0.

7x  0x 5x 4x 8x 4x 4x 5x 0x 5x
11 10  9  8  7  6  5  4  3  2
77  0  45 32 56 24 20 20 0  10 = 284

11 - (284 % 11) = 2 (Segundo dígito)
Se o número digito for maior que 9, consideramos 0.
*/

function ValidadorCPF(val){
    Object.defineProperty(this, 'CPF', {
        enumerable: true,
        get: function(){
            return val.replace(/\D+/g, '');
        }
    });
    
    // let digitos = Array.from(CPF);

    // let dgtVerificadores = digitos.splice(digitos.length - 2, digitos.length);

    // console.log(this.CPF);
}

ValidadorCPF.prototype.valida = function() {
    if(typeof this.CPF === 'undefined') return false;
    if(this.CPF.length !== 11) return false;
    if(this.isSequencia()) return false;

    const parcial = this.CPF.slice(0, -2);

    const digito1 = this.geraDigito(parcial);
    
    const digito2 = this.geraDigito(parcial + digito1);
    const novoCpf = parcial+digito1+digito2;
    return novoCpf === this.CPF;
};

ValidadorCPF.prototype.isSequencia = function() {
    const sequencia = this.CPF[0].repeat(this.CPF.length);
    
    return sequencia === this.CPF;
}

ValidadorCPF.prototype.geraDigito = function(val) {
    const valArray = Array.from(val);
    let regressivo = val.length + 1;

    const total = valArray.reduce(function(ac, val){
        ac += (regressivo * Number(val));
        regressivo--;
        return ac;
    }, 0);
    const digito = 11 - (total % 11);
    return digito > 9 ? '0' : String(digito);
}

const CPFInformado = "036.193.505-66";
// const CPFInformado = "123.123.123-66";
const Validador = new ValidadorCPF(CPFInformado);
console.log(`CPF INFORMADO: ${CPFInformado}`);
if(Validador.valida()) {
    console.log(`CPF VÁLIDO`);
} else {
    console.log(`CPF INVÁLIDO`);
}