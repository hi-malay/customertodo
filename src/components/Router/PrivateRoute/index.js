import { Card, CardContent } from '@material-ui/core';
import React, { useEffect } from 'react';
import {
    Route,
    Redirect
} from "react-router-dom";
import "../../style.css"
import { ContextMain } from "./../../common/ContextMain"
import axios from "axios"
import { API } from '../../common/constant';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import PersistentDrawerRight from '../../common/Drawer';

export default function PrivateRoute(props) {
    const [userData, setUserData] = React.useState({});
    const [transData, setTransData] = React.useState({});
    const mainApi = () => {
    }

    useEffect(() => {
        mainApi()
    }, [props.location.pathname])

    return (
        <Route render={() =>
            <div className="bg-grey full-len " >
                <ContextMain.Provider value={userData}>
                    <div className="max-width max-width-padd ">
                        {/* <div className="col-md-4 mt-5">
                            <PersistentDrawerRight />
                        </div> */}
                        <div className=" margin-top-head">
                            <props.component value={transData} />
                        </div>
                    </div>
                </ContextMain.Provider>
            </ div>} />
    )

}
