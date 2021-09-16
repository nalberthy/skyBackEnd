module.exports = {
  presets: [
    ['@babel/preset-env',
      {
        targets: {
          node: 'current'
        }
      }
    ],
    '@babel/preset-typescript'
  ],
  plugins: [
    ['module-resolver', {
      alias: {
        '@config': './src/config',
        '@routes': './src/routes',
        '@schemas': './src/schemas',
        '@webservices': './src/webservices'
      }
    }]
  ],
  ignore: [
    '**/*.espec.ts'
  ]
}
