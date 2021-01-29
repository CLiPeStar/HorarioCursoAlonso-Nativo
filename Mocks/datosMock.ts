export class DatosMock {

    private objetc = {
        rows: {
            items: [],
            length: 0
        },
        mock: true
    };

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
            'grupo.nombre like "Curso" ' +
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

            estudios.push({
                idEstudios: x, nombre: 'Estudio'
            });
        }
        this.objetc.rows.length = estudios.length;
        this.objetc.rows.items = estudios;
        return this.objetc;
    }

    private getCursos() {
        const cursos = [];

        for (let x = 0; x < 5; x++) {
            const curso = {
                id: x, nombre: 'Curso'
            };
            cursos.push(curso);
        }
        this.objetc.rows.length = cursos.length;
        this.objetc.rows.items = cursos;
        return this.objetc;
    }

    private getHoras() {
        const horas = [{descripcion: '8'}, {descripcion: '9'}, {descripcion: '10'}, {descripcion: '11'}, {descripcion: '12'}, {descripcion: '13'}];


        this.objetc.rows.length = horas.length;
        this.objetc.rows.items = horas;
        return this.objetc;
    }

    private getDias() {
        const dias = [{nombre: 'LUNES'}, {nombre: 'MARTES'}, {nombre: 'MIERCOLES'}, {nombre: 'JUEVES'}, {nombre: 'VIERNES'}];


        this.objetc.rows.length = dias.length;
        this.objetc.rows.items = dias;
        return this.objetc;
    }

    private getHorario() {
        const horario = [
            {dia: 'LUNES', hora: '8', asignaturaCorto: 'Mo', asignaturaLargo: 'MOCK'},
            {dia: 'LUNES', hora: '9', asignaturaCorto: 'Mo', asignaturaLargo: 'MOCK'},
            {dia: 'LUNES', hora: '10', asignaturaCorto: 'Mo', asignaturaLargo: 'MOCK'},
            {dia: 'LUNES', hora: '11', asignaturaCorto: 'Mo', asignaturaLargo: 'MOCK'},
            {dia: 'LUNES', hora: '12', asignaturaCorto: 'Mo', asignaturaLargo: 'MOCK'},
            {dia: 'LUNES', hora: '13', asignaturaCorto: 'Mo', asignaturaLargo: 'MOCK'},
            {dia: 'MARTES', hora: '8', asignaturaCorto: 'Mo', asignaturaLargo: 'MOCK'},
            {dia: 'MARTES', hora: '9', asignaturaCorto: 'Mo', asignaturaLargo: 'MOCK'},
            {dia: 'MARTES', hora: '10', asignaturaCorto: 'Mo', asignaturaLargo: 'MOCK'},
            {dia: 'MARTES', hora: '11', asignaturaCorto: 'Mo', asignaturaLargo: 'MOCK'},
            {dia: 'MARTES', hora: '12', asignaturaCorto: 'Mo', asignaturaLargo: 'MOCK'},
            {dia: 'MARTES', hora: '13', asignaturaCorto: 'Mo', asignaturaLargo: 'MOCK'},
            {dia: 'MIERCOLES', hora: '8', asignaturaCorto: 'Mo', asignaturaLargo: 'MOCK'},
            {dia: 'MIERCOLES', hora: '9', asignaturaCorto: 'Mo', asignaturaLargo: 'MOCK'},
            {dia: 'MIERCOLES', hora: '10', asignaturaCorto: 'Mo', asignaturaLargo: 'MOCK'},
            {dia: 'MIERCOLES', hora: '12', asignaturaCorto: 'Mo', asignaturaLargo: 'MOCK'},
            {dia: 'MIERCOLES', hora: '11', asignaturaCorto: 'Mo', asignaturaLargo: 'MOCK'},
            {dia: 'MIERCOLES', hora: '13', asignaturaCorto: 'Mo', asignaturaLargo: 'MOCK'},
            {dia: 'JUEVES', hora: '8', asignaturaCorto: 'Mo', asignaturaLargo: 'MOCK'},
            {dia: 'JUEVES', hora: '9', asignaturaCorto: 'Mo', asignaturaLargo: 'MOCK'},
            {dia: 'JUEVES', hora: '10', asignaturaCorto: 'Mo', asignaturaLargo: 'MOCK'},
            {dia: 'JUEVES', hora: '11', asignaturaCorto: 'Mo', asignaturaLargo: 'MOCK'},
            {dia: 'JUEVES', hora: '12', asignaturaCorto: 'Mo', asignaturaLargo: 'MOCK'},
            {dia: 'JUEVES', hora: '13', asignaturaCorto: 'Mo', asignaturaLargo: 'MOCK'},
            {dia: 'VIERNES', hora: '8', asignaturaCorto: 'Mo', asignaturaLargo: 'MOCK'},
            {dia: 'VIERNES', hora: '9', asignaturaCorto: 'Mo', asignaturaLargo: 'MOCK'},
            {dia: 'VIERNES', hora: '10', asignaturaCorto: 'Mo', asignaturaLargo: 'MOCK'},
            {dia: 'VIERNES', hora: '11', asignaturaCorto: 'Mo', asignaturaLargo: 'MOCK'},
            {dia: 'VIERNES', hora: '12', asignaturaCorto: 'Mo', asignaturaLargo: 'MOCK'},
            {dia: 'VIERNES', hora: '13', asignaturaCorto: 'Mo', asignaturaLargo: 'MOCK'},

        ];


        this.objetc.rows.length = horario.length;
        this.objetc.rows.items = horario;
        return this.objetc;
    }
}
