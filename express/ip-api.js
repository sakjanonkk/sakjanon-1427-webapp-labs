import express from "express";
import axios from "axios";

const app = express();
const PORT = 8082; // Port to run the server
const API_URL = "https://httpbin.org/ip"; // URL to get the IP address

app.get("/ip", async (req, res) => {
  try {
    //Call the httpbin API to get the IP address
    const response = await axios.get(API_URL);
    const ip = response.data.origin; // Extract IP from the response

    //IP address in JSON format
    res.json({ ip });
  } catch (error) {
    console.error("Error fetching the IP address:", error.message);
    res.status(500).send("Failed to fetch IP address");
  }
});

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
