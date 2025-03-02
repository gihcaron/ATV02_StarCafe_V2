const express = require("express");
const router = express.Router();
const cafeController = require("../controllers/cafeController");

router.get("/menu", cafeController.listarCafes);
router.post("/order", cafeController.adicionarCafe);
router.get("/order/:id", cafeController.buscarCafePorId);
router.delete("/order/:id", cafeController.removerCafe);


module.exports = router;