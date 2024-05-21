import { Route, Routes } from 'react-router-dom';

import { Home } from '../pages/Home';
import { SignIn } from '../pages/SignIn';
import { SignUp } from '../pages/SignUp';
import { AuthGuard } from './AuthGuard';

export function Router() {
  return (
    <Routes>
      <Route element={<AuthGuard isPrivate />}>
        <Route path="/tasks" element={<Home />} />
      </Route>

      <Route element={<AuthGuard isPrivate={false} />}>
        <Route path="/" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Route>
    </Routes>
  );
}
