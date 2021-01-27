import {Injectable} from '@angular/core';
import {Clases} from '../../Clases';
import {DatosService} from "../BBDD/datos.service";

@Injectable({
    providedIn: 'root'
})
export class ClasesService {
    private _clases: Map<number, Clases>;
    private clasesArray: any[] = [];

    constructor(private dataBd: DatosService) {
        ;
    }

    private rellenarClases() {
        for (let i = 0; i < this.clasesArray.length; i++) {
            this._clases.set(this.clasesArray[i].id, new Clases(this.clasesArray[i].id, this.clasesArray[i].nombre))
        }
    }

    clases(id: any) {

        this._clases = new Map<number, Clases>()
        this.clasesArray = [];


        return new Promise<Array<Clases>>((resolve, reject) => {
            this.dataBd.getClases(id)
                .then((data) => {
                    this.clasesArray = data;
                    this.rellenarClases()
                    let temporal: Array<Clases> = new Array<Clases>();
                    for (const argument of this._clases) {
                        temporal.push(argument[1]);
                    }
                    resolve(temporal);
                })
                .catch();
        })


    }

}
