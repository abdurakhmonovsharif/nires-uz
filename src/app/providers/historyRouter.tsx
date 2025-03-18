import { useLayoutEffect, useState } from "react";
import { Router, RouterProps } from "react-router-dom";
import { BrowserHistory } from "history";

type TProps = {
  history: BrowserHistory;
} & Partial<RouterProps>;

export const HistoryProvider = ({ history, ...props }: TProps) => {
  const [state, setState] = useState({
    action: history.action,
    location: history.location,
  });

  useLayoutEffect(() => history.listen(setState), [history]);

  return (
    <Router
      {...props}
      location={state.location}
      navigationType={state.action}
      navigator={history}
    />
  );
};
