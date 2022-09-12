import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import webfontsPlugin from 'vite-plugin-webfonts';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Potato/',
  build: {
    outDir: 'docs',
  },
  plugins: [
    react(),
    webfontsPlugin({
      fonts: [{
        // The `font-family` value used for each variant.
        family: 'Ringbearer Medium',
        // Optionally prepend a local() directive to the `src` list for each
        // variant of this font family.
        local: 'Ringbearer Medium',
        // Variants may specify any CSS rule that is valid in a @font-face
        // block. For idiomatic JavaScript, camel case keys will be converted to
        // kebab case and `font-` will be prefixed to rules as-needed. For
        // example, `featureSettings` will become `font-feature-settings` in
        // emitted CSS.
        variants: [{
          weight: 400,
          src: [
            'src/assets/RINGM___.woff'
          ]
        }]
      }],
      // Optional. Outputs additional logging.
      verbose: true,
      // Optional. If false, the plugin will only inject a <style> tag rather
      // than CSS files.
      emitCss: false,
    })
  ]
})
