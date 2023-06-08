const express = require("express");
const router =express.Router();
//Routes used for different request services
const {getContacts,createContact,getContact,updateContact,deleteContact} = require("../controllers/contactController");
router.route("/").get(getContacts).post(createContact).get(getContact);
router.route("/:id").put(updateContact).delete(deleteContact);

module.exports = router;