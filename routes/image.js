module.exports = (router, Users, fs)=>{
  router.get('/image/:image', function(req, res, next) {
    fs.readFile("./public/image/" + req.params.image + ".png", (error, data)=>{
      res.end(data);
    });
  })
  return router;
}
///root/meouk/14th_Appja/public/image/
