const News = require('../models/news');

const getNewsById = async params => {
    const { matchId, tourId, sportId } = params;

    if(matchId) {
        return await News.getNewsByMatchId(params);
    }
    else if(tourId){
        return await News.getNewsByTourId(params);
    }
    else if(sportId){
        return await News.getNewsBySportId(params);
    }
    else{
        throw new Error('Invalid Id!!');
    }

}

const createNews = async params => {
    const { title, description, matchId, tourId} = params;

    if (!title || !description) {
        throw new Error('Missing required parameter: title or description');
    }

    if(matchId) {
        return await News.createNewsByMatchId(params);
    }
    else if(tourId){
        return await News.createNewsByTourId(params);
    }
    else{
        throw new Error('Please provide matchId or TourId!!');
    }


}

module.exports = {
    getNewsById: getNewsById,
    createNews: createNews
}