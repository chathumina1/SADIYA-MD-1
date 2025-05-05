const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "SADIYA-MD=rdcGBJ4S#r4DtKiH4F3ieamkS-CoMi9l3yd0wOwUM69SZX1YZGck", //Put Session-id Here
GITHUB_USER_NAME: process.env.GITHUB_USER_NAME || "chathumina1", //Put Your Gitub Username
GITHUB_AUTH_TOKEN: process.env.GITHUB_AUTH_TOKEN || "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", //Put Your Github Auth Token
DATABASE_REPO_NAME: process.env.DATABASE_REPO_NAME || "SADIYA-MD-DATABASE", //Bot Database Repo Name
SESSION_NAME: process.env.SESSION_NAME || "session"
};
