const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./private/folders.json')
const middleware = jsonServer.defaults({
  static: './build',
})

const PORT = process.env.PORT || 3080;

server.use(middleware)
server.use(router)

server.listen(PORT, () => {
  console.log('Server is running');
});