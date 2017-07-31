module.exports = {
    "extends": [
        "tslint:latest",
        "tslint-react"
    ],
    "rules": {
        "quotemark": [true, "single", "jsx-double"],
        "jsx-alignment": true,
        "trailing-comma": {
            options: {
                multiline: "never",
                singleline: "never",
            }
        },
        "interface-name": false
    }
}