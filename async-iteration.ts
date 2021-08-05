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
      const ser1 = await service1.getBy(id);
      result.push(ser1);

      const ser2 = await service2.findById(id);
      result.push(ser2);

      const ser3 = await service3.execute(id);
      result.push(ser3);

      const ser4 = await service4.getData(id);
      result.push(ser4);

      const ser5 = await service5.getById(id);
      result.push(ser5);
    }

    res.json(result);
  } catch (error) {
    next(error);
  }
};
