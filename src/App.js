import React from "react";
import { PageBackground } from "./elements/elements";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import TopPageNavigation from "./components/TopPageNavigation";
import Home from "./pages/Home";
import Learning from "./pages/Learning";
import Exam from "./pages/Exam";
import ExamReview from "./pages/ExamReview";
import { path } from "./data/GlobalData";
import Blog from "./pages/Blog";
import SuperAdmin from "./pages/SuperAdmin";
import SignIn from "./pages/SignIn";

function App() {
  return (
    <>
      <BrowserRouter>
        <TopPageNavigation></TopPageNavigation>
        <PageBackground>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path={path.learn} component={Learning} />
            <Route path={path.exam} component={Exam} />
            <Route path={path.exam_reviev} component={ExamReview} />
            <Route path={path.blog} component={Blog} />
            <Route path={path.super_admin} component={SuperAdmin} />
            <Route path={path.sign_in} component={SignIn} />
          </Switch>
        </PageBackground>
      </BrowserRouter>
    </>
  );
}

export default App;
