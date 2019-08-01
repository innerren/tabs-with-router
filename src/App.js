import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Tabs from "./Tabs";

class App extends React.Component {
  state = {
    tabs: [
      { id: "tab-1", title: "Tab 1", content: "Some text 1" },
      { id: "tab-2", title: "Tab 2", content: "Some text 2" },
      { id: "tab-3", title: "Tab 3", content: "Some text 3" },
    ],
  };

  WrappedTabs = () => <Tabs tabs={this.state.tabs} />;

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/tabs" component={this.WrappedTabs} />
        </Switch>
      </div>
    );
  }
}
export default App;
