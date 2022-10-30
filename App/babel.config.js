module.exports = function (api) {
    api.cache(true);
    return {
        presets: [
            'babel-preset-expo',
            ['@babel/preset-env'],
            '@babel/preset-typescript',
            'module:metro-react-native-babel-preset',
            '@babel/preset-react',
            'module:react-native-dotenv',
        ],
        env: {
            test: {
                plugins: ['@babel/plugin-transform-runtime'],
            },
        },
        'sourceMaps': true,
        // 'plugins': [
        //     '@babel/transform-flow-strip-types',
        //     '@babel/proposal-class-properties',
        //     '@babel/proposal-object-rest-spread',
        //     '@babel/transform-runtime',
        //     ['@babel/plugin-proposal-private-methods', { 'loose': true }],
        // ],
    };
};
