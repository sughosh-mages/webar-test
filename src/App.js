import React from "react";
import "./App.css";
import Login from "./Component/login";
import SignUp from "./Component/signup";
import MainContent from "./Component/maincontent";
import EffectPage from "./Component/effectpage";
import ChooseCategoryPage from "./Component/choosecategorypage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ImageVideoModelPage from "./Component/imagevideomodelpage";
import ImageVideoModelToolPage from "./Component/imagevideomodeltoolpage";
import ARPreviewPage from "./Component/arpreviewpage";
import PublishPage from "./Component/publishpage";
import MyEffectPage from "./Component/myeffectpage";
import Effect1SettingPage from"./Component/effect1settingpage";
import Effect1AnalyaticPage from"./Component/effect1analyatics";
import Effect1AnalyticsExportPage from"./Component/effect1analyticsexportpage";
import CommerceTemplatePage from "./Component/commercetemplate";
import SettingPage from "./Component/settingpage";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={MainContent} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/effects" component={EffectPage} />
        <Route exact path="/chooseCatergory" component={ChooseCategoryPage} />        
        <Route exact path="/myEffects" component={MyEffectPage} />
        <Route exact path="/effect1Setting" component={Effect1SettingPage} />
        <Route exact path="/effect1Analytics" component={Effect1AnalyaticPage} />
        <Route exact path="/effect1AnalyticsExport" component={Effect1AnalyticsExportPage} />                
        <Route exact path="/commerceTemplate" component={CommerceTemplatePage} />
        <Route exact path="/ImageVideoModel" component={ImageVideoModelPage} />
        <Route exact path="/ImageVideoModelTool" component={ImageVideoModelToolPage} />
        <Route exact path="/ArPreview" component={ARPreviewPage} />
        <Route exact path="/publish" component={PublishPage} />        
      </Router>
    </div>
  );
}

export default App;
