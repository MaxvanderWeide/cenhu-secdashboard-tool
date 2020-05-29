import {Department} from '@models/department.model';

export const departments: Department[] = [
  {
    name: 'Finance',
    cleanUrl: 'finance'
  },
  {
    name: 'Human resource management',
    cleanUrl: 'human-resource-management'
  },
  {
    name: 'Administration',
    cleanUrl: 'administration'
  },
  {
    name: 'Security officers',
    cleanUrl: 'security'
  }
];

export const departmentData: Department =
  {
    name: 'Human resource management',
    cleanUrl: 'human-resource-management',
    data: {
      mainStatistics: [
        {name: 'stat1', data: 25000},
        {name: 'stat2', data: 123},
        {name: 'stat3', data: 2},
        {name: 'stat4', data: 424123},
      ],
      incidents: {
        total: 999,
        open: 21
      },
      academy: [
        {
          dateAssigned: '23/04/1978',
          dateStarted: '23/04/1978',
          dateCompleted: '23/04/1978',
          team: 'A',
          progress: 0.7,
          timeSpent: 0.4,
          reviewScore: 0,
          trainerReview: 0,
          certificate: 'N',
          quizScore: 0,
          quizAttempts: 0,
          status: 'New',
          FIELD13: '',
          functie: 'Consultant'
        },
        {
          dateAssigned: '24/04/1978',
          dateStarted: '24/04/1978',
          dateCompleted: '24/04/1978',
          team: 'B',
          progress: 1,
          timeSpent: 1.15,
          reviewScore: 4,
          trainerReview: 5,
          certificate: 'Y',
          quizScore: 1,
          quizAttempts: 1,
          status: 'In progress',
          FIELD13: '',
          functie: 'Manager'
        },
        {
          dateAssigned: '25/04/1978',
          dateStarted: '25/04/1978',
          dateCompleted: '25/04/1978',
          team: 'C',
          progress: 0,
          timeSpent: 0,
          reviewScore: 0,
          trainerReview: 0,
          certificate: 'N',
          quizScore: 0,
          quizAttempts: 0,
          status: 'Done',
          FIELD13: '',
          functie: 'Developer'
        }
      ]
    },
  };
