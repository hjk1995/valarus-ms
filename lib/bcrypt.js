const bcrypt = require('bcrypt')
const saltRounds = 10

const encryptIt = async (password) => {
    return bcrypt.hashSync(password, saltRounds)
}

const compareIt = async (plainText, hasedText) => {
    return bcrypt.compareSync(plainText, hasedText)
}

module.exports = {
    encryptIt,
    compareIt
}