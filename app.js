// настраиваем сервер
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const { json } = require('sequelize');
const { Information } = require('./db/models');

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'client/build')));

//endpoint, который выводит данные из БД на клиентскую часть
app.get('/data', async (req, res) => {
  try {
    const result = await Information.findAll();
    res.json(result);
  } catch (error) {
    return json(error);
  }
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build/index.html'));
});

// запускаем сервер
app.listen(process.env.PORT, () => {
  console.log('Server is running', process.env.PORT);
});
