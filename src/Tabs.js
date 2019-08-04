import React from "react";
import { Link, Route } from "react-router-dom";
import Tab from "./Tab";

const Tabs = ({ tabs }) => {
  const WrappedTab = props => <Tab props={{ ...props }} tabs={tabs} />;

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
        <Route path={`/tabs/:id`} component={WrappedTab} />
      </div>
    </div>
  );
};

export default Tabs;
