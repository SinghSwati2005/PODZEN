const authMiddleware=require("../middleware/authMiddleware");
const upload=require("../middleware/multer");
const category = require("../models/category");
const Category =require("../models/category");
const User= require("../models/user");
const router =require("express").Router();


//add podcast
router.post("/add-podcast",authMiddleware,upload,async(req, res)=>{
   try {
    const {title, description,category}= req.body;
    const frontImage = req.files["frontImage"][0].path;
    const audioFile = req.files["audioFile"][0].path;
    if(!title||!description||!category||!frontImage||!audioFile){
        return res.status(400).json({message:"all fiels are required"});
    }

    const{user}=req;
    const cat =await Category.findOne({categoryName:category});
    if(!cat){
        return res.status(400).json({message:"No category Found"});
    }
    const catid= cat.id;
    const userid=user._id;
    const newPodcast=new podcast({
        title,
        description,
        audioFile,
        category:catid,
        frontImage,
        user:userid,
    });
    await newPodcast.save();
    await Category.findByIdAndUpdate(catid,{
        $push:{pocasts:newPodcast._id},
    });
    await User.findByIdAndUpdate(userid,{$push:{podcasts:newPodcast._id}});
    res.status(201).json({message:"Podcast added sucessfully"});
    
   } catch (error) {

    return res.status(500).json({message:"Failed to add podcast"});
   }
});

//get all podcast
router.get("/get-podcasts",async(req,res)=>{
    try {
        const podcasts =await podcasts.find()
        .populate("category")
        .sort({createdAt:-1});
        return res.status(200).json({data:podcasts});
    } catch (error) {
        return res.status(500).json({mssage:"Internal server error"});
    }
});

//get all user podacsts
router.get("/get-user-podcasts",authMiddleware,async(req,res)=>{
    try {
       const {user}=req;
       const userid =user._id;
       const data =await User.findById(userid).populate({
        path:"podcasts",
        populate:{path:"category"},
    })
    .select("-password");
    if(data&&data.podcasts){
        data.podcasts.sort(
            (a,b)=>new Date(b.createdAt)-new Date(a.createdAt));
    }
        return res.status(200).json({data:podcasts});
    } catch (error) {
        return res.status(500).json({mssage:"Internal server error"});
    }
});

//get podcastby id
router.get("/get-podcast/:id",async(req,res)=>{
    try {
       const {id}=req.params;
       const podcasts  =await podcasts.findById(id).populate("category");
       return res.status(200).json({data:podcasts});
    
       
    } catch (error) {
        return res.status(500).json({message:"Internal server error"});
    }
});

//get podacst by categories
router.get("/category/:cat",async(req,res)=>{
    try {
       const {cat}=req.params;
       const categories  =await Category.find({categoryName:cat}).populate({
        path:"podcasts",
        populate:{path:"category"},
       });
       let podcasts=[];
       categories.forEach((category)=>{
        podcasts=[...podcasts, ...category.podcasts];
       });
       return res.status(200).json({data:podcasts});
    
       
    } catch (error) {
        return res.status(500).json({message:"Internal server error"});
    }
});

module.exports = router;