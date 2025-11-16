import { createQueryKeyStore } from '@lukemorales/query-key-factory';

export const queryKeyStore = createQueryKeyStore({
  admin: {
    applications: null,
    applicationStatByProjectAndPart: (projectId: string, part?: string[]) => [
      'admin',
      'applications',
      projectId,
      part ?? [],
    ],
    applicationStatByChallenger: (part?: string, school?: string, challengerId?: string) => [
      part,
      school,
      challengerId,
    ],
  },
  application: {
    singleApplication: (projectId: string, applicationId: string) => [projectId, applicationId],
    myApplications: null,
  },
  auth: {
    schoolList: null,
  },
  form: {
    singleForm: (projectId: string, formId: string) => [projectId, formId],
  },
  matchingRound: {
    closest: null,
    all: null,
    singleMatchingRound: (matchingRoundId: string) => [matchingRoundId],
    byPeriod: (startDate: Date, endDate: Date) => [startDate, endDate],
  },
  project: {
    allProjects: null,
    singleProject: (projectId: string) => [projectId],
  },
  me: {
    info: null,
  },
});
