const { User } = require("./../models")
const { generateToken } = require("./../helper/jwt")

class userControlller {
  static login(req, res) {
    const { imageUrl, email, name } = req.body

    User.findOne({
      where: { email }
    })
      .then((data) => {
        if (data) {
          const { id, email, imageUrl, name } = data
          const access_token = generateToken({
            id,
            email,
            imageUrl,
            name,
          })

          res.status(200).json({
            id,
            email,
            access_token
          })
        } else {
          return User.create({
            name,
            email,
            image_url: imageUrl
          })
            .then((data) => {
              const { id, email, imageUrl, name } = data
              const access_token = generateToken({
                id,
                email,
                imageUrl,
                name,
              })

              res.status(200).json({ access_token })
            })
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }
}

module.exports = userControlller