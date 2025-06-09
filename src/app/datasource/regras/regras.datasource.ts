import { HttpClient, HttpParams } from "@angular/common/http";
import { inject } from "@angular/core";
import { Regra } from "../../models/regras.model";
import { endWith, Observable } from "rxjs";

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
        let regras: Array<Regra>;
        regras = [];
        this.http.get<Array<Regra>>(this.cBaseUrl, {
            params: { "tipo": 'CCT' },
        }).subscribe({
            next: (v: any) => {
                for (let index = 0; index < v.regras.length; index++) {
                    regras.push(Regra.fromJson(v.regras[index]))
                }
            },
            error: (e) => {
                console.log(e.toString)
                return [];
            },
            complete: () => {
                return [];
            }
        })
        return regras;
    }
    listarRegrasCnt(): Array<Regra> {
        let regras: Array<Regra>;
        regras = [];
        this.http.get<Array<Regra>>(this.cBaseUrl, {
            params: { "tipo": 'CNT' }
        }).subscribe({
            next: (v: any) => {
                for (let index = 0; index < v.regras.length; index++) {
                    regras.push(Regra.fromJson(v.regras[index]))
                }
            },
            error: (e) => {
                console.log(e.toString)
                return [];
            },
            complete: () => {
                return [];
            }
        })
        return regras;
    }
    listarRegrasTES(): Array<Regra> {
        let regras: Array<Regra>;
        regras = [];
        this.http.get<Array<Regra>>(this.cBaseUrl, {
            params: { "tipo": 'TES' }
        }).subscribe({
            next: (v: any) => {
                for (let index = 0; index < v.regras.length; index++) {
                    regras.push(Regra.fromJson(v.regras[index]))
                }
            },
            error: (e) => {
                console.log(e.toString)
                return [];
            },
            complete: () => {
                return [];
            }
        })
        return regras;
    }

    salvarRegra(regra: Regra) {
        return JSON.stringify(regra);
    }

    excluirRegra(regra: Regra) {
        return JSON.stringify(regra);
    }
}