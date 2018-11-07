import * as React from 'react';

interface IAppInterface{
  render(isMobile: boolean): any;
}

interface IState {
  isMobile: boolean;
}

class DeviceInfo extends React.Component<IAppInterface, IState> {
  constructor(props: IAppInterface) {
    super(props);
    this.state = { isMobile: false };
  }

  public render() {
    return (
      <React.Fragment>
        { this.props.render(this.state.isMobile) }
      </React.Fragment>
    );
  }

  public componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  public componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  public updateWindowDimensions = () => {
    if (window.innerHeight > window.innerWidth) {
      this.setState({ isMobile: true });
    } else {
      this.setState({ isMobile: false });
    }
  }
}

export default DeviceInfo;
