const express = require("express");
const router = express.Router();

const noticiaController = require("../controller/noticiaController");

router.get("/",(req, res) =>{
 return res.json({message: "OK"});
})
//POST
router.post("/noticias/Cadastrar", noticiaController.NoticiaCreate);
//GET
router.get("/noticias/:id?", noticiaController.NoticiaListar);
//PUT - UPDATE
router.put("/noticias/:id", noticiaController.NoticiaUpdate);
// DELETE
router.delete("/noticias/:id", noticiaController.NoticiaDelete);

module.exports = router;
