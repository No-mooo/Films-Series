import { createSlice } from "@reduxjs/toolkit";

export interface item {
  id: number;
  name: string;
  rating: number;
  type: 'film' | 'series';
  date: string;
  detailText: string;
  src: string;
}

const initialState: item[] = [
  {
      id: 1, 
      name: 'Хоббит нежданное путешествие',
      rating: 9.5,
      type: 'film',
      date: '2022-03-22',
      detailText: `
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur, quia aliquam! Facilis expedita asperiores facere! Ratione veritatis praesentium cupiditate sunt.
      `,
      src: require('../../img/test3.webp'),
  },
  {
      id: 2,
      name: 'Оружейный барон',
      rating: 8,
      date: '2022-07-03',
      type: 'film',
      detailText: `
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur, quia aliquam! Facilis expedita asperiores facere! Ratione veritatis praesentium cupiditate sunt.
      `,
      src: require('../../img/test4.webp'),
  },
  {
      id: 3,
      name: 'Поезд в Пусан',
      rating: 9.2,
      date: '2022-03-12',
      type: 'film',
      detailText: `
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur, quia aliquam! Facilis expedita asperiores facere! Ratione veritatis praesentium cupiditate sunt.
      `,
      src: require('../../img/test5.webp'),
  },
  {
      id: 4,
      name: 'Ночной портье',
      rating: 9.5,
      date: '2022-03-02',
      type: 'film',
      detailText: `
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur, quia aliquam! Facilis expedita asperiores facere! Ratione veritatis praesentium cupiditate sunt.
      `,
      src: require('../../img/test6.webp'),
  },
  {
      id: 5,
      name: 'Побег из тюрьмы Мейз',
      rating: 8,
      date: '2021-09-17',
      type: 'film',
      detailText: `
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur, quia aliquam! Facilis expedita asperiores facere! Ratione veritatis praesentium cupiditate sunt.
      `,
      src: require('../../img/test8.webp'),
  },
  {
      id: 6,
      name: 'Убийства по открыткам',
      rating: 6.6,
      date: '2019-02-03',
      type: 'film',
      detailText: `
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur, quia aliquam! Facilis expedita asperiores facere! Ratione veritatis praesentium cupiditate sunt.
      `,
      src: require('../../img/test9.webp'),
  },
  {
      id: 7,
      name: 'Пассажир',
      rating: 8.2,
      date: '2019-02-03',
      type: 'film',
      detailText: `
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur, quia aliquam! Facilis expedita asperiores facere! Ratione veritatis praesentium cupiditate sunt.
      `,
      src: require('../../img/test11.webp'),
  },
  {
      id: 8,
      name: 'Реальные упыри',
      rating: 6.2,
      date: '2019-02-03',
      type: 'film',
      detailText: `
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur, quia aliquam! Facilis expedita asperiores facere! Ratione veritatis praesentium cupiditate sunt.
      `,
      src: require('../../img/test12.webp'),
  },
  {
      id: 9,
      name: 'Выжить после',
      rating: 9.5,
      date: '2022-03-22',
      type: 'series',
      detailText: `
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur, quia aliquam! Facilis expedita asperiores facere! Ratione veritatis praesentium cupiditate sunt.
      `,
      src: require('../../img/test13.webp'),
  },
  {
      id: 10,
      name: 'Я не робот',
      rating: 8,
      date: '2022-07-03',
      type: 'series',
      detailText: `
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur, quia aliquam! Facilis expedita asperiores facere! Ratione veritatis praesentium cupiditate sunt.
      `,
      src: require('../../img/test14.webp'),
  },
  {
      id: 11,
      name: 'Кухня. Война за отель',
      rating: 9.2,
      date: '2022-03-12',
      type: 'series',
      detailText: `
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur, quia aliquam! Facilis expedita asperiores facere! Ratione veritatis praesentium cupiditate sunt.
      `,
      src: require('../../img/test15.webp'),
  },
  {
      id: 12,
      name: 'За час до рассвета',
      rating: 9.5,
      date: '2022-03-02',
      type: 'series',
      detailText: `
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur, quia aliquam! Facilis expedita asperiores facere! Ratione veritatis praesentium cupiditate sunt.
      `,
      src: require('../../img/test16.webp'),
  },
  {
      id: 13,
      name: 'Погнали',
      rating: 8,
      date: '2021-09-17',
      type: 'series',
      detailText: `
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur, quia aliquam! Facilis expedita asperiores facere! Ratione veritatis praesentium cupiditate sunt.
      `,
      src: require('../../img/test17.webp'),
  },
  {
      id: 14,
      name: 'HouseBroken',
      rating: 9.2,
      date: '2022-01-01',
      type: 'series',
      detailText: `
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur, quia aliquam! Facilis expedita asperiores facere! Ratione veritatis praesentium cupiditate sunt.
      `,
      src: require('../../img/test18.webp'),
  },
  {
      id: 15,
      name: 'Правда о деле Гарри Квеберта',
      rating: 6.6,
      date: '2019-02-03',
      type: 'series',
      detailText: `
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur, quia aliquam! Facilis expedita asperiores facere! Ratione veritatis praesentium cupiditate sunt.
      `,
      src: require('../../img/test19.webp'),
  },
  {
      id: 16,
      name: 'Великолепный век. Империя Кесем',
      rating: 7,
      date: '2019-02-03',
      type: 'series',
      detailText: `
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur, quia aliquam! Facilis expedita asperiores facere! Ratione veritatis praesentium cupiditate sunt.
      `,
      src: require('../../img/test20.webp'),
  },
  {
      id: 17,
      name: 'Достать коротышку',
      rating: 8.2,
      date: '2019-02-03',
      type: 'series',
      detailText: `
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur, quia aliquam! Facilis expedita asperiores facere! Ratione veritatis praesentium cupiditate sunt.
      `,
      src: require('../../img/test21.webp'),
  },
  {
      id: 18,
      name: 'Странный ангел',
      rating: 6.2,
      date: '2015-02-03',
      type: 'series',
      detailText: `
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur, quia aliquam! Facilis expedita asperiores facere! Ratione veritatis praesentium cupiditate sunt.
      `,
      src: require('../../img/test22.webp'),
  },

  {
    id: 19,
    name: 'Ледяной капкан',
    rating: 9.2,
    date: '2022-01-01',
    type: 'film',
    detailText: `
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur, quia aliquam! Facilis expedita asperiores facere! Ratione veritatis praesentium cupiditate sunt.
    `,
    src: require('../../img/test7.webp'),
  },
  {
    id: 20,
    name: 'Мой папа — супергерой',
    rating: 7,
    date: '2019-02-03',
    type: 'film',
    detailText: `
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur, quia aliquam! Facilis expedita asperiores facere! Ratione veritatis praesentium cupiditate sunt.
    `,
    src: require('../../img/test10.webp'),
},
];

export const listItems = createSlice({
  name: 'listItems',
  initialState,
  reducers: {

  }
})

export default listItems.reducer;