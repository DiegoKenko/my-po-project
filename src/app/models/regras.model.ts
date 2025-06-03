class Regra{

    id: String;
    ccEnt:String;
    ccSai:String;
    tesEnt:String;
    tesSai:String;
    tpProduto:String;
    conta: String;

    constructor(id: String, ccEnt: String, ccSai: String, tesEnt: String, tesSai: String, tpProduto: String, conta: String) {
        this.id = id;
        this.tpProduto = tpProduto;
        this.tesEnt = tesEnt;
        this.tesSai = tesSai;
        this.ccEnt = ccEnt;
        this.ccSai = ccSai;
        this.conta = conta;
    }

}