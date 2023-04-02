import commonjs from "@rollup/plugin-commonjs"
import json from "@rollup/plugin-json"
import nodeResolve from "@rollup/plugin-node-resolve"
import terser from "@rollup/plugin-terser"
import Xonon from "@xonon/rollup-plugin"
import { defineConfig } from "rollup"

export default defineConfig({
    input: './dist/index.js',
    plugins: [
        Xonon({
            extensions: [".xn"]
        }),
        commonjs(),
        nodeResolve(),
        terser(),
        json()
    ]
})
