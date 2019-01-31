import React from "react";

import "./style.css";

export default function WarningBlock({ title }) {
  return (
    <div className="warning-block">
      <h3>{title}</h3>
    </div>
  );
}
