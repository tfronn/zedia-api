export interface WorkspaceCreateData {
  name: string;
  kind: string;
  description: string;
}

export interface WorkspacesRepository {
  create: (data: WorkspaceCreateData) => Promise<void>;
}