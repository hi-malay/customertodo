import React, { useEffect } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import CloseIcon from '@material-ui/icons/Close';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {
    Link,
    withRouter
} from 'react-router-dom';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import "./Drawer.css"
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginRight: drawerWidth,
    },
    title: {
        flexGrow: 1,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-start',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginRight: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginRight: 0,
    },
}));

export default function PersistentDrawerRight() {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [select, setSelect] = React.useState(1);


    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    const changeDrawer = (key) => {
        setMobileOpen(false)
        switch (key) {
            case `1`: setSelect(1)
                break;
            case `2`: setSelect(2)
                break;
            case `3`: setSelect(3)
                break;
            case `4`: setSelect(4)
                break;
            case `5`: setSelect(5)
                break;
            case `6`: setSelect(6)
                break;
            default: setSelect(1)
                break;
        }
    }

    return (
        <div className={classes.root}>
            <CssBaseline />

            <Toolbar>

                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="end"
                    onClick={handleDrawerOpen}
                    className={clsx(open && classes.hide)}
                >
                    <MenuIcon />
                </IconButton>
            </Toolbar>

            <main
                className={clsx(classes.content, {
                    [classes.contentShift]: open,
                })}
            >
                <div className={classes.drawerHeader} />

            </main>
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="right"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </div>
                <Divider />
                <List className='custom-list' >
                    <Link to={`/all-wallet`} className="click-history">
                        <div onClick={() => changeDrawer("1")}>
                            <ListItem button className={(select === 1) ? "active" : ''}>
                                <ListItemIcon> <ArrowRightIcon /></ListItemIcon>
                                <ListItemText primary={"All Wallets"} />
                            </ListItem>
                        </div>

                    </Link>
                    <Link to={`/new-wallet`} className="click-history">
                        <div onClick={() => changeDrawer("2")}>
                            <ListItem button className={(select === 2) ? "active" : ''}>
                                <ListItemIcon> <ArrowRightIcon /></ListItemIcon>
                                <ListItemText primary={"New Wallet"} />
                            </ListItem>
                        </div>
                    </Link>
                    <Link to={`/check-balance`} className="click-history">
                        <div onClick={() => changeDrawer("3")}>
                            <ListItem button className={(select === 3) ? "active" : ''}>
                                <ListItemIcon> <ArrowRightIcon /></ListItemIcon>
                                <ListItemText primary={"Check Balance"} />
                            </ListItem>
                        </div>
                    </Link>
                    <Link to={`/add-funds`} className="click-history">
                        <div onClick={() => changeDrawer("4")}>
                            <ListItem button className={(select === 4) ? "active" : ''}>
                                <ListItemIcon> <ArrowRightIcon /></ListItemIcon>
                                <ListItemText primary={"Add Funds"} />
                            </ListItem>
                        </div>
                    </Link>
                    <Link to={`/spend-funds`} className="click-history">
                        <div onClick={() => changeDrawer("5")}>
                            <ListItem button className={(select === 5) ? "active" : ''}>
                                <ListItemIcon> <ArrowRightIcon /></ListItemIcon>
                                <ListItemText primary={"Spend Funds"} />
                            </ListItem>
                        </div>
                    </Link>
                    <Link to={`/all-trans`} className="click-history">
                        <div onClick={() => changeDrawer("6")}>
                            <ListItem button className={(select === 6) ? "active" : ''}>
                                <ListItemIcon> <ArrowRightIcon /></ListItemIcon>
                                <ListItemText primary={"All Transactions"} />
                            </ListItem>
                        </div>
                    </Link>

                </List>
            </Drawer>
        </div>
    );
}
