import eslintJS from "@eslint/js";
import { defineConfig } from "eslint/config";
import tseslint from "typescript-eslint";

// defineConfig is a helper function providing type safety of the available values within each configuration object
export default defineConfig(
	eslintJS.configs.recommended, // provides recommended set of rules and configurations for javascript projects.
	// tseslint.configs.recommended, // provides recommended set of rules and configurations for typescript projects.
	tseslint.configs.strict,
	tseslint.configs.stylistic,
);
