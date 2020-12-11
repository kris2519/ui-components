module.exports = {
  plugins: [
    require('postcss-import')(),
    require('postcss-preset-env')({
      stage: 1,
      features: {
        'nesting-rules': true
      },
      importFrom: 'src/styles/media.css'
    }),
    require('postcss-functions')({
      functions: {
        rem(val) {
          return `${val / 16}rem`;
        },
        mediaMax(val) {
          return `max-width:${val / 16}rem`;
        },
        lh(lh, fsz) {
          return lh / fsz;
        },
        ls(val) {
          return `${val / 1000}rem`;
        },
        column(val) {
          return `${100 / val}%`;
        },
        percentage(i, e) {
          return `${(e * 100) / i}%`;
        }
      }
    }),
    require('cssnano')()
  ]
};
