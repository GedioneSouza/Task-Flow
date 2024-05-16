import { ITeams } from '@/entities/ITeams';
import { httpClient } from './httpClient';

export class TeamsService {
  static async getTeams() {
    const { data } = await httpClient.get<ITeams>('equipes?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ1ZXJ0bHR5YmxuZmx0Y2p5eGx2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTUxMTcxOTgsImV4cCI6MjAzMDY5MzE5OH0.uzgFqnqaRDkiXNxZe4opSy6GtSrYr8PBwS4_TPn1RWA');

    return data;
  }
}
