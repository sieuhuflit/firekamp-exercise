module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          '@api': './src/api',
          '@assets': './src/assets',
          '@components': './src/components',
          '@constants': './src/constants',
          '@screens': './src/screens',
          '@utils': './src/utils',
          '@models': './src/models',
          '@recoil': './src/recoil',
        },
      },
    ],
  ],
};
