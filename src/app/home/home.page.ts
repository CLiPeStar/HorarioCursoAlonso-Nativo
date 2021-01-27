import {Component} from '@angular/core';
import {EstudiosService} from '../core/services/cursos/estudios.service';
import {Estudio} from '../core/Estudio';
import {CopiaService} from '../core/services/BBDD/copia.service';
import {DatosService} from '../core/services/BBDD/datos.service';


@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {

    constructor(private estudios: EstudiosService) {
    }

    getEstudios() {
        return this.estudios.estudios();
    }


}
