const fetch = require('node-fetch');
require('dotenv').config();
const xml2js = require('xml2js');
const mongoose = require('mongoose');
const Mountain = require('../models/Mountain');
const { databaseURL, publicAPIkey } = require('../config/index');

const ServiceKey = publicAPIkey;
mongoose.connect(
  databaseURL,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  },
  async (err) => {
    if (err) throw err;
    console.log('Successfully linked');
  },
);

const url = 'http://openapi.forest.go.kr/openapi/service/trailInfoService/getforeststoryservice';

let mountainDatas = [];

const getData = async (mountainName) => {
  let queryParams = `?${encodeURIComponent('ServiceKey')}=${ServiceKey}`; /* Service Key */
  queryParams += `&${encodeURIComponent('mntnNm')}=${encodeURIComponent(mountainName)}`; /* */

  const response = await fetch(url + queryParams, {
    method: 'GET',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
  });

  try {
    let xmlString = await response.text();
    xmlString = xmlString.replace('\ufeff', '');

    xml2js.parseString(xmlString, async (err, result) => {
      if (err) throw err;
      const res = await result.response;
      const data = res.body[0].items[0].item[0];
      console.log(`['${data.mntnid}', '${data.mntnnm}', '${data.mntninfohght}', '${data.mntninfomangrtlno}',
        '${data.mntninfopoflc}', '${data.mntninfodtlinfocont}']`);
      return data;
    });
  } catch (err) {
    console.log(err);
  }
};

const saveDatasToArray = async () => {
  mountainDatas = mountains.map(async (mountain) => {
    try {
      const data = await getData(mountain);
      const res = await Promise.all([
        new Promise((resolve) => () => resolve(data.mntnnm)),
        new Promise((resolve) => () => resolve(data.mntnid)),
        new Promise((resolve) => () => resolve(data.mntninfohght)),
        new Promise((resolve) => () => resolve(data.mntninfomangrtlno)),
        new Promise((resolve) => () => resolve(data.mntninfopoflc)),
        new Promise((resolve) => () => resolve(data.mntninfodtlinfocont)),
      ]);

      console.log(res);
      return {
        mountainName: data.mntnnm,
        mountainID: data.mntnid,
        mountainHeight: data.mntninfohght,
        mountainTel: data.mntninfomangrtlno,
        mountainAddress: data.mntninfopoflc,
        mountainIntroduction: data.mntninfodtlinfocont,
      };
    } catch (err) {
      console.log('something went wrong');
      console.log(err);
      return new Error();
    }
  });

  return mountainDatas;
};

const saveDataToDatabase = (datas) => {
  datas.forEach(async (data) => {
    const mountain = new Mountain({
      name: data[1],
      elevation: data[2],
      mountainID: data[0],
      responsibles: data[3],
      address: data[4],
      description: data[5],
    });

    try {
      console.log('Okay now trying...');
      const savedMountain = await mountain.save();
      console.log(`saved Mountain: ${savedMountain}`);
    } catch (err) {
      console.log('Something went wrong...');
      console.log(err);
    }
  });

  console.log('DONE');
};
