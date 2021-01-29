import {AppComponent} from '../../../app.component';
import {SQLite, SQLiteObject} from '@ionic-native/sqlite/ngx';
import {Platform} from '@ionic/angular';
import {Injectable} from '@angular/core';
import {Request} from '../../Request';
import {CopiaService} from './copia.service';

@Injectable({
    providedIn: 'root',
})
export class DatosService {
    private db: SQLiteObject;

    constructor(private platform: Platform, private sqlite: SQLite, private copia: CopiaService, private dbs: SQLiteObject) {
        copia.copiarBBDD();
        this.db = this.dbs;
    }

    requestExecuteSentence() {
        return new Promise<void>((resolve, reject) => {
                let consultable = true;
                if (!this.db) {
                    this.openDB()
                        .then((resp) => {
                            alert(resp);
                            resolve();
                        })
                        .catch((err) => {
                            consultable = false;
                            alert(err);
                            reject(err);
                        });
                } else {
                    resolve();
                }

            }
        );
    }

    executeSentence(request: Request) {
        return new Promise<Array<any>>((resolve, reject) => {

                this.requestExecuteSentence()
                    .then(() => {
                        this.db
                            .executeSql(request.sql, request.searchParams)
                            .then((data) => {
                                const responseData: Array<any> = [];
                                for (let i = 0; i < data.rows.length; i++) {
                                    const obj = data.rows.item(i);
                                    responseData.push(obj);
                                }

                                resolve(responseData);

                            })
                            .catch((e) => {
                                reject('fallo al ejecutar sentencia ' + JSON.stringify(e));
                            });
                    })
                    .catch((err) => {
                        alert(err);
                    });
            }
        );
    }

    getEstudios() {
        const sql = 'SELECT * FROM estudios WHERE 1';
        const searchParams = [];
        const request: Request = new Request(sql, searchParams);

        return new Promise<Array<any>>((resolve, reject) => {
            this.executeSentence(request)
                .then((data) => {
                    console.log(data);
                    resolve(data);
                })
                .catch((e) => reject(e));
        });
    }

    getClases(estudios) {
        const sql =
            'SELECT grupo.idGrupo as id, grupo.nombre FROM grupo INNER JOIN estudios ON grupo.idEstudios = estudios.idEstudios  WHERE estudios.idEstudios LIKE ?';
        const searchParams = [estudios];
        const request: Request = new Request(sql, searchParams);

        return new Promise<any[]>((resolve, reject) => {
            this.executeSentence(request)
                .then((data) => resolve(data))
                .catch((e) => reject(e));
        });
    }

    getHoras() {
        const sql =
            'Select * from horasSemana WHERE 1';
        const searchParams = [];
        const request: Request = new Request(sql, searchParams);

        return new Promise<any[]>((resolve, reject) => {
            this.executeSentence(request)
                .then((data) => resolve(data))
                .catch((e) => reject(e));
        });
    }

    getDias() {
        const sql =
            'Select * from diaSemana WHERE 1';
        const searchParams = [];
        const request: Request = new Request(sql, searchParams);

        return new Promise<any[]>((resolve, reject) => {
            this.executeSentence(request)
                .then((data) => resolve(data))
                .catch((e) => reject(e));
        });
    }

    getHorario(claseName) {
        const sql =
            'select diaSemana.nombre as dia, horasSemana.descripcion as hora, materia.nombre as asignaturaCorto, materia.completo as asignaturaLargo ' +
            'from horasSemana, diaClase, materiahoraclase, horaClase, materia, diaSemana, grupo, estudios where ' +
            'grupo.nombre like "' + claseName + '" ' +
            'and diaSemana.idDiaSemana==diaClase.idDiaSemana ' +
            'and diaclase.idGrupo==grupo.idGrupo ' +
            'and horaclase.idDiaClase==diaclase.idDiaClase ' +
            'and horaclase.idHorasSemana==horassemana.idHorasSemana ' +
            'and materiahoraclase.idHoraClase==horaclase.idHoraClase ' +
            'and materiahoraclase.idMateria==materia.idMateria ' +
            'group by horaClase.idHorasSemana, horaClase.idDiaClase, horaClase.idHoraClase';
        const searchParams = [];
        const request: Request = new Request(sql, searchParams);
        console.log(sql);
        return new Promise<any[]>((resolve, reject) => {
            this.executeSentence(request)
                .then((data) => resolve(data))
                .catch((e) => reject(e));
        });
    }

    openDB() {
        return new Promise((resolve, reject) => {
            this.platform.ready()
                .then(() => {
                    this.sqlite
                        .create(this.getConector())
                        .then((db: SQLiteObject) => {
                            this.db = db;
                            resolve('Exito al abrir');
                        })
                        .catch(() => {
                            reject('Fallo al obtener conexión');
                        });
                })
                .catch(() => {
                    reject('Error el dispositivo no esta listo');
                });
        });

    }

    private getConector() {
        return {
            name: 'Horario16e.db',
            location: 'default',
            createFromLocation: 1,
        };
    }
}
