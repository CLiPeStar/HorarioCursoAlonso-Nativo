import {Injectable} from '@angular/core';
import {Asignatura} from '../../asignatura';
import {DatosService} from '../BBDD/datos.service';
import {Horario} from '../horario';

@Injectable({
    providedIn: 'root'
})
export class HorarioService {
    private _horarioSemana: Map<String, Map<string, Asignatura>>;
    private _horarioDia: Array<Horario>;
    private _horas: Array<string>;
    private _dias: Array<string>;

    constructor(private bdData: DatosService) {
        this._horarioSemana = new Map<String, Map<string, Asignatura>>();
        this._dias = [];
        this._horas = [];
        this._horarioDia = [];
        this.rellenarDias();
        this.rellenarHoras();
    }

    rellenarHorario(nameCurso: string) {
        return new Promise<void>((resolve, reject) => {


            this.bdData.getHorario(nameCurso)
                .then(async (data) => {


                    await data.forEach((e) => {
                        let objeto = {
                            hora: e.hora,
                            asignatura: new Asignatura(e.asignaturaCorto, e.asignaturaLargo)
                        };
                        let arrayObjetos: Map<string, Asignatura>;
                        if (this._horarioSemana.get(e.dia)) {

                            arrayObjetos = this._horarioSemana.get(e.dia);
                            arrayObjetos.set(objeto.hora, objeto.asignatura);
                        } else {
                            arrayObjetos = new Map<string, Asignatura>();
                            arrayObjetos.set(objeto.hora, objeto.asignatura);
                        }


                        this._horarioSemana.set(e.dia, arrayObjetos);
                    });
                    resolve();
                })
                .catch((e) => {
                    console.log(e);
                    reject();
                });
        });
    }

    private rellenarHoras() {
        this.bdData.getHoras()
            .then((data) => {
                data.forEach(e => {
                    this._horas.push(e.descripcion);
                });
            });
    }

    private rellenarDias() {
        this.bdData.getDias()
            .then((data) => {
                data.forEach(e => {
                    this._dias.push(e.nombre);
                });
            });
    }

    rellenarLista() {
        console.log(this._horarioSemana);
        console.log('rellenandoLista' + this._horas.length);
        let horarios: Array<Horario> = [];
        let horarioDias: Horario;
        for (let i = 0; i < this._horas.length; i++) {
            let lunes = this._horarioSemana.get(this._dias[0]).get(this._horas[i]);
            let martes = this._horarioSemana.get(this._dias[1]).get(this._horas[i]);
            let miercoles = this._horarioSemana.get(this._dias[2]).get(this._horas[i]);
            let jueves = this._horarioSemana.get(this._dias[3]).get(this._horas[i]);
            let viernes = this._horarioSemana.get(this._dias[4]).get(this._horas[i]);

            horarioDias = new Horario(this._horas[i], lunes, martes, miercoles, jueves, viernes);
            horarios.push(horarioDias);
        }
        this._horarioDia = horarios;
    }


    get horarioDia(): Array<Horario> {
        return this._horarioDia;
    }
}

