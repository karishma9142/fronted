import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil'
import { JobsAtom, MessagingAtom, NetworkAtom, NotificationsAtom, totalNotifiacation } from './atom'

function App() {
  return <RecoilRoot>
    <MainApp/>
  </RecoilRoot>
}
function MainApp(){
  const networkCnt = useRecoilValue(NetworkAtom);
  const JobsCnt = useRecoilValue(JobsAtom);
  const [MessagingCnt , setMessagingCnt] = useRecoilState(MessagingAtom);
  const NotificationCnt = useRecoilValue(NotificationsAtom);
  const totalNotification  = useRecoilValue(totalNotifiacation);
  return (
    <>
      <button>Home</button>
      
      <button>My network ({networkCnt>=100 ? "99+" : networkCnt})</button>
      <button>Jobs ({JobsCnt>=100 ? "99+" : JobsCnt})</button>
      <button>Messaging ({MessagingCnt >=100 ? "99+" : MessagingCnt})</button>
      <button>Notifications ({NotificationCnt>=100 ? "99+" : NotificationCnt})</button>

      <button >Me ({totalNotification})</button>
    </>
  )
}

export default App


// with real fetch data from backend

// import './App.css'
// import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
// import { notifications, totalNotificationSelector } from './atoms'
// import { useEffect } from 'react'
// import axios from 'axios'

// function App() {
//   return <RecoilRoot>
//     <MainApp />
//   </RecoilRoot>
// }

// function MainApp() {
//   const [networkCount, setNetworkCount] = useRecoilState(notifications)
//   const totalNotificationCount = useRecoilValue(totalNotificationSelector);

//   return (
//     <>
//       <button>Home</button>
      
//       <button>My network ({networkCount.networks >= 100 ? "99+" : networkCount.networks})</button>
//       <button>Jobs {networkCount.jobs}</button>
//       <button>Messaging ({networkCount.messaging})</button>
//       <button>Notifications ({networkCount.notifications})</button>

//       <button>Me ({totalNotificationCount})</button>
//     </>
//   )
// }

// export default App
