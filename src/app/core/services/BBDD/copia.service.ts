import {SqliteDbCopy} from '@ionic-native/sqlite-db-copy/ngx';
import {Injectable} from '@angular/core';
import {Platform} from '@ionic/angular';

@Injectable({
    providedIn: 'root',
})
export class CopiaService {
    constructor(private sqlDbCopy: SqliteDbCopy, private platform: Platform) {
    }

    copiarBBDD() {
        return new Promise((resolve, reject) => {
            this.platform.ready()
                .then(() => {
                    this.sqlDbCopy
                        .copy('Horario16e.db', 0)
                        .then(() => {
                            alert('BD copiada con exito');
                            resolve('BD copiada con exito');
                        })
                        .catch((error) => {

                            reject('Error al copiar BD');
                        });
                })
                .catch((e) => {
                    alert(e);
                    reject('La plataforma no está lista para copiar');
                });

        });

    }

}
