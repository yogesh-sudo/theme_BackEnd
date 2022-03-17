const Themes = require('../models/themes')

async function thememidleware(req, res, next) {
    let theme;
    try {
        theme = await Themes.findById(req.params.id);
        if (theme==null) {
            return res.status(404).json({ message: "Cannot find User" });
        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
     }
     res.theme = theme
     next()
}

module.exports = thememidleware