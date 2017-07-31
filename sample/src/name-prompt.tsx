import * as React from 'react';

export type Props = React.InputHTMLAttributes<HTMLInputElement>;

export interface State {
    value: string;
}

export class NamePrompt extends React.Component<Props, State> {

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

        return (
            <form>
                <fieldset>
                    <label>
                        Introduce yourself:
                        <input
                            {...this.props}
                            type="text"
                            readOnly={true}
                        />
                    </label>
                </fieldset>
            </form>
        );
    }
}
