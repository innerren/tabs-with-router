import React from "react";
import { Link, Route } from "react-router-dom";
import Tab from "./Tab";

class Tabs extends React.Component {
  WrappedTab = props => <Tab props={{ ...props }} tabs={this.props.tabs} />;

  render() {
    const tabs = this.props.tabs;
    return (
      <div>
        <nav>
          {tabs.map(tab => {
            return (
              <Link key={tab.id} className="button" to={`/Tabs/${tab.id}`}>
                {tab.title}
              </Link>
            );
          })}
        </nav>
        <div>
          <Route path="/tabs/:id" component={this.WrappedTab} />
        </div>
      </div>
    );
  }
}
export default Tabs;
