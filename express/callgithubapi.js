import express from "express";
import axios from "axios";

const app = express();
const PORT = 3000;

const GITHUB_API_URL = "https://api.github.com/user";

const TOKEN = "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";

// Define the route
app.get("/github-user", async (req, res) => {
  try {
    // Fetch the GitHub user data
    const response = await axios.get(GITHUB_API_URL, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    });

    // Extracting the name and location from the API response
    const { login, location } = response.data;

    // Print the name and location to the terminal
    console.log(`GitHub user name is ${login} who lives in ${location}`);

    // Optionally send a response if you want to acknowledge in the browser
    res.send("GitHub user data fetched successfully. Check the terminal.");
    res.send("");
  } catch (error) {
    console.error("Error fetching the GitHub user data:", error.message);
    res.status(500).send("Failed to fetch GitHub user data");
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
