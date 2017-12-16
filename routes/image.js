module.exports = (router, Users, fs, path)=>{
  router.get('/image/:image', function(req, res, next) {
    fs.readFile('./image/iOPunZW5rgor.PNG', (error,data)=>{
        console.log(data);
        res.end(data);
    });
  })
  return router;
}
