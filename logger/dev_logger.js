const { createLogger, format, transports, addColors } = require("winston");
const { combine, timestamp, printf } = format;

// Create custom format
// output example 2022-07-13 05:43:02 info: Connected to Mongodb ...
const myFormat = printf(({ level, message, timestamp }) => {
  return `${timestamp} ${level}: ${message}`;
});

// Add custom colors for console log
const myCustomColors = {
  colors: {
    info: "bold italic greenBG black",
    error: "redBG yellow bold italic",
  },
};
addColors(myCustomColors.colors);

// Create logger
const logger = createLogger({
  level: "info",
  format: combine(timestamp({ format: "YYYY-MM-DD hh:mm:ss" }), myFormat),
  transports: [
    new transports.File({ filename: "error.log", level: "error" }),
    new transports.File({ filename: "all_logs.log" }),
    new transports.Console({
      // Custom format for console logs
      format: combine(
        format.colorize(),
        timestamp({ format: "YYYY-MM-DD hh:mm:ss" }),
        myFormat
      ),
    }),
  ],
});

module.exports = logger;
