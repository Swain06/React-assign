import React from "react";
import Action from "./Action";

function ImpactSummary({
  trackedActions,
  totalCO2,
  onClearActions,
  onRemoveAction,
}) {
  const co2Message = `You've saved the equivalent of ${Math.floor(totalCO2 / 10)} trees planted!`;
  const impactClass =
    totalCO2 > 1 ? "green" : totalCO2 > 0.5 ? "orange" : "red";

  return (
    <div className="impact-summary">
      <h2>Impact Summary</h2>
      <p className={`impact-message ${impactClass}`}>{co2Message}</p>
      <div>Total CO₂ Saved: {totalCO2.toFixed(2)} kg</div>
      {trackedActions.length > 0 ? (
        trackedActions.map((action) => (
          <Action key={action.id} action={action} onRemove={onRemoveAction} />
        ))
      ) : (
        <p>No actions tracked yet.</p>
      )}
      <button onClick={onClearActions}>Clear All</button>
    </div>
  );
}

export default ImpactSummary;
