

const login = (req, res) => {
    console.log('user login route was called.', req.body)
    return res.json({ success: "user has logged in!" })
}

module.exports = { login } 