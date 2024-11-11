import React, { useState, useEffect } from "react";
import ActionList from "./ActionList";
import ImpactSummary from "./ImpactSummary";
import Action from "./Action";
import "./App.css";

const ecoActions = [
  { id: 1, name: "Use a reusable water bottle", co2Reduction: 0.5 },
  { id: 2, name: "Take public transport", co2Reduction: 2.6 },
  { id: 3, name: "Eat a plant-based meal", co2Reduction: 0.8 },
  { id: 4, name: "Use energy-efficient light bulbs", co2Reduction: 0.1 },
  { id: 5, name: "Recycle paper", co2Reduction: 0.2 },
];

function App() {
  const [trackedActions, setTrackedActions] = useState([]);
  const [totalCO2, setTotalCO2] = useState(0);

  useEffect(() => {
    const savedActions =
      JSON.parse(localStorage.getItem("trackedActions")) || [];
    setTrackedActions(savedActions);
    updateTotalCO2(savedActions);
  }, []);

  useEffect(() => {
    localStorage.setItem("trackedActions", JSON.stringify(trackedActions));
    updateTotalCO2(trackedActions);
  }, [trackedActions]);

  const addAction = (action) => {
    const updatedActions = [...trackedActions];
    const existing = updatedActions.find((a) => a.id === action.id);
    if (existing) existing.count += 1;
    else updatedActions.push({ ...action, count: 1 });
    setTrackedActions(updatedActions);
  };

  const removeAction = (id) => {
    setTrackedActions(trackedActions.filter((action) => action.id !== id));
  };

  const clearActions = () => setTrackedActions([]);

  const updateTotalCO2 = (actions) => {
    const total = actions.reduce(
      (acc, action) => acc + action.co2Reduction * action.count,
      0,
    );
    setTotalCO2(total);
  };

  return (
    <div className="app">
      <h1>Eco-Friendly Actions Tracker</h1>
      <ActionList ecoActions={ecoActions} onAddAction={addAction} />
      <ImpactSummary
        trackedActions={trackedActions}
        totalCO2={totalCO2}
        onClearActions={clearActions}
        onRemoveAction={removeAction}
      />
    </div>
  );
}

export default App;
