const path = require('path');

module.exports = {
    "extends": [
        "tslint:latest",
        "tslint-react"
    ],
    "rulesDirectory": [
        path.join(path.dirname(require.resolve('tslint-eslint-rules')), 'dist/rules'),
        path.join(path.dirname(require.resolve('tslint-microsoft-contrib')))
    ],
    "rules": {
        "arrow-parens": [true, "ban-single-arg-parens"],
        "forin": true,
        "indent": [true, "spaces", 4],
        "interface-name": [false],
        "jsx-alignment": true,
        "jsx-boolean-value": false,
        "jsx-no-multiline-js": false,
        "max-classes-per-file": [false],
        "mocha-avoid-only": true,
        "no-empty": false,
        "no-implicit-dependencies": false,
        "no-reference": false,
        "no-unused-expression": false,
        "no-unused-variable": true,
        "object-curly-spacing": [
            true,
            "never"
        ],
        "object-literal-sort-keys": false,
        "quotemark": [true, "single", "jsx-double"],
        "trailing-comma": [
            true,
            {"multiline": "never"},
            {"singleline": "never"}
        ],
        "ordered-imports": [
            true,
            {
                "grouped-imports": true,
                "import-sources-order": "any",
                "named-imports-order": "any"
            }
        ],
        "align": [
            true,
            "arguments",
            "elements",
            "members",
            "parameters",
            "statements"
        ]
    }
}
