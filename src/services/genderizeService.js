// This file is responsible for calling the external API
import axios from "axios";

const fetchGenderData = async (name) => {
  try {
    // Call Genderize API
    const response = await axios.get(
      `https://api.genderize.io?name=${name}`
    );

    // Return only the data part
    return response.data;
  } catch (error) {
    // Throw error so controller can handle it
    throw new Error("External API Error");
  }
};

export default fetchGenderData;