import React, { lazy, Suspense } from "react";
import { Redirect, Route, Switch } from 'react-router-dom';
import Loading from 'components/shared-components/Loading';

const Dashboards = ({ match }) => {
  return(
  <Suspense fallback={<Loading cover="content"/>}>
    <Switch>
      <Route path={`${match.url}/default`} component={lazy(() => import(`./default`))} />
      <Route path={`${match.url}/analytic`} component={lazy(() => import(`./analytic`))} />
      <Route path={`${match.url}/sales`} component={lazy(() => import(`./sales`))} />
      <Route path={`${match.url}/cyfral/components/NewJobForm`} component={lazy(() => import(`./cyfral/components/NewJobForm`))} />
      <Route path={`${match.url}/cyfral/components/NewTask`} component={lazy(() => import(`./cyfral/components/NewTask`))} />
      <Route path={`${match.url}/cyfral/components/NewZone`} component={lazy(() => import(`./cyfral/components/NewZone`))} />
      <Route path={`${match.url}/cyfral/components/NewProcese`} component={lazy(() => import(`./cyfral/components/NewProcese`))} />
      <Route path={`${match.url}/cyfral/components/NewProduct`} component={lazy(() => import(`./cyfral/components/NewProduct`))} />
      <Route path={`${match.url}/cyfral/components/NewStation`} component={lazy(() => import(`./cyfral/components/NewStation`))} />
      <Route path={`${match.url}/cyfral/components/ListUsers`} component={lazy(() => import(`./cyfral/components/ListUsers`))} />
      <Route path={`${match.url}/cyfral/components/ListProcesses`} component={lazy(() => import(`./cyfral/components/ListProcesses`))} />
      <Route path={`${match.url}/cyfral/components/ListStation`} component={lazy(() => import(`./cyfral/components/ListStation`))} />
      <Route path={`${match.url}/cyfral/components/ListZone`} component={lazy(() => import(`./cyfral/components/ListZone`))} />
      <Route path={`${match.url}/cyfral/components/NewOrder`} component={lazy(() => import(`./cyfral/components/NewOrder`))} />
      <Route path={`${match.url}/cyfral/components/ListOrders`} component={lazy(() => import(`./cyfral/components/ListOrders`))} />
      <Route path={`${match.url}/cyfral/components/TaskStation`} component={lazy(() => import(`./cyfral/components/TaskStation`))} />
      <Route path={`${match.url}/cyfral/components/ProductList`} component={lazy(() => import(`./cyfral/components/ProductList`))} />
      <Route path={`${match.url}/cyfral/components/home`} component={lazy(() => import(`./cyfral/components/home`))} />
      <Redirect from={`${match.url}`} to={`${match.url}/default`} />
    </Switch>
  </Suspense>
)};

export default Dashboards;