const Admin = require('../models/Admin');

module.exports.saveAdminService = async (data) => {
    console.log('admin service')
    const admin = await Admin.create(data);
    return admin;
}
