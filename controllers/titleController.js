const titleschema = require("../models/title.model");

const addTitle = async (request, response) => {
  try {
    const addNewTitle = new titleschema({
      title: request.body.title,
    });
    const newtitle = await addNewTitle.save();
    response.status(201).send({
      message: "New title added",
      newtitle,
    });
  } catch (error) {
    console.error(error);
    response.status(500).send({
      message: "Error in adding title",
    });
  }
};

module.exports = {
  addTitle,
};
