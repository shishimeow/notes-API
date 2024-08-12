import config from "eslint-config-standard";
import js from "@eslint/js";

export default [
    js.configs.recommended,

   {
       rules: {
           "no-unused-vars": "warn",
           "no-undef": "off",
       }
   }
];