const ShortUniqueId = require('short-unique-id');
const URL = require('../models/url');
const cookieParser = require('cookie-parser');

async function handleGenerateShortUrl(req, res)
    {
        try{
        const body = req.body;        
        if(!body.url)
            {
                return res.status(400).json({error : 'URL is required'})
            }

        const uid = new ShortUniqueId();
        const shortID = uid.rnd();

        await URL.create({
            shortId : shortID,
            redirectUrl : body.url,
            visitHistory : [],
        });
        return res.render("home", {
            id : shortID,
        });
    }

    catch(error){
        console.log(error);
        return req.status(400).json({msg : "Error Caught"})
    }
}

//exception handling try block
async function handleGetOriginalUrl(req,res)
    {
    const shortId = req.params.shortid;
    const entry = await URL.findOneAndUpdate(
        {
            shortId
        }, 
        {
            $push : {
                visitHistory: 
                {
                    timestamp : Date.now(),
                },
            },
        
    },   
);
    return res.redirect(entry.redirectUrl);
}

async function handleGetAnalytics(req,res){
    try {
        let  short = req.query.shortID;
        console.log(typeof short);
        const result = await URL.find({shortId:short});
        return res.json({
            totalClicks : result.visitHistory.length,
            analytics : result.visitHistory,
        });
    } catch (error) {
        console.log(error);
        return res.json({statusCode:500 , "message":"Some went wrong"})
    }
   
}


// async function handleGetAnalytics(req, res) {
//     try {
//         const short = req.query.shortID;
//         const result = await URL.findOne({ shortId: short });

//         if (!result) {
//             return res.status(404).json({ message: 'URL not found' });
//         }

//         return res.json({
//             totalClicks: result.visitHistory.length,
//             analytics: result.visitHistory,
//         });
//     } catch (error) {
//         console.error(error);
//         return res.status(500).json({ message: 'Internal Server Error' });
//     }
// }


    module.exports = {
        handleGenerateShortUrl,
        handleGetOriginalUrl,
        handleGetAnalytics,
    }