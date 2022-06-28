import { VisitsRepository } from "../repositories/visits-repository";

interface SubmitVisitUseCaseRequest {
  kind: string;
  user: string;
  workspaceVisitId: number;
}

export class SubmitVisitUseCase {

  constructor(
    private visitsRepository: VisitsRepository
  ) {}

  async execute(request: SubmitVisitUseCaseRequest) {
    const { kind, user, workspaceVisitId } = request;

    if (!kind) {
      throw new Error('Kind is required.')
    }

    if (!user) {
      throw new Error('User is required.')
    }

    if (!workspaceVisitId) {
      throw new Error('Workspace id is required.')
    }

    await this.visitsRepository.create({
      kind,
      user,
      workspaceVisitId
    })
  }
}