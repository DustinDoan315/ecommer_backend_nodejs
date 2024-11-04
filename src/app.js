// app.js

const express = require("express");
const { default: helmet } = require("helmet");
const morgan = require("morgan");
const compression = require("compression");
const { createClient } = require("@supabase/supabase-js");
const cors = require("cors");

require("dotenv").config();

const app = express();

// Initialize middleware
app.use(cors());
app.use(morgan("dev"));
app.use(helmet());
app.use(compression());

// Initialize Supabase client
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

// Health check route
app.get("/", (req, res) => {
  return res.status(200).json({ message: "OK" });
});

app.get("/rest/v1/projects", async (req, res) => {
  try {
    let { data: projects, error } = await supabase.from("projects").select("*");

    if (error) {
      console.error("Error fetching projects:", error);
      throw error;
    }

    res.status(200).json({
      message: "Projects fetched successfully",
      data: projects,
    });
  } catch (error) {
    console.error("Caught error:", error);
    res.status(500).json({ error: error.message });
  }
});

// Global error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    message: "Internal Server Error",
    error: err.message,
  });
});

module.exports = app;
