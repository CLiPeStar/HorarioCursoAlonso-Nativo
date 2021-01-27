import {Asignatura} from '../asignatura';

export class Horario {


    constructor(private _hora: string,
                private _asignaturaLunes: Asignatura,
                private _asignaturaMartes: Asignatura,
                private _asignaturaMiercoles: Asignatura,
                private _asignaturaJueves: Asignatura,
                private _asignaturaViernes: Asignatura) {

    }

    get hora(): string {
        return this._hora;
    }

    get asignaturaLunes(): Asignatura {
        return this._asignaturaLunes;
    }

    get asignaturaMartes(): Asignatura {
        return this._asignaturaMartes;
    }

    get asignaturaMiercoles(): Asignatura {
        return this._asignaturaMiercoles;
    }

    get asignaturaJueves(): Asignatura {
        return this._asignaturaJueves;
    }

    get asignaturaViernes(): Asignatura {
        return this._asignaturaViernes;
    }
}
