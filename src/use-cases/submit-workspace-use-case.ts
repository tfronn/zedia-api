import { WorkspacesRepository } from "../repositories/workspaces-repository";

interface SubmitWorkspaceUseCaseRequest {
  name: string;
  kind: string;
  description: string;
}

export class SubmitWorkspaceUseCase {

  constructor(
    private workspacesRepository: WorkspacesRepository
  ) {}

  async execute(request: SubmitWorkspaceUseCaseRequest) {
    const { name, kind, description } = request;

    if (!name) {
      throw new Error('Name is required.')
    }

    if (!kind) {
      throw new Error('Kind is required.')
    }

    if (!description) {
      throw new Error('Description is required.')
    }

    await this.workspacesRepository.create({
      name,
      kind,
      description
    })
  }
}