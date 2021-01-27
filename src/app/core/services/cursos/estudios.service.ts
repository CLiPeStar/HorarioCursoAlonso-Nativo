import {Injectable} from '@angular/core';
import {Estudio} from '../../Estudio';
import {DatosService} from '../BBDD/datos.service';

@Injectable({
    providedIn: 'root'
})
export class EstudiosService {

    private _estudios: Map<number, Estudio>;
    private arrayEstudios: any[];


    constructor(private dataBd: DatosService) {
        this._estudios = new Map<number, Estudio>();
        this.dataBd.getEstudios()
            .then((data) => {
                this.arrayEstudios = data;
                console.log(data);

                this.rellenarEstudios();
            })
            .catch();

    }

    private rellenarEstudios() {
        for (let i = 0; i < this.arrayEstudios.length; i++) {
            this._estudios.set(this.arrayEstudios[i].idEstudios, new Estudio(this.arrayEstudios[i].idEstudios, this.arrayEstudios[i].nombre));
        }
    }


    estudios(): Array<Estudio> {
        let temporal: Array<Estudio> = new Array<Estudio>();
        for (const argument of this._estudios) {
            temporal.push(argument[1]);
        }
        return temporal;
    }
}
