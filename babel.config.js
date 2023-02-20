const isDEV = process.env.NODE_ENV === 'development'

module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        corejs: 3,
        useBuiltIns: 'usage'
      }
    ],
    ['@babel/preset-react'],
    ['@babel/preset-typescript']
  ],
  plugins: [
    ['@babel/plugin-transform-runtime', { corejs: 3 }],
    isDEV && require.resolve('react-refresh/babel')
  ].filter(Boolean)
}
