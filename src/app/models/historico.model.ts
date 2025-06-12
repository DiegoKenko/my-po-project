export class Historico {
    id: number;
    data: string;
    hora: string;
    sucesso: string;
    obs: string;
    log: string;
    empsai: string;
    empent: string;
    nf: string;
    nfserie: string;
    envmail: string;
    numsa: string;
    numpv: string;

    constructor(
        id: number,
        data: string,
        hora: string,
        sucesso: string,
        obs: string,
        log: string,
        empsai: string,
        empent: string,
        nf: string,
        nfserie: string,
        envmail: string,
        numsa: string,
        numpv: string
    ) {
        this.id = id;
        this.data = data;
        this.hora = hora;
        this.sucesso = sucesso;
        this.obs = obs;
        this.log = log;
        this.empsai = empsai;
        this.empent = empent;
        this.nf = nf;
        this.nfserie = nfserie;
        this.envmail = envmail;
        this.numsa = numsa;
        this.numpv = numpv;
    }

    static fromJson(json: any): Historico {
        return new Historico(
            json.id,
            json.data,
            json.hora,
            json.sucesso,
            json.obs,
            json.log,
            json.emp_sai,
            json.emp_ent,
            json.nf,
            json.serie,
            json.env_mail,
            json.sa,
            json.pv
        );
    }

    toJson(): any {
        return {
            id: this.id,
            data: this.data,
            hora: this.hora,
            sucesso: this.sucesso,
            obs: this.obs,
            log: this.log,
            empsai: this.empsai,
            empent: this.empent,
            nf: this.nf,
            nfserie: this.nfserie,
            envmail: this.envmail,
            numsa: this.numsa,
            numpv: this.numpv
        };
    }
}