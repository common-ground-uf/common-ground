import App from './app';
import IndexRoute from '@routes/index.route';
import UsersRoute from '@routes/users.route';
import AuthRoute from '@routes/auth.route';
import GroupsRoute from '@routes/groups.route';

const app = new App([new IndexRoute(), new AuthRoute(), new UsersRoute(), new GroupsRoute()]);

app.listen();