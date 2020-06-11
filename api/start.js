const api = require('./api');

api.set('port', process.env.PORT || 8080);
const server = api.listen(api.get('port'), () => {
  console.log(`✅ API server running on http://localhost:${server.address().port}`)
});