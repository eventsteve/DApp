class DocController {
  constructor(DocRepo) {
    this.docRepo = DocRepo;
  }

  async getAllMember(req, res, next) {
      try {
          const result = await this.docRepo.getAllMember();
          const parseArray = result.map(item => item.owner);
          return res.send(parseArray);
      }
      catch (error) {
          res.send(500, { message: '500 internal server error' });
          console.log(error);
      }
      res.send(400, 'errors');
  }

  async getAllDoc(req, res, next) {
    try {
      const query = req.query ? req.query : null;
      const result = await this.docRepo.getAllDoc(query);
      return res.send(result);
    }
    catch (error) {
      res.send(500, { message: '500 internal server error' });
      console.log(error);
    }
    res.send(400, 'errors');
  }

  async getDetailDoc(req, res, next) {
    try {
        const result = await this.docRepo.getDocById(req.params.id);
        if (res) return res.send(result);
        return res.send(400, 'errors');
    }
    catch (error) {
        res.send(500, { message: '500 internal server error' });
        console.log(error);
    }
}

  async createNewDoc(req, res, next) {
    if (!req.body) {
      res.send(400, { message: 'Please enter full fields.' });
      return next();
    }
    try {
      const result = await this.docRepo.addNewDoc(req.body);
      if (!result) {
        res.send(400, { message: 'errors' });
      }
      res.send(result);
    } catch (error) {
      res.send(500, { message: '500 internal server error' });
      console.log(error);
    }
  }
}
exports.DocController = DocController;
