import React from "react";
import Spinner from "../components/spinner/spinner.component";

function withSpinner(WrappedComponent: React.FC): any {
  function WithSpinner(props: any): JSX.Element {
    return props.isLoading ? <Spinner /> : <WrappedComponent {...props} />;
  }

  return WithSpinner;
}

export default withSpinner;
