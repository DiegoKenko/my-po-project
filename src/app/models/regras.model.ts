export class Regra{

    id: number;
    ccEnt:String;
    ccSai:String;
    emp_ent:String;
    codCliente:String;
    lojaCliente:String;
    tesEnt:String;
    tesSai:String;
    tpProduto:String;
    conta: String;
    
    substTrib:String;

    constructor(id: number, ccEnt: String, ccSai: String, tesEnt: String, tesSai: String, tpProduto: String, 
        conta: String, emp_ent: String, codCliente: String, lojaCliente: String, substTrib: String) {
        this.id = id;
        this.tpProduto = tpProduto;
        this.tesEnt = tesEnt;
        this.tesSai = tesSai;
        this.ccEnt = ccEnt;
        this.ccSai = ccSai;
        this.conta = conta;
        this.emp_ent = emp_ent;
        this.codCliente = codCliente;
        this.lojaCliente = lojaCliente;
        this.substTrib = substTrib;
    }

    static fromJson(json: any): Regra {
        return new Regra(
            json.id,
            json.cc_entrada,
            json.cc_saida,
            json.tes_entrada,
            json.tes_saida,
            json.tp_produto,
            json.conta,
            json.empresa_saida,
            json.cod_cliente,
            json.loja_cliente,
            json.subst_trib
        );
    }

    toJson(): any {
        return {
            id: this.id,
            cc_entrada: this.ccEnt,
            cc_saida: this.ccSai,
            tes_entrada: this.tesEnt,
            tes_saida: this.tesSai,
            tp_produto: this.tpProduto,
            conta: this.conta,
            emp_ent: this.emp_ent,
            cod_cliente: this.codCliente,
            loja_cliente: this.lojaCliente,
            subst_trib: this.substTrib
        };
    }


}

export enum TipoRegra{
    CC,Conta,TES
}