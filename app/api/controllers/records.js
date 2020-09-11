const recModel = require('../models/records');
const cron = require("node-cron");
module.exports = {

getAll: function(req, res, next) {
  let recList = [];
recModel.find({}, function(err, recs){
   if (err){
    next(err);
   } else{
    for (let rec of recs) {
     recList.push({ tskname: rec.taskname, taskdescription: rec.taskdescription, creator:rec.creator, duration:rec.duration,createdAt:rec.createdAt});

    }
    res.json({status:"success", message: "Record list found!!!", data:{recs: recList}});

   }
});
 },
create: function(req, res, next) {
  recModel.create({ taskname: req.body.taskname, taskdescription: req.body.taskdescription, creator:req.body.creator, duration:req.body.duration,createdAt:req.body.createdAt}, function (err, result) {
      if (err)
       next(err);
      else
      res.json({status: "success", message: "Record added successfully!!!", data: null});

    });
    cron.schedule("* "+req.body.duration+" * * * *", function() {
    recModel.remove({taskname:req.body.taskname,creator:req.body.creator},(err,res1)=>{
      if(err)
      next(err);
      else {
        res1.json({ItDeleted:req.body.taskname});
      }
    });
  });

 },
}
