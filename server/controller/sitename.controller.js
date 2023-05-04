const SiteName = require('../models/SiteName');

exports.updateAppName = async (req, res) => {
  try {
    const { appName } = req.body;
    const config = await SiteName.findOneAndUpdate({}, { appName }, { new: true });
    if (!config) {
      // If no config exists yet, create one
      const newConfig = new Config({ appName });
      await newConfig.save();
      return res.status(201).json(newConfig);
    }
    return res.status(200).json(config);
  } catch (error) {
    // console.error(error);
    res.status(500).send('Server Error');
  }
};

exports.getAppName = async (req, res) => {
    try {
        const config = await SiteName.findOne();
        if (!config) {
        return res.status(404).json({ msg: 'No config found' });
        }
        return res.status(200).json(config);
    } catch (error) {
        // console.error(error);
        res.status(500).send('Server Error');
    }
    }