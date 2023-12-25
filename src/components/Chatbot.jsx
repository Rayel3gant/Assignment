import React from 'react'
import ChatBot from "react-simple-chatbot"
import { ThemeProvider } from 'styled-components';
const Chatbot = () => {

    const theme = {
        background: '#bfc9d9',
        fontFamily: 'Helvetica Neue',
        headerBgColor: '#EF6C00',
        headerFontColor: '#fff',
        headerFontSize: '15px',
        botBubbleColor: '#EF6C00',
        botFontColor: '#fff',
        userBubbleColor: '#fff',
        userFontColor: '#4a4a4a',
      };
      
      const steps = [
        {
            id: '1',
            component: (
                <div> Please Speak in mic </div>
            ),
            trigger: '2',           
          },
          {
            id: '2',
            user: true,
            trigger: '3',
          },
          {
            id: '3',
            message: '{previousValue}',
            trigger:'4'
          },
          {
            id:'4',
            options:[
                {value:"Try Again", label:"Try Again", trigger:'1'},
                {value:"Exit", label:"Exit", end:true}
            ]
          }
      ];
      
  return (

    <div className='w-full h-screen flex justify-center items-center'>
        <ThemeProvider theme={theme}>
            <ChatBot steps={steps} headerTitle="SPEECH RECOGNITION" recognitionEnable={true} speechSynthesis={{ enable: true, lang: 'en' }}/>
        </ThemeProvider>
    </div>
  )
}

export default Chatbot