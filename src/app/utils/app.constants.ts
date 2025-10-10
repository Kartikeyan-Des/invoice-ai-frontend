// src/app/utils/app-constants.ts

// 👇 All route path segments used in Angular routing
export const APP_ROUTES = {
  LOGIN: 'login',
  HOME: 'home',
  DASHBOARD: 'dashboard',
  INVOICES: 'invoices',
  EXPENSES: 'expenses',
};

// 👇 All API endpoints used for HTTP calls to the backend
export const API_ENDPOINTS = {
  BASE_URL: 'http://localhost:5000/api',
  AUTH: {
    LOGIN: '/auth/login',
  },
  HOME: '/home',
  DASHBOARD: '/dashboard',
  INVOICES: '/invoices',
  EXPENSES: '/expenses',
};
