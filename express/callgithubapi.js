import express from "express";
import axios from "axios";

const app = express();
const PORT = 3000;

const GITHUB_API_URL = "https://api.github.com/users/sakjanonkk";
const TOKEN = "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";

app.get("", async (req, res) => {
  try {
    // Fetch the GitHub user data
    const response = await axios.get(GITHUB_API_URL, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    });

    const { login, location } = response.data;

    console.log(`GitHub user name is ${login} who lives in ${location}`);

    res.send("GitHub user data fetched successfully. Check the terminal.");
  } catch (error) {
    console.error("Error fetching the GitHub user data:", error.message);
    res.status(500).send("Failed to fetch GitHub user data");
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
