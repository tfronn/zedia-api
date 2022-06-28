import { prisma } from '../../prisma';
import { WorkspaceCreateData, WorkspacesRepository } from '../workspaces-repository';

export class PrismaWorkspacesRepository implements WorkspacesRepository {
  async create({ name, kind, description }: WorkspaceCreateData) {
    await prisma.workspace.create({ 
      data: {
        name,
        kind,
        description
      }
    })
  }
}