import WebFont from 'webfontloader'
export { default as darkTheme } from './dark'
export { default as lightTheme } from './light'

WebFont.load({
  google: {
    families: ['Kanit:400,500,900', 'sans-serif']
  }
})
