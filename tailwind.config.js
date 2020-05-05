module.exports = {
  theme: {
    extend: {},
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'active'],
    fontSize: ['responsive', 'hover']
  },
  plugins: [],
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      './public/**/*.html',
      './src/**/*.vue'
    ],
    options:  {
      whitelistPatterns: [ 
    /-(leave|enter|appear)(|-(to|from|active))$/, 
    /^(?!(|.*?:)cursor-move).+-move$/,
        /^router-link(|-exact)-active$/
      ],
    }
  }
}
