import eslintJS from "@eslint/js";
import { defineConfig } from "eslint/config";
import tseslint from "typescript-eslint";

// import globals from "globals";

// defineConfig is a helper function providing type safety of the available values within each configuration object
export default defineConfig(
	eslintJS.configs.recommended, // provides recommended set of rules and configurations for javascript projects.
	{
		// @eslint/js rules only
		// learn about possible rules from https://eslint.org/docs/latest/rules
		rules: {
			"array-callback-return": "error",
			// force use of curly brackets on if statements
			curly: "warn",
			// console logs show warning errors
			"no-console": "warn",
			// force space character after start of a comment
			"spaced-comment": [
				"warn",
				"always",
				{
					markers: ["/"],
				},
			],
		},
	},
	// provides recommended set of rules and configurations for typescript projects.
	tseslint.configs.strictTypeChecked, // contains everything in recommendedTypeChecked
	tseslint.configs.stylisticTypeChecked, // contains everything in stylistic, does not contain strictTypeChecked or recommendedTypeChecked
	{
		// required for TypeChecked versions of tseslint.configs
		// it provides eslint with typescript information for typed linting
		languageOptions: {
			parserOptions: {
				projectService: true,
				tsconfigRootDir: import.meta.dirname,
			},
		},
	},
	{
		// typescript-eslint rules
		// must prefix rule with "@typescript-eslint/"
		// learn about possible rules from https://typescript-eslint.io/rules/
		rules: {
			// "@typescript-eslint/": "error",
			//
			"@typescript-eslint/no-unused-vars": "warn",
		},
	},
	{
		plugins: {
			// "@prettier": prettierPlugin,
		},
		rules: {
			// add prettier plugin rules here
		},
	},
	{
		plugins: {
			// react: reactPlugin,
		},
		rules: {
			// add react plugin rules here
		},
	},
);
