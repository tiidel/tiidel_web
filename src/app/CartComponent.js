// // CartComponent.js
// import React, { useContext, useState, useEffect } from 'react'
// import { getFCMToken } from "../firebase";


// const Notifications = (props) => {

//   const [userId, setUserId] = useState()
//   const [isTokenFound, setTokenFound] = useState(false);
//   const [fmcToken, setFCMToken] = useState("")
//   const [serverToken, setServerToken] = useState("")




// let createFCMToken = async (theToken) => {
//     let response = await fetch(`api-endpoint-for creating fcm token`, {

//       method: 'POST',
//       credentials: 'include',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({
//         "owner": userId,
//         "fcm_token": theToken

//       })
//     })

//     let data = await response.json()
//     console.log(data)

//   }

//   const userAndStoreData = async () => {
//     await getUserData()
//     console.log("user id",userId) 
//   }


// let updateServerToken = async (theToken) => {
//   let response = await fetch(`api-endpoint-for updating token`, {
//     method: 'PUT',
//     credentials: 'include',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//       "fcm_token": theToken
//     })
    
//   })

//   let data = await response.json()
//   if (response.status === 201 || response.status === 200) {
//     window.location.reload()
//   } else {
//     alert('something went wrong')
//   }

// }


//   let getServerToken = async () => {

//     let response = await fetch(`api-endpoint-for-user's-fcm-token/${userId}`, {
//         method: "GET",
//         credentials: "include",
//         headers: {
//           'Content-Type': 'application/json',
//           'Accept': 'application/json'
//         },
//     })
//     let data = await response.json()
//     setServerToken(data.fcm_token)
//     console.log("server token", data.fcm_token)
  
   
//   }




//   const generateFCMToken = async () => {

//     let data;
//       data = await getTokenn(setTokenFound);
//       if (data) {
//         setFCMToken(data);
//       }
//       createFCMToken(data)
   
      
//   }


//   const reactivateFCMToken = async () => {

//     let data;
//       data = await getTokenn(setTokenFound);
//       if (data) {
//         setFCMToken(data);
//       }
//       updateServerToken(data)
  
      
//   }

 
//   useEffect(() => {
  
//     getServerToken()
    
    
//   }, [fmcToken]);

//   return (
  



//   <div>
//   {!serverToken.length ? 
//   <button class="mt-3 group inline-flex w-full items-center justify-center rounded-md bg-[#0d0642] px-6 py-4 text-lg font-semibold text-white transition-all duration-200 ease-in-out focus:shadow " onClick={generateFCMToken}>Click to subscribe</button>
//   : 
//   <><div class="mt-10">
//             <p class="mb-2 text-gray-500 text-center">You already have push notifications set up on a device. You can reactivate push notifications for current device using the button below</p>
//           </div>
//           <div className='flex justify-center'>
//           <button class="mt-3 group inline-flex  items-center justify-center rounded-md bg-[#0d0642] px-6 py-4 text-lg font-semibold text-white transition-all duration-200 ease-in-out focus:shadow " onClick={reactivateFCMToken}>Re-activate push notifications</button>
//           </div></>
//   }
//   </div>   
    
//     )
// };

// Notifications.propTypes = {};

// export default Notifications;