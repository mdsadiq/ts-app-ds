import typescript from "rollup-plugin-typescript2";
import external from "rollup-plugin-peer-deps-external";
import visualizer from "rollup-plugin-visualizer";
import bundleSize from "rollup-plugin-bundle-size";
import pkg from "./package.json";
import url from "rollup-plugin-url";
import dts from "rollup-plugin-dts";
// eslint-disable-next-line import/no-anonymous-default-export
export default [
  {
    input: "src/components/index.ts",
    output: [
      {
        file: pkg.main,
        format: "cjs",
        exports: "named",
        sourcemap: true,
      },
      {
        file: pkg.module,
        format: "es",
        exports: "named",
        sourcemap: true,
      },
    ],
    plugins: [
      visualizer(),
      bundleSize(),
      external(),
      url(),
      typescript({
        //   rollupCommonJSResolveHack: true, not needed in new updates, https://github.com/ezolenko/rollup-plugin-typescript2/pull/367
        clean: true,
        tsconfigOverride: {
          compilerOptions: {
            declaration: true,
            allowJs: true,
            isolatedModules: true,
            jsx: "react",
          },
        },
      }),
    ],
  },
//   {
//     input: "src/components/index.ts",

//     plugins: [dts()],
//     output: [
//       {
//         file: `dist/index.d.ts`,
//         // file: `dist/types/index.d.js`,
//         format: "es",
//         sourcemap: true,
//       },
//     ],
//   },
];
