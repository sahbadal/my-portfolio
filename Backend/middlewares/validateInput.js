import { body, validationResult } from "express-validator";
import xss from "xss";

export const validateForm = [
  body("name")
    .trim()
    .isLength({ min: 2 })
    .withMessage("Name is too short")
    .escape(),
  body("email").isEmail().normalizeEmail().withMessage("Invalid email"),
  body("message")
    .trim()
    .isLength({ min: 5 })
    .withMessage("Message is too short")
    .customSanitizer((value) => xss(value)),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, errors: errors.array() });
    }
    next();
  },
];
