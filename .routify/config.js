module.exports = {
  "pages": "src/pages",
  "sourceDir": "public",
  "routifyDir": ".routify",
  "ignore": "",
  "dynamicImports": true,
  "singleBuild": false,
  "noHashScroll": false,
  "extensions": [
    "svelte",
    "svx",
    "md"
  ],
  "distDir": "dist",
  "plugins": {
    "routify-plugin-frontmatter": {
      "extensions": [
        "md",
        "svx",
        "svelte"
      ]
    }
  },
  "hashScroll": true,
  "started": "2020-07-10T17:56:29.572Z"
}