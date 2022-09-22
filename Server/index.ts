import App from './app';
import IndexRoute from '@routes/index.route';
import UsersRoute from '@routes/users.route';
import AuthRoute from '@routes/auth.route';

const app = new App([new IndexRoute(), new AuthRoute(), new UsersRoute()]);

app.listen();