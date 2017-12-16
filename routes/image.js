module.exports = (router, Users, fs)=>{
  router.get('/image/:image', function(req, res, next) {
    res.sendFile(req.params.image + ".PNG");
  })
  return router;
}
///root/meouk/14th_Appja/public/image/
