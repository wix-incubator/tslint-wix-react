module.exports = {
    devtool: 'source-map',
    entry: {
        example: './example/hello-world-app/src/index.tsx'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                options: {
                    compilerOptions: {
                        "noEmit": false
                    }
                }
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx']
    },
    output: {
        filename: '[name].bundle.js',
        pathinfo: true
    }
}