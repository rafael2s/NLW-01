const express = require("express")
const server = express()

// Configura pasta public
server.use(express.static("public"))

// Utilizando template engine
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
  express: server,
  noCache: true,
})


// Configurar caminhos da aplicação
// Pagina inicial
// req: Requisição
// res: Resposta
server.get("/", (req, res) => {
  return res.render("index.html", { title: "Um titulo"})
})
server.get("/create-point", (req, res) => {
  return res.render("create-point.html")
})
server.get("/search", (req, res) => {
  return res.render("search-results.html")
})
//ligar o servidor
server.listen(3000)