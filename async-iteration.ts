export default async (req, res, next) => {
  try {
    const db = req.context.db;
    const ids = req.query.ids;

    const service1 = new Service1(db);
    const service2 = new Service2(db);
    const service3 = new Service3(db);
    const service4 = new Service4(db);
    const service5 = new Service5(db);
    let result = [];

    for (let id of ids) {
      if (result.length) {
        result = await service1.execute(result, id);
        result = await service2.execute(result, id);
        result = await service3.execute(result, id);
        result = await service4.execute(result, id);
        result = await service5.execute(result, id);
      }
    }

    res.json(result);
  } catch (error) {
    next(error);
  }
};
