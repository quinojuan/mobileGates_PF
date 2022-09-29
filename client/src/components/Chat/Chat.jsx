// import { useSelector } from 'react-redux'
// import React, { useState } from 'react'
// import { ThemeProvider } from 'styled-components'
// import ChatBot from 'react-simple-chatbot' //eslint-disable-line
// import logochat from '../../images/chat.png'
// import { useAuth } from '../Context/authContext'

// const Chat = () => {
// //   const user = useSelector(state => state.users.user)
// //   const [usuario, setUsuario] = useState(user.email) //eslint-disable-line
// const { user } = useAuthh()

//   const steps = [
//     {
//       id: '0',
//       message: 'Bienvenido a MóvilGates',
//       trigger: '1'
//     }, {
//       id: '1',
//       message: 'Para asesorarte mejor, cuéntame ¿Cúal es tu nombre?',
//       trigger: '2'
//     }, {
//       id: '2',
//       //user: true,
//       trigger: '3'
//     }, {
//       id: '3',
//       message: ' Hola {previousValue}, ¿Cómo puedo ayudarte?',
//       trigger: 4
//     }, {
//       id: '4',
//       options: [
//         { value: 1, label: 'Ver métodos de pago', trigger: '5' },
//         { value: 2, label: 'Ver con que marcas trabajamos', trigger: '6' }

//       ]
//     }, {
//       id: '5',
//       message: 'Actualmente estamos trabajando con Stripe como método de pago',
//       trigger: '7'
//     },
//     {
//       id: '6',
//       component: (
//         <div> Trabajamos con marcas como: Apple, Samsung, Motorola, Huawei, Xiami </div>
//       ),
//       trigger: '7'
//     }, {
//       id: '7',
//       message: '¿Te puedo ayudar en algo más?',
//       trigger: '8'
//     }, {
//       id: '8',
//       options: [

//         { value: 1, label: 'Eso es todo', trigger: '9' },
//         { value: 2, label: 'Si', trigger: '4' }

//       ]
//     }, {
//       id: '9',
//       message: '¡Perfecto! Gracias por visitar MóvilGates.',
//       end: true
//     }
//   ]

//   const theme = {
//     background: '#FFFFFF',
//     headerBgColor: '#333333',
//     headerFontSize: '20px',
//     botBubbleColor: '#0082E3',
//     headerFontColor: 'white',
//     botFontColor: 'white',
//     userBubbleColor: '#333333',
//     userFontColor: 'white'
//   }

//   const config = {
//     botAvatar: logochat,
//     floating: true,
//     placeholder: 'Escribe un mensaje...'
//   }

//   return (
//     <div className='App'>
//       <ThemeProvider theme={theme}>
//         <ChatBot
//           headerTitle='Chat de MóvilGates'
//           steps={steps}
//           {...config}
//         />
//       </ThemeProvider>
//     </div>
//   )
// }

// export default Chat