module.exports = {
    "extends": [
        "tslint:latest",
        "tslint-react"
    ],
    "rules": {
        "quotemark": [true, "single", "jsx-double"],
        "jsx-alignment": true,
        "trailing-comma": [
            true,
            {"multiline": "never"},
            {"singleline": "never"}
        ],
        "interface-name": [false],
        "jsx-no-multiline-js": false,
        "no-empty": false,
        "object-literal-sort-keys": false,
        "forin": true,
        "arrow-parens": [true, "ban-single-arg-parens"],
        "no-reference": false,
        "max-classes-per-file": [false],
        "jsx-boolean-value": false,
        "no-unused-expression": false
    }
}