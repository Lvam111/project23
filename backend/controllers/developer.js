const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const DeveloperModel = require("../models/developer");

exports.getOneDeveloper = async (req, res) => {
  const id = req.params.id;
  const developer = await DeveloperModel.findOne({ id });
  console.log(id, developer, "controller 9");
  res.send({ success: true, developer });
};
exports.getAllDevelopers = async (req, res) => {
  const developers = await DeveloperModel.find({}).select("-password");
  console.log(developers, "developers in controler 14");
  res.send({ success: true, developers });
};

exports.addDeveloper = async (req, res) => {
  const developer = req.body;
  const password = bcrypt.hashSync(developer.password, 8);
  console.log(developer, "controller 12");

  const newDeveloper = await DeveloperModel.create({ ...developer, password });
  res.send({ success: true, developer: newDeveloper });
};
exports.updateDeveloper = async (req, res) => {
  const developer = req.body;
  const id = req.params.id;
  console.log(developer, id, "controller 29");
  await DeveloperModel.updateOne({ id: id }, developer);
  const newDeveloper = await DeveloperModel.findOne({ id }).select("-password");
  console.log(newDeveloper, "hereee", id);
  res.send({ success: true, developer: newDeveloper });
};
exports.patchDeveloper = async (req, res) => {
  const id = req.params.id;
  const developerProps = req.body;
  const updated = await DeveloperModel.updateOne(
    { id },
    {
      $set: {
        ...developerProps,
      },
    }
  );
  res.send({ success: true, updated });
};
exports.deleteOneDeveloper = async (req, res) => {
  const id = req.params.id;
  const deletedDev = await DeveloperModel.findOne({ id });
  const deleted = await DeveloperModel.deleteOne({ id });
  res.send({ success: true, developer: deletedDev });
};
