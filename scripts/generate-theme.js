#!/usr/bin/env node
/**
 * Generates Tailwind v4 @theme CSS from src/styles/colors.js
 * Run: node scripts/generate-theme.js
 */

const fs = require("fs");
const path = require("path");
const colors = require("../src/styles/colors.js");

function flattenColors(obj, prefix = "") {
  const result = [];
  for (const [key, value] of Object.entries(obj)) {
    if (key === "DEFAULT") {
      // DEFAULT maps to base name: --color-brand-primary
      const varName = prefix || "brand-primary";
      if (typeof value === "string") {
        result.push(`  --color-${varName}: ${value};`);
      }
    } else {
      const varName = prefix ? `${prefix}-${key}` : key;
      if (
        typeof value === "string" &&
        (value.startsWith("#") ||
          value.startsWith("rgb") ||
          value.startsWith("oklch") ||
          value.startsWith("linear-gradient"))
      ) {
        result.push(`  --color-${varName}: ${value};`);
      } else if (typeof value === "object" && value !== null && !Array.isArray(value)) {
        result.push(...flattenColors(value, varName));
      }
    }
  }
  return result;
}

const themeVars = flattenColors(colors);
const output = `/**
 * Auto-generated from src/styles/colors.js
 * Run: node scripts/generate-theme.js
 */

@theme {
${themeVars.join("\n")}
}
`;

const outPath = path.join(__dirname, "../src/styles/theme.css");
fs.writeFileSync(outPath, output);
console.log("Generated src/styles/theme.css");
