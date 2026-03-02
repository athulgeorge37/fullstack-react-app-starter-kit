import eslintJS from "@eslint/js";
import prettierConfig from "eslint-config-prettier";
import jsxA11yPlugin from "eslint-plugin-jsx-a11y";
import prettierPlugin from "eslint-plugin-prettier";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
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
			// curly: "warn",
			curly: ["warn", "all"],
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
			//
			"no-await-in-loop": "error",
			"no-constant-binary-expression": "error",
			"no-promise-executor-return": "error",
			"no-self-compare": "error",
			"no-template-curly-in-string": "error",
			"no-unmodified-loop-condition": "error",
			"require-atomic-updates": "error",
			eqeqeq: ["error", "always"],
			"no-lonely-if": "warn",
			"no-useless-rename": "warn",
			"prefer-const": "error",
			"prefer-template": "warn",
		},
	},
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
	// provides recommended set of rules and configurations for typescript projects.
	tseslint.configs.strictTypeChecked, // contains everything in recommendedTypeChecked
	tseslint.configs.stylisticTypeChecked, // contains everything in stylistic, does not contain strictTypeChecked or recommendedTypeChecked
	{
		// typescript-eslint rules
		// must prefix rule with "@typescript-eslint/"
		// learn about possible rules from https://typescript-eslint.io/rules/
		rules: {
			"@typescript-eslint/no-unused-vars": "warn",
			// "@typescript-eslint/explicit-function-return-type": "error"
			"@typescript-eslint/explicit-member-accessibility": [
				"error",
				{ accessibility: "explicit" },
			],
			"@typescript-eslint/no-explicit-any": "error",
			"@typescript-eslint/consistent-type-imports": [
				"error",
				{ prefer: "type-imports" },
			],
			"@typescript-eslint/consistent-type-exports": "error",
			"@typescript-eslint/no-import-type-side-effects": "error",
			"@typescript-eslint/switch-exhaustiveness-check": "error",
			"@typescript-eslint/no-unnecessary-condition": "error",
			"@typescript-eslint/prefer-nullish-coalescing": "error",
			"@typescript-eslint/promise-function-async": "error",
			"@typescript-eslint/require-array-sort-compare": "error",

			// very strict rules
			"@typescript-eslint/no-unsafe-assignment": "error",
			"@typescript-eslint/strict-boolean-expressions": "error",
			"@typescript-eslint/no-restricted-types": "error",
			// "@typescript-eslint/naming-convention": [...] // enforces PascalCase for types, camelCase for variables
		},
	},
	{
		// React Settings
		settings: {
			react: {
				version: "detect", // auto-detects your installed React version
			},
		},
		plugins: {
			// cannot rename plugin keys, as they will not be picked up by the spreading of recommended rules below
			react: reactPlugin,
			"react-hooks": reactHooksPlugin,
			"jsx-a11y": jsxA11yPlugin,
		},
		rules: {
			// --- eslint-plugin-react ---
			...reactPlugin.configs.recommended.rules,
			"react/react-in-jsx-scope": "off", // not needed in React 17+ (new JSX transform)
			"react/prop-types": "off", // unnecessary with TypeScript
			"react/self-closing-comp": "warn", // <Foo></Foo> → <Foo />
			"react/jsx-no-useless-fragment": "warn", // removes unnecessary <>...</>
			"react/jsx-curly-brace-presence": [
				// removes unnecessary {"string"}, use "string"
				"warn",
				{ props: "never", children: "never" },
			],
			"react/no-array-index-key": "warn", // warns against using index as key prop
			"react/no-danger": "error", // bans dangerouslySetInnerHTML

			// --- eslint-plugin-react-hooks ---
			...reactHooksPlugin.configs.recommended.rules,
			// the spread already sets these, but shown explicitly for clarity:
			"react-hooks/rules-of-hooks": "error", // hooks must follow the Rules of Hooks
			"react-hooks/exhaustive-deps": "warn", // useEffect/useCallback deps must be complete

			// --- eslint-plugin-jsx-a11y ---
			...jsxA11yPlugin.configs.recommended.rules,
		},
	},
	prettierConfig, // disables conflicting rules — must come BEFORE your rules block
	{
		plugins: {
			"@prettier": prettierPlugin,
		},
		rules: {
			"@prettier/prettier": "warn",
		},
	},
);
