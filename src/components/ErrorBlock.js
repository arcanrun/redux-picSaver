import React from "react";

import "./Photos/style.css";

export default function ErrorBlock({ title }) {
  return (
    <div className="photos__error">
      <h3>{title}</h3>
    </div>
  );
}
