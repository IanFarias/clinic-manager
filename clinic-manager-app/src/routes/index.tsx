import { Routes as Switch, Route } from 'react-router-dom';
import { SCREEN_PATHS } from '../constants/paths';

import PrivateRoutes from './PrivateRoutes';
import Initial from '../pages/Initial';
import Login from '../pages/Login';
import Home from '../pages/Home';
import RegisterPatient from '../pages/RegisterPatient';
import RegisterProfessional from '../pages/RegisterProfessional';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path={SCREEN_PATHS.initial} element={<Initial />} />
      <Route path={SCREEN_PATHS.login} element={<Login />} />
      <Route element={<PrivateRoutes />}>
        {/* ADD PRIVATE ROUTES HERE */}
        <Route path={SCREEN_PATHS.home} element={<Home />} />
        <Route
          path={SCREEN_PATHS.registerPatient}
          element={<RegisterPatient />}
        />
        <Route
          path={SCREEN_PATHS.registerProfessional}
          element={<RegisterProfessional />}
        />
      </Route>
    </Switch>
  );
};

export default Routes;
