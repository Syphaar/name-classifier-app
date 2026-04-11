// This file processes and transforms the API response
const processData = (data) => {
  const { name, gender, probability, count } = data;

  // Rename count → sample_size
  const sample_size = count;

  // Check confidence condition
  const is_confident =
    probability >= 0.7 && sample_size >= 100;

  // Generate current UTC timestamp (ISO format)
  const processed_at = new Date().toISOString();

  // Return structured data
  return {
    name,
    gender,
    probability,
    sample_size,
    is_confident,
    processed_at,
  };
};

export default processData;