const mysql = require('../lib/mysql');

const getNewsByMatchId = async params => {
    const statement = 'select * from news  where matchId = ?';
    const parameters = [params.matchId];
    return await mysql.query(statement, parameters);
}

const getNewsByTourId = async params => {
    const statement = 'select * from news where tourId = ?';
    const parameters = [params.tourId];
    return await mysql.query(statement, parameters);
}

const getNewsBySportId = async params => {
    const statement = 'select * from news where sportId = ?';
    const parameters = [params.sportId];
    return await mysql.query(statement, parameters);
}


const createNewsByMatchId = async params =>{
    const statement = 'insert into news (title, description, matchId, tourId, sportId) ' +
    'select ?, ?, m.id, t.id, t.sportId from matches m inner join tours t on m.tourId = t.id AND m.id = ?'
    const parameters = [params.title, params.description, params.matchId];
    return await mysql.query(statement, parameters);

}

const createNewsByTourId = async params =>{
    const statement = 'insert into news (title, description, matchId, tourId, sportId) ' +
    'select ?, ?, ?, id, sportId from tours where id=?'
    const parameters = [params.title, params.description, null, params.tourId];
    return await mysql.query(statement, parameters);

}

module.exports = {
    getNewsByMatchId: getNewsByMatchId,
    getNewsByTourId: getNewsByTourId,
    getNewsBySportId: getNewsBySportId,
    createNewsByMatchId: createNewsByMatchId,
    createNewsByTourId: createNewsByTourId

}