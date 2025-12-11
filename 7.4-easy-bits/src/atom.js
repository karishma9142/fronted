import { atom, selector } from "recoil";

export const NetworkAtom = atom({
    key: "NetworkAtom",
    default: 102
})
export const JobsAtom = atom({
    key: "JobsAtom",
    default: 0
})
export const MessagingAtom = atom({
    key: "MessagingAtom",
    default: 12
})
export const NotificationsAtom = atom({
    key: "NotificationsAtom",
    default: 0
})
export const totalNotifiacation = selector({
    key: "totalNotifiacation",
    get: ({ get }) => {
        const networkCnt = get(NetworkAtom);
        const JobsCnt = get(JobsAtom);
        const MessagingCnt = get(MessagingAtom);
        const NotificationCnt = get(NotificationsAtom);
        return networkCnt + JobsCnt + MessagingCnt + NotificationCnt
    }
})

// another way to dod the same thing with detch data from backend

// import { atom, selector } from "recoil";
// import axios from 'axios' 

// export const notifications = atom({
//     key: "networkAtom",
//    async data queries 
//     default: {
//         key : "networkAtom",
//         get : async () =>{
//             const res = axios.get("https://sum-server.100xdevs.com/notifications");
//             return res.data;

//         }
//     }
// });

// export const totalNotificationSelector = selector({
//     key: "totalNotificationSelector",
//     get: ({get}) => {
//         const allNotifications = get(notifications);
//         return allNotifications.network + 
//         allNotifications.jobs + 
//         allNotifications.notifications + 
//         allNotifications.messaging
//     }
// })