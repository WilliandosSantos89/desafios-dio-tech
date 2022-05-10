class ContaBancaria {
    constructor(agencia, numero, tipo, saldo) {
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = saldo;
    }
    
    get saldo() {
        return this._saldo;
    }

    set saldo(valor) {
        this.saldo = valor;
    }

    sacar(valor) {
        if (valor > this._saldo) {
            return "Operação negada"
        }
        this._saldo = this._saldo - valor;

        return this._saldo
    }

    depositar(valor) {
        this._saldo = this._saldo + valor;

        return this._saldo;
    }
}

class ContaCorrente {
    constructor(agencia, numero, saldo) {
        super(agencia, numero, saldo);
        this.tipo = 'corrente';
        this.cartaoCredito = 'cartaoCredito';
    }

    get cartaoCredito() {
        return this._cartaoCredito;
    }

    set cartaoCredito(valor) {
        this.cartaoCredito = valor
    }
}