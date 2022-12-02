/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

export const transformer = {
  getTransformOptions: async () => ({
    transform: {
      experimentalImportSupport: true,
      inlineRequires: true,
    },
  }),
};
export const resolver = {
  sourceExts: [
    '.native',
    '.ios.ts',
    '.native.ts',
    '.ts',
    '.ios.tsx',
    '.native.tsx',
    '.tsx',
    '.ios.js',
    '.native.js',
    '.js',
    '.ios.jsx',
    '.native.jsx',
    '.jsx',
    '.ios.json',
    '.native.json',
    '.json',
  ],
};
export const watchman = {
  additionalExts: [
    '.native',
    '.ios.ts',
    '.native.ts',
    '.ts',
    '.ios.tsx',
    '.native.tsx',
    '.tsx',
    '.ios.js',
    '.native.js',
    '.js',
    '.ios.jsx',
    '.native.jsx',
    '.jsx',
    '.ios.json',
    '.native.json',
    '.json',
  ],
};
