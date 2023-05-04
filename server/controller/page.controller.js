const { savePageService, getPageByNameService, updatePageByIdService } = require("../services/page.services");


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

module.exports.getPage = async (req, res) => {
    try {
        const {route}=req.query;
        // console.log(route)
        const page= await getPageByNameService(route);
        res.status(200).json({
            success: true,
            message: "Page found",
            data: page
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "could not find page",
            error: error.message
        })
    }
}

module.exports.updatePageById= async (req, res) => {
    try {
        const { id } = req.params;
        const page = await updatePageByIdService(id, req.body);
        res.status(200).json({
            success: true,
            message: "Page updated successfully",
            data: page
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "Error updating page",
            error: error.message
        })
    }
}