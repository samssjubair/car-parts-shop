const Entry= require("../models/Entry");

module.exports.getEntryService= async(filters,queries)=>{
    const result= await Entry.find(filters).sort(queries.sortBy).select(queries.fields).skip(queries.skip).limit(queries.limit);
    return result;
}

module.exports.saveEntryService= async (data)=>{
    const entry = await Entry.create(data);
    return entry;
}