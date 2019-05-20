const path = require("path");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = {
  entry: {
    index: "./src/js/index.js"
  },
  output: {
    path: path.resolve(__dirname, "../../../dist"),
    filename: "bundle.js"
  },
  mode: "development",
  devtool: "cheap-eval-source-map",
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: "vue-loader"
      },
      // this will apply to both plain `.js` files
      // AND `<script>` blocks in `.vue` files
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      // this will apply to both plain `.css` files
      // AND `<style>` blocks in `.vue` files
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      },
      // to load fonts
      {
        test: /\.(ttf|eot|woff|woff2|svg)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[path][name].[ext]",
          },
        },
      },
    ]
  },
  plugins: [new VueLoaderPlugin()]
};
