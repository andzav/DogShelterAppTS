import * as React from 'react';

import logoSvg from '../../../logo.svg';
import DeviceInfo from '../../components/DeviceInfo';
import Menu from '../../components/Menu';

interface IAppProps extends React.Props<App> {
  children?: React.ReactNode;
}

class App extends React.Component<IAppProps> {
  public render() {
    const {
      children,
    } = this.props;
    return (
      <React.Fragment>
        <DeviceInfo render={(window: boolean) => <Menu logo={logoSvg} isMobile={window}/>} />
        {children}
      </React.Fragment>
    );
  }
}

export default App;
