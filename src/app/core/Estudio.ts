export class Estudio {
    private _id: number;
    private _name: String;

    constructor(id: number, name: String) {
        this._id = id;
        this._name = name;
    }

    get id(): number {
        return this._id;
    }

    get name(): String {
        return this._name;
    }
}
