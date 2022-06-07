//https://www.youtube.com/watch?v=QQwo4E_B0y8
//https://github.com/auth0/express-openid-connect
//https://auth0.com/blog/create-a-simple-and-secure-node-express-app/#What-You-Will-Build

var fs = require('fs');
var privateKey  = fs.readFileSync('Certs/client-key.pem');
var certificate = fs.readFileSync('Certs/client-cert.pem');
var credentials = {key: privateKey, cert: certificate};
var https = require('https');

const express = require('express');
/*https://expressjs.com/*/
const app = express();
require('dotenv').config();
const { auth } = require('express-openid-connect');

app.use(
  auth({
    authRequired: false,
    auth0Logout: true,
    issuerBaseURL: process.env.ISSUER_BASE_URL,
    baseURL: process.env.BASE_URL,
    clientID: process.env.CLIENT_ID,
    secret: process.env.SECRET,
    idpLogout: true,
  })
);

app.use(express.static('Site'));

var httpsServer = https.createServer(credentials, app);
httpsServer.listen(443, function(){
  console.log('listening at port 443');
});

app.post("/GetLoginStatus", function(req, res)
{
  res.send(req.oidc.isAuthenticated());
});

const port = process.env.PORT || 3000;
app.listen(port, function(){
    console.log('listening at port ' + port);
});