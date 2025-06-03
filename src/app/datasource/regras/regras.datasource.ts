import { HttpClient } from "@angular/common/http";
import { Datasource } from "../datasource";

export class RegrasDatasource extends Datasource{
    constructor(){
        super();
    }

    getRegras():Array<Regra>{
        return []
    }

}