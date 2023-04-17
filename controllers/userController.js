class UserController {
    constructor() {
      this.users = [];
    }
  
    getAllUsers(req, res) {
      res.json(this.users);
    }
  
    getUserById(req, res) {
      const user = this.users.find((u) => u.id === parseInt(req.params.id));
      if (!user) {
        return res.status(404).send("Usuário não encontrado.");
      }
      res.json(user);
    }
  
    createUser(req, res) {
      const { name, email } = req.body;
      if (!name || !email) {
        return res.status(400).send("Nome e email do usuário são obrigatórios.");
      }
      const id = this.users.length + 1;
      const newUser = { id, name, email };
      this.users.push(newUser);
      res.status(201).json(newUser);
    }
  
    updateUserById(req, res) {
      const { name, email } = req.body;
      const user = this.users.find((u) => u.id === parseInt(req.params.id));
      if (!user) {
        return res.status(404).send("Usuário não encontrado.");
      }
      user.name = name;
      user.email = email;
      res.json(user);
    }
  
    deleteUserById(req, res) {
      const userIndex = this.users.findIndex((u) => u.id === parseInt(req.params.id));
      if (userIndex === -1) {
        return res.status(404).send("Usuário não encontrado.");
      }
      this.users.splice(userIndex, 1);
      res.sendStatus(204);
    }
  }
  
  module.exports = UserController;
  