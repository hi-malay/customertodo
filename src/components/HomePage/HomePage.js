import { Card, CardContent } from '@material-ui/core';
import React from 'react';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';

const HomePage = () => {
    return (
        <div>
            <div className="row">
                <div className="col-md-4">
                    <Card className="custom-card card-dashboard top-head">
                        <CardContent >
                            <h3 className="head-title"> ToDo</h3>
                        </CardContent>
                    </Card>
                    <Card className="custom-card card-dashboard more-height">
                        <div className="background-grey">
                            <div className="row">
                                <div className="col-md-10">
                                    <h3 className="intitle text-left">HI My NAme is malay</h3>
                                </div>
                                <div className="col-md-2 emoji text-right">
                                    <SentimentVeryDissatisfiedIcon />
                                </div>
                                <div className="col-md-8">
                                    <h3 className="intitle-account text-left">HI My </h3>
                                </div>
                                <div className="col-md-8">
                                    <h3 className="intitle-due text-left mt-2">3 week</h3>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>



            </div>

        </div>
    );
};

export default HomePage;