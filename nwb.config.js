module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'RFV',
      externals: {
        react: 'React'
      }
    }
  }
}
