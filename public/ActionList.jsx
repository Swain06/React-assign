import React from "react";

function ActionList({ ecoActions, onAddAction }) {
  return (
    <div className="action-list">
      <h2>Eco-Friendly Actions</h2>
      {ecoActions.map((action) => (
        <div key={action.id} className="action-item">
          <span>
            {action.name} - {action.co2Reduction} kg CO₂
          </span>
          <button onClick={() => onAddAction(action)}>Add</button>
        </div>
      ))}
    </div>
  );
}

export default ActionList;
