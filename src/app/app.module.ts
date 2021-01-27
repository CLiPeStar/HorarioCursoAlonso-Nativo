import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy, Platform} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {EstudiosService} from './core/services/cursos/estudios.service';
import {ClasesService} from './core/services/clases/clases.service';
import {HorarioService} from './core/services/horario/horario.service';
import {DatosService} from './core/services/BBDD/datos.service';
import {CopiaService} from './core/services/BBDD/copia.service';
import {SQLite} from '@ionic-native/sqlite/ngx';
import {SqliteDbCopy} from '@ionic-native/sqlite-db-copy/ngx';

@NgModule({
    declarations: [AppComponent],
    entryComponents: [],
    imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
    providers: [
        StatusBar,
        SplashScreen,
        CopiaService,
        EstudiosService, ClasesService, HorarioService, DatosService,
        {provide: RouteReuseStrategy, useClass: IonicRouteStrategy},
        SqliteDbCopy, SQLite
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
