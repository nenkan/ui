export default {
  "presets": [
    ["@babel/preset-env", { modules: false }],
    "@babel/preset-typescript",
    // Always the production JSX runtime: Babel 8 otherwise emits jsxDEV whenever
    // NODE_ENV isn't "production", which breaks consumers' production builds.
    ["@babel/preset-react", { runtime: "automatic", development: false }]
  ]
}
