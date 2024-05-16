export type ITeams = Team[]

export interface Team {
  id: string
  data_criacao: string
  nome: string
  admin: string
  membros: string[]
}
