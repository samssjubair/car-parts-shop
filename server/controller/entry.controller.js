const { saveEntryService, getEntryService } = require("../services/entry.services");


module.exports.getAllEntries = async (req, res) => {
    try {
        // const entries = await getEntryService();
        let filters= {...req.query};
        const excludeFields= ['sort','limit','page','fields'];
        excludeFields.forEach(field=> delete filters[field]);

        let filtersString= JSON.stringify(filters);
        filtersString=filtersString.replace(/\b(gt|gte|lt|lte)\b/g, match=>`$${match}`)
        filters=JSON.parse(filtersString)

        // console.log(filtersString)
        const queries={};

        if(req.query.page){
            const {page=1,limit=10}= req.query;
            const skip=(page-1)*10;
            queries.skip=skip;
            queries.limit=limit;

        }
        console.log(queries)

        if(req.query.sort){
            const sortBy=req.query.sort.split(',').join(' ');
            queries.sortBy=sortBy
        }

        if(req.query.fields){
            
            const fields=req.query.fields.split(',').join(' ');
            queries.fields=fields
        }
        
        const entries= await getEntryService(filters,queries);
        res.status(200).json({ 
            success: true,
            message: "All entries",
            data: entries
         });
    } catch (error) {
        res.status(400).json({ 
            success: false,
            message: "Error getting entries",
            data: error.message
         });
    }
}

module.exports.saveEntry= async (req, res) => {
    try {
        const entry = await saveEntryService(req.body);
        res.status(200).json({ 
            success: true,
            message: "Entry saved successfully",
            data: entry
         });
    } catch (error) {
        res.status(400).json({ 
            success: false,
            message: "Error saving entry",
            data: error.message
         });
    }
}