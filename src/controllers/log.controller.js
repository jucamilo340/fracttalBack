import Log from "../models/log.model.js";

export const getLogs = async (req, res) => {
  try {
    const log = await Log.find();
    res.json(log);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createLog = async (req, res) => {
  try {
    const { action, ip, date } = req.body;
    res.json(newLog);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};