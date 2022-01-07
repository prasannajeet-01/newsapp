import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import axios from 'axios';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
});

const keyss = ['All', 'Automobile', 'Business', 'Entertainment', 'National', 'Politics', 'Science', 'Sports', 'Startups', 'Technology', 'World']

// const URL=process.env.REACT_APP_SERVER_URL;

export default function Sidedrawer(props) {
    const classes = useStyles();
    let history = useHistory();

    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const fetchNews= (pat) => {
        axios.get("/fetch/"+pat).then(()=> history.push('/'+pat));
    }

    const list = (anchor) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <h2> Categories</h2>
            <Divider />
            <List>
                {keyss.map((text, index) => (
                    <div onClick={() => fetchNews(text.toLowerCase())} style={{ textDecoration: "none", color: "black" }} key={text}>
                        <ListItem button key={text}>
                            <ListItemText primary={text} />
                        </ListItem>
                    </div>
                ))}
            </List>
        </div>
    );

    return (
        <div>
            {['left'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <Button onClick={toggleDrawer(anchor, true)}>{props.children}</Button>
                    <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                        {list(anchor)}
                    </Drawer>
                </React.Fragment>
            ))}
        </div>
    );
}

// href={"/fetch/" + text.toLowerCase()}