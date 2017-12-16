module.exports = (router, Users)=>{
  router.get('/image/:image', function(req, res, next) {
    res.sendFile("/root/meouk/14th_Appjam/public/image/"+req.params.image+".png");
  })
  return router;
}
