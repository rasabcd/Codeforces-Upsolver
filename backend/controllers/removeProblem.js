// controllers/taskController.js
import Problem from "../Models/problemModel.js";
import Task from "../Models/taskModel.js";

export const removeProblemFromTask = async (req, res) => {
  const { taskId } = req.params;
  const { problemId } = req.body;

  if (!problemId) {
    return res.status(400).json({ message: "Problem ID is required" });
  }

  try {
    const task = await Task.findByIdAndUpdate(
      taskId,
      { $pull: { problems: problemId } },
      { new: true }
    ).populate("problems"); // <-- important: populate so names/links come back

    if (!task) return res.status(404).json({ message: "Task not found" });

    // ❌ optional: remove this if problems can exist in multiple tasks
    await Problem.findByIdAndDelete(problemId);

    res.status(200).json({
      message: "Problem removed from task and deleted",
      task, // now includes full problem objects, not just ObjectIds
    });
  } catch (error) {
    console.error("Error removing problem:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
