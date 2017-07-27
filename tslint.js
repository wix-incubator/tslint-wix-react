module.exports = {
    "extends": [
        "tslint-microsoft-contrib"
    ],
    "rules": {
        // Original rule forced export names to match
        // file name and was case-sensitive.
        "export-name": false,
        "function-name": [ true, { 
            "method-regex": "^[a-z][\\w\\d]+$",
            "private-method-regex": "^[a-z][\\w\\d]+$",
            "protected-method-regex": "^[a-z][\\w\\d]+$",
            "static-method-regex": "^[A-Z_\\d]+$",
            // Origibal rule only allowed pascalCase
            // function and variable names.
            // Doesn't work well with stateless components
            "function-regex": "^[A-z][\\w\\d]+$"
        }],
        // We do not use JSDoc
        "missing-jsdoc": false,
        // The original rule only allowed absolute imports
        // which is spwcific to how MS bundles and delivers its artifacts
        "no-relative-imports": false,
        "completed-docs": false,
        // "no-unsafe-any": false
    }
}