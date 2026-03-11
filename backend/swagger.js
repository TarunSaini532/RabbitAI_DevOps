import swaggerJsdoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Sales Insight Automator API",
      version: "1.0.0",
      description: "API for uploading sales data and generating AI summaries",
    },
    servers: [
      {
        url: "https://your-render-service.onrender.com"|| "http://localhost:5000",
      },
    ],
  },
  apis: ["./routes/*.js", "./controllers/*.js"],
};

const swaggerSpec = swaggerJsdoc(options);

export default swaggerSpec;

