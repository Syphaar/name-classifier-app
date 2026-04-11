// This file controls what happens when the endpoint is hit
import fetchGenderData from "../services/genderizeService.js";
import processData from "../utils/processData.js";

export const classifyName = async (req, res) => {
  try {
    // Get name from query: /api/classify?name=John
    const { name } = req.query;

    // Call external API service
    const rawData = await fetchGenderData(name);

    // Edge case: if API returns no useful data
    if (!rawData.gender || rawData.count === 0) {
      return res.status(422).json({
        status: "error",
        message: "No prediction available for the provided name",
      });
    }

    // Process and transform the data
    const processedData = processData(rawData);

    // Send final success response
    return res.status(200).json({
      status: "success",
      data: processedData,
    });
  } catch (error) {
    // Handle server or API errors
    return res.status(500).json({
      status: "error",
      message: "Something went wrong",
    });
  }
};
