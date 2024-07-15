import axios from "axios";
import History from "../models/historyModel.js";

export const getGeoInfo = async (req, res) => {
  const { ip } = req.body;
  try {
    const response = await axios.get(`https://ipinfo.io/${ip}/geo`);
    const geoInfo = response.data;
    const history = await History.create({ ipAddress: ip, geoInfo });
    res.json({ geoInfo, history });
  } catch (error) {
    res.status(400).json({ message: "Invalid IP address" });
  }
};

export const getHistory = async (req, res) => {
  const histories = await History.findAll();
  res.json(histories);
};

export const deleteHistories = async (req, res) => {
  const { ids } = req.body;
  await History.destroy({ where: { id: ids } });
  res.json({ message: "Histories deleted" });
};
