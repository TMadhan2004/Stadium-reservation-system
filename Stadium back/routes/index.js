const express = require('express');
const Model = require('../model/sign');
const matchmodel = require('../model/match');

const router = express.Router();

 router.post('/matches',async(req,res) =>{
      const data = new matchmodel({
            MatchName: req.body.MatchName,
            Time: req.body.Time,
            StadiumName: req.body.StadiumName,
            Ticketsavailable: req.body.Ticketsavailable,
      });

      try{
         const dataToSave = await data.save();
         res.status(201).json(dataToSave);
      }
      catch(error){
         res.status(400).json({message: error.messge})
      }
});

router.post('/sign',async(req,res) =>{
      const data = new Model({
            Username: req.body.Username,
            Email: req.body.Email,
            Age: req.body.Age,
            Phonenumber: req.body.Phonenumber,
            Password: req.body.Password,
      });

      try{
         const dataToSave = await data.save();
         res.status(201).json(dataToSave);
      }
      catch(error){
         res.status(400).json({message: error.messge})
      }
});

router.get('/sign',async(req,res)=> {
      try{
            const data = await Model.find();
            res.json(data);
      }
      catch(error)
      {
            res.status(500).json({message: error.message});
      }
});

router.get('/matches',async(req,res)=> {
      try{
            const data = await matchmodel.find();
            res.json(data);
      }
      catch(error)
      {
            res.status(500).json({message: error.message});
      }
});

router.put('/matches/:id',async(req,res)=> {
      try{

            const result = await matchmodel.findByIdAndUpdate(req.params.id,req.body,{new:true,});
            res.json(result);
      }
      catch(error)
      {
            res.status(500).json({message: error.message});
      }
});

router.delete('/matches/:id',async(req,res)=> {
      try{

            const result = await matchmodel.findByIdAndDelete(req.params.id);
            res.send('Data successfully deleted');
      }
      catch(error)
      {
            res.status(500).json({message: error.message});
      }
});



/*router.post('/sign',async(req,res) =>{
      res.send('post api this is shit r')
})*/
module.exports = router;