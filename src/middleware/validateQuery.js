// This middleware validates the query parameter before hitting controller
const validateQuery = (req, res, next) => {
  const { name } = req.query;

  // If name is missing or empty
  if (!name || name.trim() === "") {
    return res.status(400).json({
      status: "error",
      message: "Name is required",
    });
  }

  // Check if name contains only letters (no numbers or symbols)
  const isValidName = /^[a-zA-Z]+$/.test(name);

  if (!isValidName) {
    return res.status(422).json({
      status: "error",
      message: "Name must be a string",
    });
  }

  // If everything is valid → move to next step
  next();
};

export default validateQuery;