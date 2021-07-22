/*import React, { useState } from 'react';
import Button from './components/Button';
import SelectBox from './components/SelectBox';
import TextBox from './components/TextBox';
import './styles.scss';
import { postGenerateTextEndpoint } from './utils';
*/
import { TextField } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import Button from './components/Button';
import {MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import './styles.scss';
import { postGenerateTextEndpoint } from './utils';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import { makeStyles } from '@material-ui/core/styles';

const TITLE = 'Neural pushkin';

function App() {
  const [toggle, setToggle] = useState(false);
  const [text, setText] = useState("");
  const [temperature, setTemperature] = useState(1);
  //const [model, setModel] = useState('gpt2');
  const model = "345M";
  const [generatedText, postGenerateText] = postGenerateTextEndpoint();


  const useStyles = makeStyles({
    root: {
      width: 300,
    },
  });

  const handleChange = (event) => {
    setText(event.target.value);
  };

  useEffect(() => {
    document.title = TITLE;
  }, []);

  const THEME = createMuiTheme({
    typography: {
     "fontFamily": `"MinionPro", sans-serif`,
     "fontSize": 14,
     "fontWeightLight": 300,
     "fontWeightRegular": 400,
     "fontWeightMedium": 500
    }
  });


  const generateText = () => {
    generatedText.complete = false;
    postGenerateText({ text, model, userId: 1 });
    setToggle(false);
  }

  if (generatedText.complete && !generatedText.error && !toggle){
    setText(text+generatedText.data.result);
    setToggle(true);
  }


  function valuetext(value) {
    setTemperature(value);
    //console.log(temperature)
    //return `${value}°C`;
  }

  const classes = useStyles();
  return (
  <MuiThemeProvider theme ={THEME}>
  
  <div className='app-container'>
  
  
      
    <form noValidate autoComplete='off'>
      <h1>Neural Pushkin</h1>
      <img src="npushkin.jpg" width="250" height="250" alt="Neural Pushkin"></img>
      <p>Мы вышли в стадию открытого бета-тестирования!<br></br> Начните писать ниже, а нейросеть продолжит...</p>
      <Typography id="discrete-slider"  > Уровень креативности </Typography>
      <Slider
        defaultValue={1}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={0.1}
        marks
        min={0.1}
        max={2}
      />
      <TextField className='form textinput' multiline fullWidth value={text} onChange={handleChange} />
      <Button onClick={generateText} />
    </form>

    {generatedText.pending &&
      <div className='result pending'>Подождите!</div>}

    {generatedText.complete &&
      (generatedText.error ?
        <div className='result error'>Неизвестная ошибка запроса</div> :
        <div className='result valid'>
          {generatedText.data.result}
        </div>)}
        <p>Created by <a href="https://t.me/datapron">Alex Wortega</a>, <a href="https://t.me/def_model_train">Arina Puсhkova</a></p>
        <p>Благодарим за информационную поддержку <a href="https://t.me/NeuralShit">NeuralShit</a>, <a href="https://t.me/denissexy">DenisSexyIt</a></p>

        <p>Neural Pushkin in <a href="https://twitter.com/NeuralPushkin">Twitter</a></p>
  </div>
  </MuiThemeProvider>
);

}

export default App;