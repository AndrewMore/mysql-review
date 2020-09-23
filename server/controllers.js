var dbHelpers = require('../database/dbHelpers.js')
module.exports = {
  getStuff: (req, res) => {
    dbHelpers.get((err, result) => {
      if (err) {
          res.status(404);
          console.error(err);
      } else {
        res.status(200).json(result);

      }
    })
    console.log(req.body)
  },

  postStuff: (req, res) =>  {
    dbHelpers.post(req.body, (err, result) => {
      if (err) {
          res.status(404).end();
          console.error(err);
      } else {
        res.status(200).end();

      }
    })
    console.log(req.body)
    res.send('Successful post')
  }
}