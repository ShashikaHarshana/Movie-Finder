const express = require("express");
const app = express();
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
var cors = require("cors");
require("dotenv").config();
app.use(cors());

//Swagger configs
const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: "Movie API",
      description: "Movie details information",
      servers: ["http://localhost:3000"],
    },
  },
  apis: ["index.js", "./routes/routes.js"],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use(express.json());

//Routes
app.use("/", require("./routes/routes"));

app.listen(process.env.APP_PORT, () => {
  console.log("Server is running on ", process.env.APP_PORT);
});
