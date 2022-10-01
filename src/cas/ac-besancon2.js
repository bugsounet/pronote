const educonnect = require('./generics/kdecole-educonnect');

module.exports = (url, account, username, password) => educonnect({
    url,
    account,
    username,
    password,

    casUrl: 'cas.eclat-bfc.fr',
    idp: 'EDU'
});
