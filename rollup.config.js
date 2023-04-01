import commonjs from "@rollup/plugin-commonjs"
import json from "@rollup/plugin-json"
import nodeResolve from "@rollup/plugin-node-resolve"
import terser from "@rollup/plugin-terser"

export default {
    input: './dist/index.js',
    output: {
        file: "build/index.mjs",
    },
    plugins: [
        commonjs(),
        nodeResolve(),
        terser(),
        json()
    ]
}