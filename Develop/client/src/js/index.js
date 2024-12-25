import { Workbox } from 'workbox-window';
import Editor from './editor';
import './database';
import '../css/style.css';
import {header} from './header';

const main = document.querySelector('#main');
main.innerHTML = '';

// Function to load the header
const loadHeader = () => {
  const headerElement = document.createElement('pre'); // Use <pre> to preserve formatting
  headerElement.textContent = header; // Add the header text
  main.appendChild(headerElement); // Append to the main element
};

const loadSpinner = () => {
  const spinner = document.createElement('div');
  spinner.classList.add('spinner');
  spinner.innerHTML = `
  <div class="loading-container">
  <div class="loading-spinner" />
  </div>
  `;
  main.appendChild(spinner);
};

// Load the header first
loadHeader();

const editor = new Editor();

if (typeof editor === 'undefined') {
  loadSpinner();
}

// Check if service workers are supported
if ('serviceWorker' in navigator) {
  // register workbox service worker
  const workboxSW = new Workbox('/src-sw.js');
  workboxSW.register();
} else {
  console.error('Service workers are not supported in this browser.');
}
console.log('Hello, Webpack!');
