import * as React from 'react';
import {Greeting} from './greeting';
import {NamePrompt} from './name-prompt';

export interface State {
    name: string;
}

export class App extends React.Component<{}, State> {
    constructor() {
        super();
        this.state = {
            name: 'world'
        };
    }

    public render(): JSX.Element {
        const {name} = this.state;

        return (
            <div>
                <NamePrompt value={name} onChange={this.handleChange} />
                <Greeting text={name} />
            </div>
        );
    }

    private handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        this.setState({name: e.target.value});
    }
}
