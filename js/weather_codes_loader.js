import { localFileFetchTimeout } from './utils.js';

export let weatherCodes;
export function loadWeatherCodes(callback, source = '/data/weather_codes.json') {
    const weatherCodesRequest = new XMLHttpRequest();
    weatherCodesRequest.responseType = 'json';        
    weatherCodesRequest.open('GET', source);
    weatherCodesRequest.timeout = localFileFetchTimeout;
    weatherCodesRequest.onload = function() { weatherCodes = weatherCodesRequest.response; callback(); }
    weatherCodesRequest.send();
};