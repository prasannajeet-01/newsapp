const router = require('express').Router();
const mongoose = require('mongoose');
const axios = require('axios');

let News = require('../models/news.model');

router.route('/fetch/:genre').get(async (req, res) => {
    const genre = req.params.genre;
    console.log(genre);

    const fetchedNews = await axios.get('https://inshorts-news.vercel.app/' + genre).then(resp => resp.data.data);

    fetchedNews.forEach(async (el) => {

        await News.findOne({ title: el.title }).then(async (resp) => {

            if (!resp) {
                let newNews = new News({
                    title: el.title,
                    description: el.decription,
                    url: el["read-more"],
                    imageUrl: el.images,
                    genre: genre
                })

                await newNews.save()
            }

        })
        
    })

    return res.json({"message":"success"});
})

router.route('/getnews/:genre').get(async (req, res) => {

    var genre = req.params.genre;

    // console.log(genre)
    let news;

    if (genre==='all') {
        news = await News.find().then(news => news)
    }
    else {
        news = await News.find({ genre: genre.toString() }).then(news => news)
    }
    return res.json(news);

})

module.exports = router;