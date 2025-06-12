import { HttpClient, HttpParams } from "@angular/common/http";
import { inject } from "@angular/core";
import { endWith, Observable } from "rxjs";
import { Historico } from "../../models/historico.model";
import { format } from 'date-fns';


export class HistoricoDatasource {
    cBaseUrl = "http://10.2.0.5:8889/rest/WSP73/historico/"
    http = inject(HttpClient)

    listarhistoricos(): Array<Historico> {
        let historico: Array<Historico> = [];
        let yesterday=new Date(new Date().getTime() - (1 * 24 * 60 * 60 * 1000));
        const formattedDate: string = format(yesterday , 'yyyyMMdd');
        this.http.get(this.cBaseUrl, {
            params: new HttpParams().set("inicio", formattedDate)
        }).subscribe({
            next: (v: any) => {                            
                for (let index = 0; index < v.historico.length; index++) {
                    historico.push(Historico.fromJson(v.historico[index]))
                }
            },
            error: (e) => {
                return historico;
            },
            complete: () => {
                return historico;
            }
        })
        return historico;
    }
}