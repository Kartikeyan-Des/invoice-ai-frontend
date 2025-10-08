// app.routes.ts
import { Routes } from '@angular/router';
import { provideRouter, RouterModule } from '@angular/router';
// import { LayoutComponent } from './layout/layout.component';
// import { LoginComponent } from './auth/login/login.component';
// import { AuthGuard } from './core/guards/auth.guard';
import { provideAnimations } from '@angular/platform-browser/animations';

export const appRoutes: Routes = [
  // { path: 'login', component: LoginComponent, standalone: true },
  // {
  //   path: '',
  //   component: LayoutComponent,
  //   canActivate: [AuthGuard],
  //   children: [
  //     { path: 'dashboard', loadComponent: () => import('./dashboard/dashboard.component').then(m => m.DashboardComponent) },
  //     { path: 'invoices', loadComponent: () => import('./invoices/invoices.component').then(m => m.InvoicesComponent) },
  //     { path: 'vendors', loadComponent: () => import('./vendors/vendors.component').then(m => m.VendorsComponent) },
  //     { path: 'expenses', loadComponent: () => import('./expenses/expenses.component').then(m => m.ExpensesComponent) },
  //     { path: 'ai-assistant', loadComponent: () => import('./ai-assistant/ai-assistant.component').then(m => m.AiAssistantComponent) },
  //     { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  //   ]
  // },
  // { path: '**', redirectTo: 'login' }
];
