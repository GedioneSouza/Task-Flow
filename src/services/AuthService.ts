import { httpClient } from './httpClient';

interface ISignUpDTO {
  name: string;
  email: string;
  senha: string;
}

interface ISignInDTO {
  email: string;
  senha: string;
}

interface ISignInResponse {
  accessToken: string;
  refreshToken: string;
}

export class AuthService {
  static async signUp({ name, email, senha }: ISignUpDTO) {
    const { data } = await httpClient.post('login?apiKey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ1ZXJ0bHR5YmxuZmx0Y2p5eGx2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTUxMTcxOTgsImV4cCI6MjAzMDY5MzE5OH0.uzgFqnqaRDkiXNxZe4opSy6GtSrYr8PBwS4_TPn1RWA', {
      name,
      email,
      senha,
    });
    return data;
  }

  static async signIn({ email, senha }: ISignInDTO) {
    const { data } = await httpClient.post<ISignInResponse>('/login?apiKey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ1ZXJ0bHR5YmxuZmx0Y2p5eGx2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTUxMTcxOTgsImV4cCI6MjAzMDY5MzE5OH0.uzgFqnqaRDkiXNxZe4opSy6GtSrYr8PBwS4_TPn1RWA', {
      email,
      senha,
    });

    return data;
  }

  static async refreshToken(refreshToken: string) {
    const { data } = await httpClient.post<ISignInResponse>('/refresh-token', {
      refreshToken,
    });

    return data;
  }
}
