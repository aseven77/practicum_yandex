import {sum} from './modules/sum';

const root = document.querySelector('#root');
root.textContent = sum(8,9).toString();