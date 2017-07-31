import * as React from 'react';

export interface Props {
    text: string;
}

export function Greeting({text}: Props): JSX.Element {
    return <h1>{`Hello, ${text}!`}</h1>;
}
