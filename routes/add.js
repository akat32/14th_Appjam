module.exports = (router,Users, School)=>{
  router.post('/find', async (req,res)=>{
    var result = await Users.find(req.body).sort({"school_grade" : 1, "school_class" : 1, "school_number" : 1});
    if(!result) return res.status(404).json({message : "404 Not Found"});
    else return res.status(200).json(result);
  })
  .post('/student', async (req,res)=>{
    var result = await Users.findOne({token : req.body.token});
    if(!result) return res.status(404).json({message : "404 Not Found"});
    else return res.status(200).json(result);
  });
  return router;
}
