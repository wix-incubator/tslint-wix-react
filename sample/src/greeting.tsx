import * as React from 'react';

export interface IProps {
    text: string;
}

export function Greeting({text}: IProps): JSX.Element {
    return <h1>{`Hello, ${text}!`}</h1>;
}
