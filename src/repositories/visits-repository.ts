export interface VisitCreateData {
  kind: string;
  user: string;
  workspaceVisitId: number;
}

export interface VisitsRepository {
  create: (data: VisitCreateData) => Promise<void>;
}