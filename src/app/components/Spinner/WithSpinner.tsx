import * as React from 'react';
// tslint:disable-next-line:import-name
import Spinner from './index';

interface IExternalProps {
  isLoading: boolean;
  [key: string]: any;
}

const withSpinner = () => <OriginalProps extends {}>(
  IntComponent: React.ComponentType<OriginalProps & {}>,
) =>
  class HOC extends React.Component<OriginalProps & IExternalProps> {
    public render() {
      return (
        <div>
          {this.props.isLoading ? <Spinner/> : <IntComponent {...this.props} />}
        </div>
      );
    }
  };

export default withSpinner;
