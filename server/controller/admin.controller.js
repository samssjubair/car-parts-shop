const { saveAdminService, getAllAdminsService, getUserByEmail, deleteAdminService, updateAdminService } = require("../services/admin.services");
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

module.exports.updateAdminController = async (req, res) => {
    try {
        const { id } = req.params;
        const admin = await updateAdminService(id, req.body);
        res.status(200).json({
            success: true,
            message: "Admin updated successfully",
            data: admin
        });
        
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "Error updating admin",
            data: error.message
        })
    }
}

module.exports.deleteAdminController = async (req, res) => {
    try {
        const { id } = req.params;
        const admin = await deleteAdminService(id);
        res.status(200).json({
            success: true,
            message: "Admin deleted successfully",
            data: admin
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: "Error deleting admin",
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

module.exports.loginController = async (req, res) => {
    try {
        const { email, password } = req.body;
        if(!email || !password){
            return res.status(400).json({
                success: false,
                message: "please provide email and password"
            })
        }
        const user= await getUserByEmail(email);

        if(!user){
            return res.status(400).json({
                success: false,
                message: "No user found with this email"
            })
        }
        // console.log(password,user.password)

        const isPasswordValid= password===user.password;
        if(!isPasswordValid){
            return res.status(400).json({
                success: false,
                message: "password is not valid"
            })
        }

        res.status(200).json({
            success: true,
            message: "user signed in successfully",
            user: user
        })

    } catch (error) {
        res.status(400).json({
            success: false,
            message: "could not signin",
            error: error.message
    })
    }
}