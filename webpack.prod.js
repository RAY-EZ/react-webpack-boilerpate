const { merge } = require('webpack-merge');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin')
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'production',
  module: {
    rules : [
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        type: "asset/resource",
        generator: {
          filename: '[name].[hash][ext]',
          publicPath: '/medias/',
          outputPath: './medias/'
        }
      },
    ]
  },
  optimization: {
    minimizer: [
      new ImageMinimizerPlugin({
        minimizer: {
          // filename: () => "optimized-[name][ext]",
          implementation: ImageMinimizerPlugin.squooshMinify,
          options: {
            encodeOptions: {
              mozjpeg: {

                quality: 75,
              },
              webp: {
                lossless: 1,
              },
              avif: {
                cqLevel: 0,
              },
            },
          },
        },
      }),
    ],
  }
})