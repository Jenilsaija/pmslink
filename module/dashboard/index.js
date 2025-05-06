import Dashboard from '@/components/Dashboard'
import React from 'react'

const index = () => {
  // Default user
  const currentUser = {
    name: 'Pieter Novitsky',
    avatar: 'public/lovable-uploads/fcb3c783-2e8d-4257-a9cd-6de6268ec215.png'
  };
  const dashboardData = {
    stats: {
      totalProjects: 27,
      completedProjects: 12,
      inProgressProjects: 13,
      delayedProjects: 2
    },
    taskCompletionData: [
      { name: 'Jun', value: 10 },
      { name: 'Jul', value: 20 },
      { name: 'Aug', value: 15 },
      { name: 'Sep', value: 25 },
      { name: 'Oct', value: 22 },
      { name: 'Nov', value: 30 },
    ],
    activities: [
      {
        user: { name: 'Pieter Novitsky', avatar: '' },
        action: 'completed task UI kit Development',
        time: '10:30'
      },
      {
        user: { name: 'Maria LaGuerta', avatar: '' },
        action: 'commented on task Prepare moodboard for website branding',
        time: '10:30'
      },
      {
        user: { name: 'Maria McTaylor', avatar: '' },
        action: 'is overdue task Prepare moodboard for website branding',
        time: '10:29'
      },
      {
        user: { name: 'Sarah Wilson', avatar: '' },
        action: 'attached a file to task Search references for multicolored background',
        time: '10:27'
      },
      {
        user: { name: 'Slavko Ternovoy', avatar: '' },
        action: 'completed task Prepare detailed brief for devs & designers',
        time: '10:30'
      }
    ]
  };

  return (
    <div>
      <Dashboard
        user={currentUser}
        stats={dashboardData.stats}
        taskCompletionData={dashboardData.taskCompletionData}
        activities={dashboardData.activities}
      />
    </div>
  )
}

export default index
