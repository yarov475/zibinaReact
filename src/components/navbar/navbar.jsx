import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {NavLink} from "react-router-dom";
import s from "./bavbar.module.css"

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

export default function ButtonAppBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar color="transparent" position="static">
                <Toolbar>
                    <IconButton edge="start" className={s.nav} color="transparent" aria-label="menu">
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        <nav className={s.nav}>
                            <div><NavLink to='/home' activeClassName={s.active}> О художнике </NavLink></div>
                            < div><NavLink to='gallery' activeClassName={s.active}>О картинах</NavLink></div>
                            <div><NavLink to='/contacts' activeClassName={s.active}> О контактах</NavLink></div>
                        </nav>

                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}
