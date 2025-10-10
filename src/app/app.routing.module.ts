// app.routes.ts
import { Routes } from '@angular/router';
import { provideRouter, RouterModule } from '@angular/router';
import { Layout } from './layout/layout';
import { Dashboard } from './dashboard/dashboard';
import { Login } from './Auth/login/login';
import { APP_ROUTES } from './utils/app.constants';


export const appRoutes: Routes = [
  // Redirect root ("/") to the login page
  { path: '', redirectTo: APP_ROUTES.LOGIN, pathMatch: 'full' },

  // Login page (standalone, no header/sidebar)
  { path: APP_ROUTES.LOGIN, component: Login },

  // Protected layout (after login)
  {
    path: APP_ROUTES.HOME,
    component: Layout, // acts as shell layout
    children: [
      { path: APP_ROUTES.DASHBOARD, component: Dashboard },
      // add more routes here later:
      // { path: APP_ROUTES.INVOICES, component: InvoicesComponent },
      // { path: APP_ROUTES.EXPENSES, component: ExpensesComponent },
    ],
  },
];

