module.exports = (router, Users, fs, path)=>{
  router.get('/image', function(req, res, next) {
    fs.readFile('./views/image/sdasd.PNG', (error,data)=>{
        console.log(data);
        res.end(data);
    });
  })
  return router;
}
