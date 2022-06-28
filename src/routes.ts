import { prisma } from './prisma'
import express from 'express';
import { PrismaWorkspacesRepository } from './repositories/prisma/prisma-workspaces-repository';
import { SubmitWorkspaceUseCase } from './use-cases/submit-workspace-use-case';
import { PrismaVisitsRepository } from './repositories/prisma/prisma-visits-repository';
import { SubmitVisitUseCase } from './use-cases/submit-visit-use-case';

export const routes = express.Router()

routes.get('/', (req, res) => {
  res.json("Hello World")
})

routes.get('/workspaces', async (req, res) => {
  try {
  const workspaces = await prisma.workspace.findMany();
  res.status(200).json(workspaces)
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
})

routes.get(`/visits/:id`, async (req, res) => {
  try {
  const visitsByDate = await prisma.visit.groupBy({
    by: ['createdAt', 'kind', 'workspaceVisitId'],
    where: {
      workspaceVisitId: parseInt(req.params.id)
    },
    orderBy: {
      createdAt: 'desc'
    },
    _count: {
      createdAt: true
    }
  })

  const formattedVisitsByDate = visitsByDate.map((visit) => {
    const weekday = [ 7, 1, 2, 3, 4, 5, 6];
    const { createdAt } = visit
    const visitDate = createdAt
    const visitYear = createdAt
    const visitMonth = createdAt
    const visitDay = createdAt
    const visitDayOfMonth = createdAt
    const visitDateFormatted = visitDate.toLocaleDateString('pt-BR')
    const visitYearFormatted = visitYear.getFullYear()
    const visitMonthFormatted = visitMonth.getMonth() + 1
    const visitDayFormatted = weekday[visitDay.getDay()] + 1
    const visitDayOfMonthFormatted = visitDayOfMonth.getDate()
    const { _count } = visit
    const visitsCount = _count.createdAt
    const { kind } = visit

    const visits = {
      "visits": [{
      "date": visitDateFormatted,
      "year": visitYearFormatted,
      "month": visitMonthFormatted,
      "dayOfWeek": visitDayFormatted,
      "dayOfMonth": visitDayOfMonthFormatted,
      "visits": {
          kind, visitsCount 
      }

      }]
    }
    return visits
    
  })
  res.status(200).json(formattedVisitsByDate).send()
 } catch (err) {
  console.log(err)
  res.status(500).json(err)
 }
})

routes.get(`/visits/:id/:data`, async (req, res) => {
  try {
  const params = req.params.data
  const paramsFormat = params.replace(/-/g, "/").split("/")
  const paramsToDate = new Date(Date.UTC(+paramsFormat[2], +paramsFormat[1] - 1, +paramsFormat[0] + 1))
  const visitsByUniqueDate = await prisma.visit.groupBy({
    by: ['createdAt', 'kind', 'workspaceVisitId'],
    where: {
      workspaceVisitId: parseInt(req.params.id),
      createdAt: paramsToDate
    },
    _count: {
      createdAt: true
    }
  })

  const formattedVisitsByDate = visitsByUniqueDate.map((visit) => {
    const weekday = [ 7, 1, 2, 3, 4, 5, 6];
    const { createdAt } = visit
    const visitDate = createdAt
    const visitYear = createdAt
    const visitMonth = createdAt
    const visitDay = createdAt
    const visitDayOfMonth = createdAt
    const visitDateFormatted = visitDate.toLocaleDateString('pt-BR')
    const visitYearFormatted = visitYear.getFullYear()
    const visitMonthFormatted = visitMonth.getMonth() + 1
    const visitDayFormatted = weekday[visitDay.getDay()] + 1
    const visitDayOfMonthFormatted = visitDayOfMonth.getDate()
    const { _count } = visit
    const visitsCount = _count.createdAt
    const { kind } = visit

    const visits = {
      "visits": [{
      "date": visitDateFormatted,
      "year": visitYearFormatted,
      "month": visitMonthFormatted,
      "dayOfWeek": visitDayFormatted,
      "dayOfMonth": visitDayOfMonthFormatted,
      "visits": {
          kind, visitsCount 
      }

      }]
    }
    return visits
})
    console.log(paramsToDate)
    res.status(200).json(formattedVisitsByDate).send()
  } catch (err) {
  console.log(err)
  res.status(500).json(err)
 }
})

routes.post('/workspace', async (req, res) => {
  const { name, kind, description } = req.body

  try {
  const prismaWorkspacesRepository = new PrismaWorkspacesRepository()
  const submitWorkspaceUseCase = new SubmitWorkspaceUseCase(prismaWorkspacesRepository)
  
  await submitWorkspaceUseCase.execute({
    name,
    kind,
    description
  })

    const workspace = await prisma.workspace.findMany({
      where: {
        name
      }
    });
    return res.status(201).json(workspace).send();
  } catch(err) {
    console.error(err)
    return res.status(500).send()
  }
})

routes.post(`/visits/:id`, async (req, res) => {
  const { kind, user } = req.body
  
  try { 
    const prismaVisitsRepository = new PrismaVisitsRepository()
    const submitVisitUseCase = new SubmitVisitUseCase(prismaVisitsRepository)
    
    await submitVisitUseCase.execute({
      kind,
      user,
      workspaceVisitId: parseInt(req.params.id)
    })

    return res.status(200).json({}).send()
  } catch(err) {
    console.log(err)
    return res.status(500).send()
  }
})


routes.delete(`/workspace/:id`, async (req, res) => {  
  try {
  await prisma.workspace.delete({
    where: {
     workspaceId: parseInt(req.params.id)
    } 
  })
  return res.status(200).json({}).send();
  } catch(err) {
  console.log(err)
}
})

