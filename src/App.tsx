import React, { Component } from 'react';

interface AppState {
  pressedKey: string | null;
}

export class App extends Component<{}, AppState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      pressedKey: null,
    };
  }

  handleKeyUp = (event: KeyboardEvent) => {
    console.log(event.key);

    this.setState({ pressedKey: event.key });
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleKeyUp);
  }

  render() {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {pressedKey
            ? `The last pressed key is [${pressedKey}]`
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}
