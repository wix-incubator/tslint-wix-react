module.exports = {
    devtool: 'source-map',
    entry: {
        sample: './sample/src/index.tsx'
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
        filename: '[name]-app.js',
        pathinfo: true
    }
}