const db = require("../data/db-config");

module.exports = {
  findResource,
};

function findResource() {
  return db("resource");
}
