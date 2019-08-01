import React from "react";

const Tab = ({ props, tabs }) => {
  const id = props.match.params.id;

  return (
    <div className="tabContent">{tabs.find(tab => tab.id === id).content}</div>
  );
};
export default Tab;
