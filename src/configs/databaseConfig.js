const user = 'deal1'
const cluster = 'deal'
const pass = 'deal2';
const db = 'deal';
const URI = `mongodb+srv://${user}:${pass}@${cluster}.etgt0vn.mongodb.net/${db}?retryWrites=true&w=majority`;

module.exports = {
    db,
    URI
}