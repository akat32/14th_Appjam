module.exports = (router, School, rndstring)=>{
  router.post('/new', async (req,res)=>{
    var new_school = new School(req.body);
    new_school.token = rndstring.generate(6);
    var result = await new_school.save();
    res.status(200).json(new_school);
  })
  .post('/findone', async (req,res)=>{
    var result = await School.findOne(req.body);
    res.status(200).json(result.token);
  })
  .post('/findall', async (req,res)=>{
    var result = await School.find();
    res.status(200).json(result);
  });
  return router;
}
