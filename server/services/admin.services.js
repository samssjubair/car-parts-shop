const Admin = require('../models/Admin');

module.exports.saveAdminService = async (data) => {
    // console.log('admin service')
    const admin = await Admin.create(data);
    return admin;
}

module.exports.getAllAdminsService = async () => {
    const admins = await Admin.find();
    return admins;
}

module.exports.getUserByEmail = async (email) => {
    const user = await Admin.findOne({ email });
    return user;
}

