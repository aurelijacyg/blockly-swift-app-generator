import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import { CssBaseline, Container } from "@material-ui/core";

import AppTopBar from "../components/AppTopBar";
import Footer from "../components/Footer";

import HomePage from "../pages/HomePage";
import WorkspacePage from "../pages/WorkSpacePage";
import GetStartedPage from "../pages/GetStartedPage";
import TemplatesPage from "../pages/TemplatesPage";

const Routing = () => {
    return (
        <Router>
            <React.Fragment>
                <CssBaseline />
                <Container maxWidth="lg">
                    <AppTopBar />
                    &#160; &#160; &#160;
                    <Switch>
                        <Route path="/workspace">
                            <WorkspacePage />
                        </Route>
                        <Route path="/getstarted">
                            <GetStartedPage />
                        </Route>
                        <Route path="/templates">
                            <TemplatesPage />
                        </Route>
                        <Route path="/">
                            <HomePage />
                        </Route>
                        <Route path="*" component={() => "404 NOT FOUND"} />
                    </Switch>
                </Container>
                &#160; &#160; &#160;
                <Footer />
            </React.Fragment>
        </Router>
    )
};

export default Routing;