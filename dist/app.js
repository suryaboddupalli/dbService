"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostgresService = void 0;
class PostgresService {
    save(Model, document) {
        return Model.create(document);
    }
    findById(Model, id) {
        return Model.findByPk(id);
    }
    find(Model, filter) {
        return Model.findAll(filter);
    }
    findByIdAndUpdate(Model, id, data) {
        return Model.update(data, { where: { id } });
    }
    findByIdAndDelete(Model, id) {
        return Model.destroy({ where: { id } });
    }
}
exports.PostgresService = PostgresService;
