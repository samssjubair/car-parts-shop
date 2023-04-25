const { saveAdminService, getAllAdminsService } = require("../services/admin.services");
// console.log('admin controller')

module.exports.saveAdminController = async (req, res) => {
    try {
        // const { email } = req.body;
        const admin = await saveAdminService(req.body);
        res.status(200).json({
            success: true,
            message: "Admin saved successfully",
            data: admin
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "Error saving admin",
            data: error.message
        })
    }
}

module.exports.getAllAdminsController = async (req, res) => {
    try {
        const admins = await getAllAdminsService();
        res.status(200).json({
            success: true,
            message: "All admins",
            data: admins
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "Error getting admins",
            data: error.message
        })
    }
}