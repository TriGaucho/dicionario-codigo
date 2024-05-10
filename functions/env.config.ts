import * as dotenv from 'dotenv';
dotenv.config();

function getEnvVariable(variableName: string) {
   const value = process.env[variableName];
   if (value === undefined || value === null) {
      throw new Error(`Variavel de ambiente ${variableName} não configurada.`);
   }
   return value;
}

export const PORT = getEnvVariable('PORT');
export const MS_NAME = getEnvVariable('MS_NAME');
export const JWT_SECRET = getEnvVariable('JWT_SECRET');
