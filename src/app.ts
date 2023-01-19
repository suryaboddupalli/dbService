export abstract class PostgresService {
	protected save(Model: any, document: any) {
		return Model.create(document);
	}

	protected findById(Model: any, id: number) {
		return Model.findByPk(id);
	}

	protected find(Model: any, filter: any) {
		return Model.findAll(filter);
	}

	protected findByIdAndUpdate(Model: any, id: number, data: any) {
		return Model.update(data, { where: { id } });
	}

	protected findByIdAndDelete(Model: any, id: number) {
		return Model.destroy({ where: { id } });
	}
}
