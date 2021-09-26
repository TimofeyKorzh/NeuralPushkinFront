import { TextField } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import Button from './components/Button';
import {MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import './styles.scss';
import { postGenerateTextEndpoint } from './utils';
import { postGeneratePoemEndpoint } from './utilsPoem';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import { makeStyles } from '@material-ui/core/styles';
import { YMInitializer } from 'react-yandex-metrika';

import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import PropTypes from "prop-types";

const TITLE = 'Neural Pushkin';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper
  }
}));







function App() {
  const [toggle, setToggle] = useState(false);
  const [togglePoem, setTogglePoem] = useState(false);
  const [text, setText] = useState("Заходит Пушкин в магазин купить шляпу, а она ему"); // установка текста по умолчанию
  const [name, setName] = useState()
  const [poem, setPoem] = useState()
  const [temperature, setTemperature] = useState(0.7);//установка температуры по умолча
  const [generatedText, postGenerateText] = postGenerateTextEndpoint();
  const [generatedPoem, postGeneratePoem] = postGeneratePoemEndpoint();

  const [value, setValue] = React.useState(0);

  function handleTab(event, newValue) {
    setValue(newValue);
  }

  const useStyles = makeStyles({
    root: {
      width: 300,
    },
    title: {
      flexGrow: 1,
      textAlign: 'center',
    },
  });

  const handleChange = (event) => {
    setText(event.target.value); //обновление текста
  };

  const handleName = (event) => {
    setName(event.target.value); //обновление текста
  };

  useEffect(() => {
    document.title = TITLE;
  }, []);

  const THEME = createMuiTheme({
    typography: {
     "fontFamily": `"bikham","MinionPro",  sans-serif`,
     "fontSize": 16,
     "fontWeightLight": 300,
     "fontWeightRegular": 400,
     "fontWeightMedium": 500
    }
  });


  const generateText = () => {
    generatedText.complete = false;
    postGenerateText({ text, temperature});
    setToggle(false);
  }

  const generatePoem = () => {
    generatedPoem.complete = false;
    postGeneratePoem({ name, temperature});
    setTogglePoem(false);
  }

  if (generatedText.complete && !generatedText.error && !toggle){
    setText(generatedText.data.text);
    setToggle(true);// обновление текста при получение ответа от сервера
  }

  if (generatedPoem.complete && !generatedPoem.error && !togglePoem){
    setPoem(generatedPoem.data.text.split("poem:start")[1].replace(/(\r\n|\n|\r)/gm, "<br/>"));
    setTogglePoem(true);
  }

  function valuetext(value) {
    setTemperature(value); //установка температуры со слайдера
  }

  const classes = useStyles();
  return (
  <MuiThemeProvider theme ={THEME}>
  
  <div className='app-container'>
  
      
        
    <YMInitializer accounts={[83274316]} options={{webvisor: true}} />
        
      
    
    <form noValidate autoComplete='off'>
    <div className='centering'></div>
      <h1>Neural Pushkin</h1>
      <img src="npushkin2.jpg" width="250" height="250" alt="Neural Pushkin"></img>
      
      <p>Мы вышли в стадию открытого бета-тестирования!<br></br> Начните писать ниже, а нейросеть продолжит...</p>
      <p>Сбор средств на <a href="https://www.tinkoff.ru/sl/6Nv1r2nsuiQ">лучшие сервера</a> для Пушкина</p>
      <p>!ВНИМАНИЕ! Сейчас сервер находится под интенсивной нагрузкой и генерация может длиться вплоть до часа!</p>
      <Typography id="discrete-slider"  > Уровень креативности </Typography>
      <Slider
        defaultValue={0.7}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={0.1}
        marks
        min={0.1}
        max={2}
      />
      <p></p>
      <AppBar position="static" color="transparent" elevation={0} >
        <Tabs
          value={value}
          onChange={handleTab}
          indicatorColor="primary"
          textColor="primary"
          variant="standart"
          scrollButtons="auto"
          aria-label="standart auto tabs example"
          centered
        >
          <Tab label="Стихи" {...a11yProps(0)} />
          <Tab label="Проза" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
      <div class="centering">
      <font face = "bakhim">
      <TextField className='form textinput ' label="Название стиха..."  onChange={handleName} />
      <p><div className="post__content" dangerouslySetInnerHTML={{__html: poem}}></div></p>
      
      <Button onClick={generatePoem} />
      </font>
      </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <TextField className='form textinput' multiline fullWidth value={text} onChange={handleChange} />
      <Button onClick={generateText} />
      </TabPanel>
     
      
    </form>

    {(generatedText.pending || generatedPoem.pending)  &&
      <div className='result pending'>Подождите!</div>}

        <div className='centering'> 
        <p>Created by <a href="https://t.me/datapron">Alex Wortega</a></p>
        <p>Front by <a href="https://github.com/TimofeyKorzh">Timofey Korzhebin</a></p>
        <p>Благодарим за информационную поддержку <br></br><a href="https://t.me/NeuralShit">NeuralShit</a>, <a href="https://t.me/denissexy">DenisSexyIt</a>, <a href="https://t.me/DeepFaker">Deepfaker</a>, <a href="https://t.me/def_model_train">Arina Puсhkova</a></p>

        <p>Neural Pushkin in <a href="https://twitter.com/NeuralPushkin">Twitter</a></p>
        </div>
        
  </div>
  </MuiThemeProvider>
);

}

export default App;
