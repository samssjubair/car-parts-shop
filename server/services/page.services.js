const Page= require("../models/Pages");

// module.exports.getEntryService= async(filters,queries)=>{
//     const result= await Entry.find(filters).sort(queries.sortBy).select(queries.fields).skip(queries.skip).limit(queries.limit);
//     return result;
// }

module.exports.savePageService= async (data)=>{
    const page = await Page.create(data);
    return page;
}

module.exports.getPageByNameService= async (route)=>{
    if(route){
        const page= await Page.findOne({route: route});
        return page;
    }
    else{
        const pages= await Page.find();
        return pages;
    }
}

module.exports.updatePageByIdService= async (id, data)=>{
    const result= await Page.updateOne({_id: id}, {$set: data},{
        runValidators: true
    });
    return result;
}

module.exports.deletePageByIdService= async (id)=>{
    const result= await Page.deleteOne({_id: id});
    return result;
}