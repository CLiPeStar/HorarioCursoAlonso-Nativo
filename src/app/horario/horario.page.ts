import {Component, OnInit} from '@angular/core';
import {HorarioService} from '../core/services/horario/horario.service';
import {ActivatedRoute, Route, Router} from '@angular/router';
import {Clases} from '../core/Clases';
import {Horario} from '../core/services/horario';
import {Asignatura} from '../core/asignatura';
import {CopiaService} from '../core/services/BBDD/copia.service';

@Component({
    selector: 'app-horario',
    templateUrl: './horario.page.html',
    styleUrls: ['./horario.page.scss'],
})
export class HorarioPage implements OnInit {
    private _clase: Clases;
    private _claseName: string;
    private _horarioDia: Array<Horario>;

    constructor(private _horario: HorarioService, private router: Router, private rutaActivada: ActivatedRoute) {
        this.rutaActivada.queryParamMap.subscribe(() => {
            this._clase = this.router.getCurrentNavigation().extras.state.clase;
            this._claseName = this._clase.name;
            this._horario.rellenarHorario(this._claseName)
                .then(() => {
                    this._horario.rellenarLista();
                    this._horarioDia = this._horario.horarioDia;
                });
        });

    }

    ngOnInit() {
    }

    vaciarHorario() {
        this._horarioDia = [];
    }

    get claseName(): String {
        return this._claseName;
    }

    get horarioDia(): Array<Horario> {

        return this._horarioDia;
    }

    alertName(asignatura: Asignatura) {
        alert(asignatura.nameShort + ' - ' + asignatura.nameLong);
    }
}
