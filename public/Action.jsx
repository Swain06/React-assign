import React from "react";

function Action({ action, onRemove }) {
  return (
    <div className="tracked-action">
      <span>
        {action.name} - {action.count} times -{" "}
        {(action.co2Reduction * action.count).toFixed(2)} kg CO₂
      </span>
      <button onClick={() => onRemove(action.id)}>Delete</button>
    </div>
  );
}

export default Action;
