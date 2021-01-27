import {Component, OnInit} from '@angular/core';
import {ClasesService} from '../core/services/clases/clases.service';
import {Clases} from '../core/Clases';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';

@Component({
    selector: 'app-cursos',
    templateUrl: './cursos.page.html',
    styleUrls: ['./cursos.page.scss'],
})
export class CursosPage implements OnInit {

    private idEstudio;
    private _clases: Array<Clases> = []

    constructor(private _cursos: ClasesService, private route: Router, public act: ActivatedRoute) {
        this.idEstudio = this.act.snapshot.paramMap.get("id")
        this.dameClases()
    }

    dameClases() {
        this._clases = []
        this._cursos.clases(this.idEstudio)
            .then((data) => {
                this._clases = data
            });

    }


    ngOnInit() {
    }


    pasarClase(event: Clases) {
        let clase: Clases = event;
        let extrasDeNavegcacion: NavigationExtras = {
            state: {
                clase: clase,
            }
        };
        this.route.navigate(['horario'], extrasDeNavegcacion);
    }

    get clases(): Array<Clases> {
        return this._clases;
    }
}
