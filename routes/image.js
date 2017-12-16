module.exports = (router, Users, fs, path)=>{
  router.get('/image/:image', function(req, res, next) {
    fs.readFile('./image/' + req.params.image + '.PNG', (error,data)=>{
        res.end(data);
    });
  })
  return router;
}
