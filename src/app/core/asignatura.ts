export class Asignatura {
    private _nameShort: String;
    private _nameLong: String;

    constructor(nombreShort: String, nameLong: String) {
        this._nameLong = nameLong;
        this._nameShort = nombreShort;
    }

    get nameShort(): String {
        return this._nameShort;
    }

    get nameLong(): String {
        return this._nameLong;
    }
}
