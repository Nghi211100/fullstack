import express from "express";
import homeController from "../controllers/homController";

let router = express.Router();

let initWebRouter = (app) => {
  router.get("/", homeController.getHomePage);
  router.get("/about", homeController.getAboutpage);
  return app.use("/", router);
};

module.exports = initWebRouter;
