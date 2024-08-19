const CreatorModel = require("../models/creatorModel");

const searchCreatorController = async (req, res) => {
  try {
    const { q, language, education, specialization } = req.query;

    const query = {};

    if (q) {
      const regex = new RegExp(q, "i");
      query.$or = [
        { name: regex },
        { email: regex },
        { specializations: regex },
      ];
    }

    if (language) {
      // query.languages = { $in: [language] };
      query.languages = { $elemMatch: { $regex: new RegExp(language, "i") } };
    }

    if (education) {
      // query.education = education;
      if (education) {
        query.education = { $regex: new RegExp(education, "i") };
      }
    }

    if (specialization) {
      // query.specializations = { $in: [specialization] };
      query.specializations = {
        $elemMatch: { $regex: new RegExp(specialization, "i") },
      };
    }

    const creators = await CreatorModel.find(query);

    res.json({
      message: "Search Creators List",
      success: true,
      error: false,
      creators,
    });
  } catch (error) {
    res.json({
      message: error.message || error,
      success: false,
      error: true,
    });
  }
};

module.exports = searchCreatorController;
