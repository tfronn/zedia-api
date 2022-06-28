-- CreateTable
CREATE TABLE "Workspaces" (
    "workspaceId" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "kind" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Workspaces_pkey" PRIMARY KEY ("workspaceId")
);

-- CreateTable
CREATE TABLE "Visits" (
    "visitId" SERIAL NOT NULL,
    "kind" TEXT NOT NULL,
    "user" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "workspaceVisitId" INTEGER NOT NULL,

    CONSTRAINT "Visits_pkey" PRIMARY KEY ("visitId")
);

-- AddForeignKey
ALTER TABLE "Visits" ADD CONSTRAINT "Visits_workspaceVisitId_fkey" FOREIGN KEY ("workspaceVisitId") REFERENCES "Workspaces"("workspaceId") ON DELETE RESTRICT ON UPDATE CASCADE;
