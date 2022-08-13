import esbuild from "rollup-plugin-esbuild";
import scss from "rollup-plugin-scss";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import dartSass from "sass";
import rollupTypescript from "rollup-plugin-typescript2";
import { terser } from "rollup-plugin-terser";

export default {
  input: "src/lib/index.ts",
  external: ["react", "react-dom"],
  output: [
    {
      globals: {
        react: "React",
        "react-dom": "reactDom",
      },
      name: "CheeseUI-react",
      file: "dist/lib/cheese.js",
      format: "umd",
      plugins: [terser()],
    },
    {
      name: "CheeseUI-react",
      file: "dist/lib/cheese.esm.js",
      format: "es",
      plugins: [terser()],
    },
  ],
  plugins: [
    scss({ include: /\.scss$/, sass: dartSass }),
    resolve(),
    commonjs(),
    rollupTypescript(),
    esbuild({
      include: /\.[jt]sx?$/,
      minify: process.env.NODE_ENV === "production",
      target: "es2015",
    }),
  ],
};
