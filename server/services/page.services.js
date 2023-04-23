const Page= require("../models/Pages");

// module.exports.getEntryService= async(filters,queries)=>{
//     const result= await Entry.find(filters).sort(queries.sortBy).select(queries.fields).skip(queries.skip).limit(queries.limit);
//     return result;
// }

module.exports.savePageService= async (data)=>{
    const page = await Page.create(data);
    return page;
}