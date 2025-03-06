const newman = require("newman");
require("dotenv").config();

newman.run(
  {
    
    collection: `https://api.postman.com/collections/39262502-36f3c8d0-1efa-44f3-8c9d-1cefe875caab?access_key=${process.env.access_key}`,
    //collection: require("./collection/Dmoney Rest API.postman_collection.json"),
  
    reporters: "htmlextra",
    iterationCount: 1,
    reporter: {
      htmlextra: {
        export: "./reports/reports.html",
        title: "Domeny API Testing",
      },
    },
  },
  function (err) {
    if (err) throw err;
    console.log("Collection run completed");
  }
);