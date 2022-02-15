//const asyncHandler = require("express-async-handler");

const getGoals = (req, res) => {
  res.status(200).json({ message: "Goals" });
};

const setGoal = (req, res) => {
  (req, res) => res.status(200).json({ message: "SetGoals" });
};

const updateGoal = (req, res) => {
  (req, res) =>
    res.status(200).json({ message: `Update Goal ${req.params.id}` });
};

const deleteGoal = (req, res) => {
  (req, res) => res.status(200).json({ message: `Delete ${req.params.id}` });
};

export { getGoals, setGoal, updateGoal, deleteGoal };
