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
      incidents: [
        {
          message: 'Need jacuzzi',
          severity: 'low',
          url: '#',
          closed: false
        },
        {
          message: 'Panic panic!',
          severity: 'high',
          closed: false
        },
        {
          message: 'Forgot lunch',
          severity: 'medium',
          url: '#',
          closed: true
        },
        {
          message: 'Panic panic!',
          severity: 'high',
          closed: true
        },
        {
          message: 'Making my minions do things',
          severity: 'low',
          closed: false
        }
      ],
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
          title: 'Consultant'
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
          title: 'Manager'
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
          title: 'Developer'
        }
      ]
    }
};
