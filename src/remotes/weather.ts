import {
  format,
  isAfter,
  setHours,
  setMinutes,
  setSeconds,
  subDays,
} from 'date-fns';

const serviceKey =
  'qKKIJuobdZ%2F4N0r3FHoyFmTpGLitc6HJkKgXHu1V8odSyYoVTGt3yxtMD2A41kZKlezndgD%2BwN%2Bia6v7Ry5s4Q%3D%3D';

export async function getShortTermForecast() {
  const current = new Date();
  const compare = setMinutes(setSeconds(current, 0), 10);

  const todayDate = format(current, 'yyyyMMdd');
  const yesterdayDate = format(subDays(current, 1), 'yyyyMMdd');
  let baseDate = yesterdayDate;
  let baseTime = '2300';

  if (isAfter(current, setHours(compare, 23))) {
    baseTime = '2300';
  } else if (isAfter(current, setHours(compare, 20))) {
    baseTime = '2000';
  } else if (isAfter(current, setHours(compare, 17))) {
    baseTime = '1700';
  } else if (isAfter(current, setHours(compare, 14))) {
    baseTime = '1400';
  } else if (isAfter(current, setHours(compare, 11))) {
    baseTime = '1100';
  } else if (isAfter(current, setHours(compare, 8))) {
    baseTime = '0800';
  } else if (isAfter(current, setHours(compare, 5))) {
    baseTime = '0500';
  } else if (isAfter(current, setHours(compare, 2))) {
    baseTime = '0200';
  } else {
    baseDate = format(subDays(current, 1), 'yyyyMMdd');
    baseTime = '2300';
  }

  const res = await fetch(
    'http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst' +
      `?serviceKey=${serviceKey}` +
      '&dataType=JSON' +
      `&base_date=${baseDate}` +
      `&base_time=${baseTime}` +
      '&nx=60' +
      '&ny=125' +
      '&numOfRows=290',
  );
  const {
    response: {
      body: {
        items: {item},
      },
    },
  } = await res.json();

  const data = item.reduce((acc: any, cur: any) => {
    const {fcstDate, fcstTime, category, fcstValue} = cur;
    if (fcstDate !== todayDate) {
      return acc;
    }

    if (!acc[fcstTime]) {
      acc[fcstTime] = {};
    }

    if (category === 'TMN' || category === 'TMX') {
      acc[category] = fcstValue;
      return acc;
    }

    acc[fcstTime][category] = fcstValue;
    return acc;
  }, {});

  return {
    baseDate,
    baseTime,
    TMN: data.TMN,
    TMX: data.TMX,
    data: Object.keys(data)
      .filter(key => key !== 'TMN' && key !== 'TMX')
      .sort()
      .map(key => ({
        time: key,
        ...data[key],
      })),
  };
}
