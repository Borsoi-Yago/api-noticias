const Noticia = require("../model/noticiaModel");
module.exports = class noticiaController {
  //CREATE
  static async NoticiaCreate(req, res) {
    let manchete = req.body.manchete;
    let imagem = req.body.imagem;
    let lide = req.body.lide;

    const noticia = {
      manchete: manchete,
      imagem: imagem,
      lide: lide
    }
    await Noticia.create(noticia);
    res.json({ message: "Noticia cadastrada com sucesso!" });
  }
  //READ - LISTAR
    static async NoticiaListar(req, res) {
      const id_noticia = req.params.id;
      if(id_noticia){
    const noticia = await Noticia.findOne({where: {id_noticia: id_noticia}});
 res.json(noticia);
      } else{
    const noticia = await Noticia.findAll();
    res.json(noticia);
      }
  }
   //UPDATE
 static async NoticiaUpdate(req, res){
 const id_noticia = req.params.id;
 let manchete = req.body.manchete;
 let imagem = req.body.imagem;
  let lide = req.body.lide;
 const noticia = {
 manchete: manchete,
 imagem: imagem,
 lide: lide
 };
 await Noticia.update(noticia,{where: {id_noticia:id_noticia}});
 res.json({message: "Noticia atualizada com sucesso!Foram atualizados assequintes informações:", dados: noticia});
 }
   //DELETE
 static async NoticiaDelete(req,res){
 const id_noticia = req.params.id;
 await Noticia.destroy({where:{id_noticia: id_noticia}});
 res.json({message: "Noticia excluída com sucesso!"});
 }
}