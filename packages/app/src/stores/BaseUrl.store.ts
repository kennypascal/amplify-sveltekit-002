export const env = import.meta.env.VITE_ENV;
const lambdaprodUrl = import.meta.env.VITE_BASE_URL_LAMBDA_PROD;
const lambdadevUrl = import.meta.env.VITE_BASE_URL_LAMBDA_DEV;
export const lambdabaseUrl = env === 'dev' ? lambdadevUrl : lambdaprodUrl;
export const baseUrl =  env === 'dev'  ? import.meta.env.VITE_BASE_URL_DEV :import.meta.env.VITE_BASE_URL_PROD ;
