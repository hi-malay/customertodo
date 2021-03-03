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
            <div className="bg-grey full-len mt-3" >
                <ContextMain.Provider value={userData}>
                    <div className="max-width max-width-padd mt-4">
                        <div className="col-md-12 mt-5">
                            <props.component value={transData} />
                        </div>
                    </div>
                </ContextMain.Provider>
            </ div>} />
    )

}
