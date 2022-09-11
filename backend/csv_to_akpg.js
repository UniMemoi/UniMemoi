const fs = require('fs');
const { parse } = require("csv-parse");
const AnkiExport = require('anki-apkg-export').default;
const apkg = new AnkiExport('test_deck');
const data = [];

fs.createReadStream("./outtest.csv")
  .pipe(parse({ delimiter: ",", from_line: 2 }))
  .on("data", function (row) {
    const front = row[0];
    const back = row[1];
    apkg.addCard(front, back);
    console.log(row);
  })
  .on("error", function (error) {
    console.log(error.message);
  })
  .on("end", function () {
    console.log("finished");
    apkg
      .save()
      .then(zip => {
        fs.writeFileSync('./output.apkg', zip, 'binary');
        console.log(`Package has been generated: output.apkg`);
      })
      .catch(err => console.log(err.stack || err));
  });
