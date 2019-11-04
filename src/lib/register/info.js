import dynamic from 'dva/dynamic';
import info from '../models/info';
import Info1 from '../components/Info';

export default dynamic({
  app: window.g_app,
  models: () => [
    info,
  ],
  component: () => Info1,
});
