const { savePageService } = require("../services/page.services");


module.exports.savePages = async (req, res) => {
    try {
        const page = await savePageService(req.body);
        res.status(200).json({ 
            success: true,
            message: "Page saved successfully",
            data: page
         });
    } catch (error) {
        res.status(400).json({ 
            success: false,
            message: "Error saving page",
            data: error.message
         });
    }
}