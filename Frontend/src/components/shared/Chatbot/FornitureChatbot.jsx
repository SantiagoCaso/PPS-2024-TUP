import ChatBot from 'react-simple-chatbot';
import { ChatResponse } from './ChatResponse';
import { ThemeProvider } from 'styled-components';
import { useState } from 'react';
const FornitureChatBot = () => {
  const [steps] = useState([
    {
      id: '1',
      message:
        'Hola! Por favor, ingresa el nombre del producto que estás buscando:',
      trigger: 'productName',
    },
    {
      id: 'productName',
      user: true,
      validator: (value) => {
        if (value.trim() === '') {
          return 'Por favor, ingresa un nombre de producto válido.';
        }
        return true;
      },
      trigger: '3',
    },
    {
      id: '3',
      message: 'Buscando el producto {previousValue}...',
      trigger: 'searchProduct',
    },
    {
      id: 'searchProduct',
      component: <ChatResponse />,
      waitAction: true,
      trigger: 'end',
    },
    {
      id: 'end',
      message: 'Esa fue nuestra mejor coincidencia!',
      end: true,
    },
  ]);
  const theme = {
    background: '#f5f8fb',
    fontFamily: 'Montserrat',
    headerBgColor: 'black',
    headerFontColor: '#fff',
    headerFontSize: '15px',
    botBubbleColor: 'black',
    botFontColor: '#fff',
    userBubbleColor: 'false',
    userFontColor: 'user: true,',
  };

  return (
    <div className="fixed bottom-5 left-1 w-[100px]  ">
      <ThemeProvider theme={theme}>
        <ChatBot steps={steps} headerTitle="Forniture Chat" />
      </ThemeProvider>
    </div>
  );
};

export default FornitureChatBot;
