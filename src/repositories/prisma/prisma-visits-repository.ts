import { prisma } from '../../prisma';
import { VisitCreateData, VisitsRepository } from '../visits-repository';

export class PrismaVisitsRepository implements VisitsRepository {
  async create({ kind, user, workspaceVisitId }: VisitCreateData) {
    await prisma.visit.create({ 
      data: {
        kind,
        user,
        workspaceVisitId
      }
    })
  }
}