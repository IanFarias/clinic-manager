import { Routes as Switch, Route } from 'react-router-dom';
import { SCREEN_PATHS } from '../constants/paths';

import Initial from '../pages/Initial';
import Login from '../pages/Login';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path={SCREEN_PATHS.initial} element={<Initial />} />
      <Route path={SCREEN_PATHS.login} element={<Login />} />
    </Switch>
  );
};

export default Routes;
