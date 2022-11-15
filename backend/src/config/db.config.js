
const dotenv = require('dotenv')

dotenv.config();
const dbUser = process.env.DB_USER
const dbPassword = process.env.DB_PASS
const dbID = process.env.DB_URL

module.exports = {
    nuvem: {
        DataBaseURL: `mongodb+srv://${dbUser}:${dbPassword}${dbID}`,
        secret: "password"
    }
};
