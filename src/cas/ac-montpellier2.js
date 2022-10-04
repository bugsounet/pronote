const educonnect = require('./generics/kdecole-educonnect');

module.exports = (url, account, username, password) => educonnect({
    url,
    account,
    username,
    password,

    casUrl: 'cas.mon-ent-occitanie.fr',
    idp: 'MONT-EDU_parent_eleve'
});
