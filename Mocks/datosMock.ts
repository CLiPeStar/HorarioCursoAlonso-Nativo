export class DatosMock {
    constructor() {
    }

    executeQuery(sql: string) {

        switch (sql) {
            case 'SELECT * FROM estudios WHERE 1':
                return this.getEstudios();

                break;
            case 'SELECT grupo.idGrupo as id, grupo.nombre FROM grupo INNER JOIN estudios ON grupo.idEstudios = estudios.idEstudios  WHERE estudios.idEstudios LIKE ?':
                return this.getCursos();
                break;
            case  'Select * from horasSemana WHERE 1':
                return this.getHoras();

                break;
            case  'Select * from diaSemana WHERE 1':
                return this.getDias();

                break;
            case  'select diaSemana.nombre as dia, horasSemana.descripcion as hora, materia.nombre as asignaturaCorto, materia.completo as asignaturaLargo ' +
            'from horasSemana, diaClase, materiahoraclase, horaClase, materia, diaSemana, grupo, estudios where ' +
            'grupo.nombre like "clase" ' +
            'and diaSemana.idDiaSemana==diaClase.idDiaSemana ' +
            'and diaclase.idGrupo==grupo.idGrupo ' +
            'and horaclase.idDiaClase==diaclase.idDiaClase ' +
            'and horaclase.idHorasSemana==horassemana.idHorasSemana ' +
            'and materiahoraclase.idHoraClase==horaclase.idHoraClase ' +
            'and materiahoraclase.idMateria==materia.idMateria ' +
            'group by horaClase.idHorasSemana, horaClase.idDiaClase, horaClase.idHoraClase':
                return this.getHorario();

                break;
        }
    }

    private getEstudios() {
        const estudios = [];

        for (let x = 0; x < 5; x++) {
            const estudio = {
                idEstudio: x, nombre: 'Estudio'
            };
            estudios.push(estudio);
        }

        return estudios;
    }

    private getCursos() {
        return [];
    }

    private getHoras() {

    }

    private getDias() {

    }

    private getHorario() {

    }
}
