import React from 'react';
import classes from './main.module.css'
import Card from '../card/card'
import { withRouter } from "react-router";
import { useState, useEffect } from 'react';
import axios from 'axios';

// const URL=process.env.REACT_APP_SERVER_URL;

const Main = (props) => {

    const [allNews, setAllNews] = useState([]);

    useEffect(() => {

        const gettingNews = async () => {

            console.log(props);

            var pat = props.location.pathname;

            if (pat === '/') pat = '/all'

            const news = await axios.get("/getnews"+pat).then(resp => resp.data);

            // console.log(news);

            setAllNews(news);

        }

        gettingNews();

    }, [props])

    const dispNews = allNews.map((el, ind) => {

        return <Card title={el.title} description={el.description} imageUrl={el.imageUrl} url={el.url} key={ind} />
    })

    return (
        <div className={classes.Card}>
            {dispNews}
        </div>
    )

}

export default withRouter(Main);