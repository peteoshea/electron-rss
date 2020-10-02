const { ipcMain } = require('electron');
const Store = require('electron-store');
const store = new Store();

document.addEventListener('DOMContentLoaded', (event) => {
  document.querySelector('#add-blog').addEventListener('click', () => {
    document.querySelector('#main-screen').classList.add('hidden');
    document.querySelector('#form').classList.remove('hidden');
  });

  document.querySelector('#back').addEventListener('click', () => {
    document.querySelector('#main-screen').classList.remove('hidden');
    document.querySelector('#form').classList.add('hidden');
  });

  document.querySelector('form').addEventListener('submit', () => {
    store.set('feeds', [...(store.get('feeds') || []), document.querySelector('#feedurl').value]);
  });
});
