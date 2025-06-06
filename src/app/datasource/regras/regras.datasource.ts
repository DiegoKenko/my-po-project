import { HttpClient, HttpParams } from "@angular/common/http";
import { inject } from "@angular/core";
import { Regra } from "../../models/regras.model";

export class RegrasDatasource {

    cBaseUrl = "http://10.2.0.52:8080/rest/WSP74/wsP74TIPO/"
    http = inject(HttpClient)

    listarRegras(): Array<Regra> {
        this.http.get(this.cBaseUrl).subscribe({
            next: (v) => {
                console.log(v.toString)
            },
            error: (e) => {
                console.log(e.toString)
                return [];
            },
            complete: () => {
                return [];
            }
        })
        return [];
    }
    listarRegrasCC(): Array<Regra> {
        this.http.get(this.cBaseUrl, {
            params: { "tipo": 'CNT' }
        }).subscribe((data) => {
            if (data) {
                
            }
        })
        return [];
    }
    listarRegrasCnt(): Array<Regra> {
        return []
    }
    listarRegrasTES(): Array<Regra> {
        return []
    }

    salvarRegra(regra: Regra) {
        return JSON.stringify(regra);
    }

    excluirRegra(regra: Regra) {
        return JSON.stringify(regra);
    }
}