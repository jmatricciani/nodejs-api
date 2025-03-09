const Contact = require("../models/contact-model");
class ContactsController {
  getAll = () => {
    return (req, res, next) => {
      res.status(200).json({
        success: true,
        data: [
          { fname: "Joseph", lname: "Matricciani", phone: "707-672-2154" },
          { fname: "Guy", lname: "Matricciani", phone: "443-553-0669" },
        ],
      });
    };
  };

  create = () => {
    return (req, res, next) => {
      const obj = {fname: req.body.fname, lname: req.body.lname, email: req.body.email};
      res.status(200).json({ success: true, method: "create", contact: obj });
    };
  };
  findById = () => {
    return (req, res, next) => {
      console.log(req.params);

      res.status(200).json({ success: true, method: "findById", contactId: req.params.id });
    };
  };
  update = () => {
    return (req, res, next) => {
      res.status(200).json({ success: true, method: "update" });
    };
  };
  delete = () => {
    return (req, res, next) => {
      res.status(200).json({ success: true, method: "delete" });
    };
  };
}

module.exports = new ContactsController();
