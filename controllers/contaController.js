class AccountController {
    constructor() {
      this.users = [];
    }
  
    createAccount(req, res) {
      const { username, password, email } = req.body;
      if (!username || !password || !email) {
        return res.status(400).send("Nome de usuário, senha e email são obrigatórios.");
      }
      const id = this.users.length + 1;
      const newAccount = { id, username, password, email };
      this.users.push(newAccount);
      res.status(201).json(newAccount);
    }
  
    login(req, res) {
      const { username, password } = req.body;
      const user = this.users.find(
        (u) => u.username === username && u.password === password
      );
      if (!user) {
        return res.status(401).send("Usuário ou senha inválidos.");
      }
      res.json({ message: "Login bem-sucedido!" });
    }
  }
  
  module.exports = AccountController;
  