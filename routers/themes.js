const express = require('express')
const router = express.Router();
const Themes = require('../models/themes')
const Thememidleware = require('../middlewares/thememiddleware');
const thememidleware = require('../middlewares/thememiddleware');

router.get('/', (req, res) => {
    console.log("theme port");
    res.send("Hello world")
})
router.post('/themepost', async (req, res) => {
    try {
        const { theme: { Image,
            Type,
            Name,
            Youtube,
            Description,
            CreaterName,
            Link } } = req.body
        const theme = new Themes({
            theme: {
                Image,
                Type,
                Name,
                Youtube,
                Description,
                CreaterName,
                Link
            }
        });
        const savetheme = await theme.save();
        res.json(savetheme)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})
// Get All Data
router.get("/fatchtheme", async (req, res) => {
    try {
        const themes = await Themes.find();
        if (themes.length > 0) {
            res.json(themes);
        } else {
            res.send({ message: "No Data Found" })
        }
    } catch (error) {
        res.status(400).json({ message: "Something is Worng" })
    }
})
// Get One
router.get("/:id", Thememidleware, (req, res) => {
    res.json(res.theme)
})
router.delete("/deletetheme/:id",Thememidleware,async (req,res,next)=>{
    const {
        id,
        Image,
        Type,
        Name,
        Youtube,
        Description,
        CreaterName,
        Link }=req.params
        let deletetheme = await Themes.findById({_id:req.params.id});
        if (!deletetheme) {
            return res.status(404).send("Not Found");
        }
        deletetheme = await Themes.findByIdAndDelete({_id:req.params.id})
        res.send({"Success":"theme has been deleted",deletetheme:deletetheme})
        // res.json(deletetheme)

})
// Update By Id
router.put("/:id",function(req,res,next){
    Themes.findByIdAndUpdate({_id:req.params.id},req.body).then(
     function(   Themes
    ){res.send(Themes)})
})
// Upadete One
router.put('/updateTheme/:id',thememidleware, async (req,res,next)=>{
    const {
        id,
        Image,
        Type,
        Name,
        Youtube,
        Description,
        CreaterName,
        Link }=req.params
        const newData = {}
      
        // Find and Upadte It
        let data = await Themes.findById(req.body.id)
        data = await Themes.findByIdAndUpdate(req.body.id,{$set:newData},{new:true})
        res.json({data})
})
module.exports = router
