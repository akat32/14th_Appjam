module.exports = (router, Users, rndstring, School)=>{
  router.post('/signup', async (req,res)=>{
    var new_user = new Users(req.body);
    new_user.token = rndstring.generate(20);
    var Sresult = await School.findOne({token : req.body.code});
    new_user.school_name = Sresult.name;
    new_user.school_grade = parseInt(new_user.student_number/10000);
    new_user.school_class = parseInt((new_user.student_number/100)%100);
    new_user.school_number = parseInt(new_user.student_number%100);
    var result = await new_user.save();
    res.status(200).json(result.token);
  })
  .post('/signin', async (req,res)=>{
    var result = await Users.findOne(req.body);
    if(!result) return res.status(404).json({message : "User Not Found!"});
    var Uresult = await Users.update({token:result.token}, {$set: {isLogined: true}});
    if(Uresult.ok) result.isLogined = true;
    return res.status(200).json(result);
  })
  .get('/auto/:token', async (req,res)=>{
    var token = req.params.token;
    var result = await Users.findOne({token : token});
    if(!result)
      res.status(404).json({message : "User Not Found!"});
    else{
      var Uresult = await Users.update({token:result.token}, {$set: {isLogined: true}});
      if(Uresult.ok) result.isLogined = true;
      res.status(200).json(result);
    }
  })
  .get('/signout/:token', async (req,res)=>{
    var token = req.params.token;
    var result = await Users.update({token:token}, {$set: {isLogined: false}});
    res.status(200).json({message : "Logout success!"});
  });
  return router;
}
//Sre6qAEIpEKu1lFmmT0y
