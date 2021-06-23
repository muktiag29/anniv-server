const { Comment, User } = require("./../models")

class CommentController {
  static add(req, res) {
    console.log(req)
    const { email, comment } = req.body

    User.findOne({
      where: { email }
    })
      .then((data) => {
        return Comment.create({
          UserId: data.id,
          comment
        })
          .then((data) => {
            res.status(201).json({ msg: "OK" })
          })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  static showAll(req, res) {
    Comment.findAll({
      include: User,
      order: [["id", "DESC"]]
    })
      .then((data) => {
        res.status(200).json(data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  static showItSelf(req, res) {
    const { email } = req.query

    User.findOne({
      where: { email },
    })
      .then((data) => {
        return Comment.findAll({
          where: { UserId: data.id },
          include: User,
          order: [["id", "DESC"]]
        })
          .then((data) => {
            res.status(200).json(data)
          })
        })
      .catch((err) => {
        console.log(err)
      })
  }
}

module.exports = CommentController