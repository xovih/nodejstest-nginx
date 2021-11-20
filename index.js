require("dotenv").config()
const express = require("express")
const app = express()

const PORT = process.env.PORT || 4404

app.get("/", (req, res) => {
  return res.status(200).json({
    msg: `Server running at port ${PORT}`
  })
})

app.listen(PORT, (err) => {
  if (err) {
    return console.log(err)
  }

  console.log(`Server running at port ${PORT}`)
})