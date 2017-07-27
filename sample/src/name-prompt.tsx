import * as React from 'react';

export type Props = React.InputHTMLAttributes<HTMLInputElement>;

export interface IState {
    value: string;
}

export class NamePrompt extends React.Component<Props, IState> {

    constructor(props: Props) {
        super(props);

        this.state = {
            value: String(props.value)
        };
    }

    public componentWillReceiveProps({value}: Props): void {
        if (value !== this.state.value) {
            this.setState({value: String(value)});
        }
    }

    public render(): JSX.Element {
        const value: string = this.state.value;
        const {onChange} = this.props;

        return <form>
            <fieldset>
                <label>
                    Introduce yourself:
                    <input type='text' {...this.props}/>
                </label>
            </fieldset>
        </form>;
    }
}
