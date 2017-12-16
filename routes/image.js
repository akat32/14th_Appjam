module.exports = (router, Users)=>{
  router.get('/image/:image', function(req, res, next) {
    res.sendFile("/root/meouk/14th_Appja/public/image/public/image/" + req.params.image);
  })
  return router;
}
///root/meouk/14th_Appja/public/image/
