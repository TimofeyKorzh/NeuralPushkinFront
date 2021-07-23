import React from 'react';
import axios from 'axios';

const ENDPOINT_URL = "http://api.pushkin.monetka.name/push";

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

export const postGenerateTextEndpoint = () => {
    /* eslint-disable react-hooks/rules-of-hooks */
    
    return useAsyncEndpoint(data => ({ url: ENDPOINT_URL, method: "GET", params : {text: data.text, temp: data.temperature}}));
   /* return axios.get(data => (ENDPOINT_URL, {
        params: {
          text: data.text,
          temp: data.temperature
        }
      }));*/
}// 