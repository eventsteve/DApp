class DocRepository {

    constructor(connect) {
        this._connect = connect;
        this._table = 'documents';
    }

    async getAllMember() {
        return await this._connect.distinct('owner').column('owner').from(this._table);
    }

    async getAllDoc(query = null) {
        if (query) return await this._connect.select().from(this._table).where(query);
        return await this._connect.select().from(this._table);
    }

    async getDocById(numDoc) {
        return await this._connect.select().from(this._table).where({ num_doc: numDoc }).first();
    }

    async addNewDoc(objData) {
        return await this._connect(this._table).insert(objData);
    }

}
exports.DocRepository = DocRepository;
