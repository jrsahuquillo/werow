"use strict";var app=require("./app");app.set("port",process.env.PORT||8080);var server=app.listen(app.get("port"),function(){console.log("✅ Server running on http://localhost:".concat(server.address().port))});