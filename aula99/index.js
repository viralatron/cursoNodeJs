// polimorfismo
// superclasse
function Conta(agencia, conta, saldo) {
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

Conta.prototype.sacar = function(valor){
    if(this.saldo < valor) {
        console.log(`Saldo insuficiente`);
        this.verSaldo();
        return false;
    }
    this.verSaldo();
    this.saldo -= valor;
}
Conta.prototype.depositar = function(valor){
    this.saldo += valor;
    this.verSaldo;
}
Conta.prototype.verSaldo = function(){
    console.log(`Ag/Conta: ${this.agencia}/${this.conta}`);
    console.log(`Saldo restante: R$${this.saldo.toFixed(2)}`);
    return this.saldo;
}

const contaBancaria = new Conta(001, 006, 2500);

contaBancaria.verSaldo();

function CCorrente(agencia, conta, saldo, limite) {
    Conta.call(this, agencia, conta, saldo);

    this.limite = limite;
}

CCorrente.prototype = Object.create(Conta.prototype);
CCorrente.prototype.constructor = CCorrente;

CCorrente.prototype.sacar = function(valor) {
    if(valor > (this.saldo + this.limite)) {
        console.log(`Valor maior que o limite permitido.`);
        this.verLimite();
        return false;
    }

    this.verSaldo();
    this.saldo -= valor;
}

CCorrente.prototype.verLimite = function(){
    console.log(`Ag/Conta: ${this.agencia}/${this.conta}`);
    console.log(`Limite: R$${this.limite.toFixed(2)}`);
    return this.limite;
}

const cc = new CCorrente(001, 012, 8500, 200);

cc.verLimite();
cc.verSaldo();
cc.depositar(200);
cc.sacar(5000);
cc.verSaldo();
cc.sacar(5000);
cc.verSaldo();
cc.sacar(5000);
cc.verSaldo();