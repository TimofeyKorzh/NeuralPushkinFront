import React from 'react';
import axios from 'axios';

const ENDPOINT_URL = "https://api.pushkin.monetka.name/stih";//куда делается запрос
//const ENDPOINT_URL = "http://46.17.97.44:5000/stih";//куда делается запрос
const useAsyncEndpoint = fn => {
    const [res, setRes] = React.useState({ data: null, complete: false, pending: false, error: false });
    const [req, setReq] = React.useState();

    React.useEffect(() => {
        if (!req) return;
        setRes({ data: null, pending: true, error: false, complete: false });
        axios(req)
            .then(res =>
                setRes({ data: res.data, pending: false, error: false, complete: true })
            )
            .catch(() =>
                setRes({ data: null, pending: false, error: true, complete: true })
            );
    }, [req]);
    console.log(res);
    return [res, (...args) => setReq(fn(...args))];
}

export const postGeneratePoemEndpoint = () => {
    /* eslint-disable react-hooks/rules-of-hooks */
    
    return useAsyncEndpoint(data => ({ url: ENDPOINT_URL, method: "GET", params : {name: data.name, temp: data.temperature, length: 100}}));//Гет-запрос на сервер
   /* return axios.get(data => (ENDPOINT_URL, {
        params: {
          text: data.text,
          temp: data.temperature
        }
      }));*/
}// 