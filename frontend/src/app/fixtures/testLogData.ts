import { MCLogs } from './dataTypes';

export const logListData: MCLogs[] = [
  {
    accessedBy: 'admin_user',
    timestamp: '2023-08-29 14:10:20',
    task: 'Create',
    summary: 'Added new anime title to the database.',
  },
  {
    accessedBy: 'developer_user',
    timestamp: '2023-08-28 10:45:55',
    task: 'Update',
    summary: 'Fixed a bug related to user authentication.',
  },
  {
    accessedBy: 'support_user',
    timestamp: '2023-08-27 16:30:05',
    task: 'Debug',
    summary: 'Investigated performance issue on anime listing page.',
  },
];
