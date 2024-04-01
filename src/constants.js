import p301427688 from './assets/products/301427688.webp';
import p301427768 from './assets/products/301427768.webp';
import p270450021 from './assets/products/270450021.webp';
import p57203739 from './assets/products/57203739.webp';
import p373561911 from './assets/products/373561911.webp';
import p373562781 from './assets/products/373562781.webp';
import p197259 from './assets/products/197259.webp';
import p215226661 from './assets/products/215226661.webp';
import p256597571 from './assets/products/256597571.webp';

import banner from './assets/banner/banner.jpg';
import banner2 from './assets/banner/banner2.jpg';
import banner3 from './assets/banner/banner3.webp';
import banner4 from './assets/banner/banner4.jpg';

import ocean_flat from './assets/boilers/ocean_flat/ocean_flat.webp';
import ocean_cube from './assets/boilers/ocean_cube/ocean_cube.webp';
import ocean_flat_digital from './assets/boilers/ocean_flat_digital/ocean_flat_digital.webp';
import ocean_flat_basic from './assets/boilers/ocean_flat_basic/ocean_flat_basic.webp';
import ocean_pro from './assets/boilers/ocean_pro/ocean_pro.webp';
import ocean_mini from './assets/boilers/ocean_mini/ocean_mini.webp';
import novatek from './assets/boilers/ocean_pro/ocean_pro.webp';

import id30347_30348_30349 from './assets/boilers/ocean_flat/30347_30348_30349.webp';
import id30347_30348_30349_2 from './assets/boilers/ocean_flat/30347_30348_30349_2.webp';
import id30347_30348_30349_3 from './assets/boilers/ocean_flat/30347_30348_30349_3.webp';
import id30347_30348_30349_4 from './assets/boilers/ocean_flat/30347_30348_30349_4.webp';
import id30347_30348_30349_5 from './assets/boilers/ocean_flat/30347_30348_30349_5.webp';

import id27928_27929_27930 from './assets/boilers/ocean_flat/27928_27929_27930.webp';
import id27928_27929_27930_2 from './assets/boilers/ocean_flat/27928_27929_27930_2.webp';
import id27928_27929_27930_3 from './assets/boilers/ocean_flat/27928_27929_27930_3.webp';
import id27928_27929_27930_4 from './assets/boilers/ocean_flat/27928_27929_27930_4.webp';
import id27928_27929_27930_5 from './assets/boilers/ocean_flat/27928_27929_27930_5.webp';
import id27928_27929_27930_6 from './assets/boilers/ocean_flat/27928_27929_27930_6.webp';

import id37188_37190_37191_37192_37193_37194 from './assets/boilers/ocean_cube/37188_37190_37191_37192_37193_37194.webp';
import id37188_37190_37191_37192_37193_37194_2 from './assets/boilers/ocean_cube/37188_37190_37191_37192_37193_37194_2.webp';
import id37188_37190_37191_37192_37193_37194_3 from './assets/boilers/ocean_cube/37188_37190_37191_37192_37193_37194_3.webp';
import id37188_37190_37191_37192_37193_37194_4 from './assets/boilers/ocean_cube/37188_37190_37191_37192_37193_37194_4.webp';
import id37188_37190_37191_37192_37193_37194_5 from './assets/boilers/ocean_cube/37188_37190_37191_37192_37193_37194_5.webp';
import id37188_37190_37191_37192_37193_37194_6 from './assets/boilers/ocean_cube/37188_37190_37191_37192_37193_37194_6.webp';

import toolset from './assets/subcategories/toolset.jpg';
import screwdrivers from './assets/subcategories/screwdrivers.jpg';
import hammers from './assets/subcategories/hammers.jpg';

import vests from './assets/subcategories/vests.webp';
import pants from './assets/subcategories/paints.jpg';
import jackets from './assets/subcategories/jackets.webp';

import drills from './assets/subcategories/drills.jpg';
import grinders from './assets/subcategories/grinders.jpg';
import jigsaws from './assets/subcategories/jigsaws.jpg';

export const categories = [
  {
    name: 'Бойлери',
    linkName: 'boilers',
    subcategories: [
      {
        name: 'Водонагрівачі OCEAN FLAT',
        linkName: 'ocean_flat',
        image: ocean_flat,
      },
      {
        name: 'Водонагрівачі OCEAN CUBE',
        linkName: 'ocean_cube',
        image: ocean_cube,
      },
      {
        name: 'Водонагрівачі OCEAN FLAT серії Digital',
        linkName: 'ocean_flat_digital',
        image: ocean_flat_digital,
      },
      {
        name: 'Бойлер OCEAN FLAT BASIC',
        linkName: 'ocean_flat_basic',
        image: ocean_flat_basic,
      },
      {
        name: 'Водонагрівачі OCEAN PRO квадратні',
        linkName: 'ocean_pro',
        image: ocean_pro,
      },
      {
        name: 'Водонагрівачі OCEAN MINI',
        linkName: 'ocean_mini',
        image: ocean_mini,
      },
      {
        name: 'Водонагрівачі Новатек',
        linkName: 'novatek',
        image: novatek,
        types: [{ name: 'Серия мокрый ТЕН' }, { name: 'Серия сухой ТЕН' }],
      },
    ],
  },
  {
    name: 'Ручні інструменти',
    subcategories: [
      {
        name: 'Набір інструментів',
        linkName: 'set_of_tools',
        image: toolset,
      },
      { name: 'Викрутки', image: screwdrivers },
      { name: 'Молотки', image: hammers },
    ],
  },
  {
    name: 'Спецодяг',
    subcategories: [
      { name: 'Жилети', image: vests },
      { name: 'Штани', image: pants },
      { name: 'Куртки', image: jackets },
    ],
  },
  {
    name: 'Електроінструменти',
    subcategories: [
      { name: 'Шурупокрути', image: drills },
      { name: 'Шліфмашини', image: grinders },
      { name: 'Електролобзики', image: jigsaws },
    ],
  },
];

export const mockedProductsList = [
  {
    id: '30347',
    images: [
      id30347_30348_30349,
      id30347_30348_30349_2,
      id30347_30348_30349_3,
      id30347_30348_30349_4,
      id30347_30348_30349_5,
    ],
    alt: 'Бойлер OCEAN FLAT 50л 2,0 КВт емальований бак сухий ТЕН',
    title: 'Бойлер OCEAN FLAT 50л 2,0 КВт емальований бак сухий ТЕН',
    price: 6772,
    quantity: 2,
    discount: 0,
    subcategory: 'Водонагрівачі OCEAN FLAT',
    dateAdded: '2024-03-23',
  },
  {
    id: '30348',
    images: [
      id30347_30348_30349,
      id30347_30348_30349_2,
      id30347_30348_30349_3,
      id30347_30348_30349_4,
      id30347_30348_30349_5,
    ],
    alt: 'Бойлер OCEAN FLAT 80л 2,0 КВт эмалированный бак сухой ТЭН',
    title: 'Бойлер OCEAN FLAT 80л 2,0 КВт эмалированный бак сухой ТЭН',
    price: 216,
    quantity: 0,
    discount: 10,
    subcategory: 'Водонагрівачі OCEAN FLAT',
    dateAdded: '2024-01-19',
  },
  {
    id: '30349',
    images: [
      id30347_30348_30349,
      id30347_30348_30349_2,
      id30347_30348_30349_3,
      id30347_30348_30349_4,
      id30347_30348_30349_5,
    ],
    alt: 'Бойлер OCEAN FLAT 100л 2,0 КВт эмалированный бак сухой ТЭН',
    title: 'Бойлер OCEAN FLAT 100л 2,0 КВт эмалированный бак сухой ТЭН',
    price: 9385,
    quantity: 1,
    discount: 0,
    subcategory: 'Водонагрівачі OCEAN FLAT',
    dateAdded: '2022-07-05',
  },
  {
    id: '27928',
    images: [
      id27928_27929_27930,
      id27928_27929_27930_2,
      id27928_27929_27930_3,
      id27928_27929_27930_4,
      id27928_27929_27930_5,
      id27928_27929_27930_6,
    ],
    alt: 'Бойлер OCEAN FLAT 50л 2,0 КВт эмалированный бак мокрый ТЭН',
    title: 'Бойлер OCEAN FLAT 50л 2,0 КВт эмалированный бак мокрый ТЭН',
    price: 6296,
    quantity: 1,
    discount: 0,
    subcategory: 'Водонагрівачі OCEAN FLAT',
    dateAdded: '2024-01-19',
  },
  {
    id: '27929',
    images: [
      id27928_27929_27930,
      id27928_27929_27930_2,
      id27928_27929_27930_3,
      id27928_27929_27930_4,
      id27928_27929_27930_5,
      id27928_27929_27930_6,
    ],
    alt: 'Бойлер OCEAN FLAT 80л 2,0 КВт эмалированный бак мокрый ТЭН',
    title: 'Бойлер OCEAN FLAT 80л 2,0 КВт эмалированный бак мокрый ТЭН',
    price: 7643,
    quantity: 1,
    discount: 0,
    subcategory: 'Водонагрівачі OCEAN FLAT',
    dateAdded: '2023-01-19',
  },
  {
    id: '27930',
    images: [
      id27928_27929_27930,
      id27928_27929_27930_2,
      id27928_27929_27930_3,
      id27928_27929_27930_4,
      id27928_27929_27930_5,
      id27928_27929_27930_6,
    ],
    alt: 'Бойлер OCEAN FLAT 100л 2,0 КВт эмалированный бак мокрый ТЭН',
    title: 'Бойлер OCEAN FLAT 100л 2,0 КВт эмалированный бак мокрый ТЭН',
    price: 8910,
    quantity: 1,
    discount: 0,
    subcategory: 'Водонагрівачі OCEAN FLAT',
    dateAdded: '2024-01-19',
  },
  {
    id: '37188',
    images: [
      id37188_37190_37191_37192_37193_37194,
      id37188_37190_37191_37192_37193_37194_2,
      id37188_37190_37191_37192_37193_37194_3,
      id37188_37190_37191_37192_37193_37194_4,
      id37188_37190_37191_37192_37193_37194_5,
      id37188_37190_37191_37192_37193_37194_6,
    ],
    alt: 'Бойлер OCEAN 50л мокрый тен + УЗО CUBE RZF50D-4 ET+WT',
    title: 'Бойлер OCEAN 50л мокрый тен + УЗО CUBE RZF50D-4 ET+WT',
    price: 6653,
    quantity: 1,
    discount: 0,
    subcategory: 'Водонагрівачі OCEAN CUBE',
    dateAdded: '2024-03-29',
  },
  {
    id: '37190',
    images: [
      id37188_37190_37191_37192_37193_37194,
      id37188_37190_37191_37192_37193_37194_2,
      id37188_37190_37191_37192_37193_37194_3,
      id37188_37190_37191_37192_37193_37194_4,
      id37188_37190_37191_37192_37193_37194_5,
      id37188_37190_37191_37192_37193_37194_6,
    ],
    alt: 'Бойлер OCEAN 80л мокрый тен + УЗО CUBE RZF80D-4 ET+WT',
    title: 'Бойлер OCEAN 80л мокрый тен + УЗО CUBE RZF80D-4 ET+WT',
    price: 7603,
    quantity: 1,
    discount: 0,
    subcategory: 'Водонагрівачі OCEAN CUBE',
    dateAdded: '2024-03-29',
  },
  {
    id: '37191',
    images: [
      id37188_37190_37191_37192_37193_37194,
      id37188_37190_37191_37192_37193_37194_2,
      id37188_37190_37191_37192_37193_37194_3,
      id37188_37190_37191_37192_37193_37194_4,
      id37188_37190_37191_37192_37193_37194_5,
      id37188_37190_37191_37192_37193_37194_6,
    ],
    alt: 'Бойлер OCEAN 100л мокрый тен + УЗО CUBE RZF100D-4 ET+WT',
    title: 'Бойлер OCEAN 100л мокрый тен + УЗО CUBE RZF100D-4 ET+WT',
    price: 8316,
    quantity: 1,
    discount: 0,
    subcategory: 'Водонагрівачі OCEAN CUBE',
    dateAdded: '2024-03-29',
  },
  {
    id: '37192',
    images: [
      id37188_37190_37191_37192_37193_37194,
      id37188_37190_37191_37192_37193_37194_2,
      id37188_37190_37191_37192_37193_37194_3,
      id37188_37190_37191_37192_37193_37194_4,
      id37188_37190_37191_37192_37193_37194_5,
      id37188_37190_37191_37192_37193_37194_6,
    ],
    alt: 'Бойлер OCEAN 50л сухой тен+ УЗО CUBE RZF50D-4 ET+DT',
    title: 'Бойлер OCEAN 50л сухой тен+ УЗО CUBE RZF50D-4 ET+DT',
    price: 6950,
    quantity: 1,
    discount: 0,
    subcategory: 'Водонагрівачі OCEAN CUBE',
    dateAdded: '2024-03-29',
  },
  {
    id: '37193',
    images: [
      id37188_37190_37191_37192_37193_37194,
      id37188_37190_37191_37192_37193_37194_2,
      id37188_37190_37191_37192_37193_37194_3,
      id37188_37190_37191_37192_37193_37194_4,
      id37188_37190_37191_37192_37193_37194_5,
      id37188_37190_37191_37192_37193_37194_6,
    ],
    alt: 'Бойлер OCEAN 80л сухой тен + УЗО CUBE RZF80D-4 ET+DT',
    title: 'Бойлер OCEAN 80л сухой тен + УЗО CUBE RZF80D-4 ET+DT',
    price: 7834,
    quantity: 1,
    discount: 0,
    subcategory: 'Водонагрівачі OCEAN CUBE',
    dateAdded: '2024-03-29',
  },
  {
    id: '37194',
    images: [
      id37188_37190_37191_37192_37193_37194,
      id37188_37190_37191_37192_37193_37194_2,
      id37188_37190_37191_37192_37193_37194_3,
      id37188_37190_37191_37192_37193_37194_4,
      id37188_37190_37191_37192_37193_37194_5,
      id37188_37190_37191_37192_37193_37194_6,
    ],
    alt: 'Бойлер OCEAN 100л сухой тен + УЗО CUBE RZF100D-4 ET+DT',
    title: 'Бойлер OCEAN 100л сухой тен + УЗО CUBE RZF100D-4 ET+DT',
    price: 8507,
    quantity: 1,
    discount: 0,
    subcategory: 'Водонагрівачі OCEAN CUBE',
    dateAdded: '2024-03-29',
  },
  {
    id: '301427688',
    images: [p301427688],
    alt: 'Набір ручних інструментів WMC TOOLS 100 предметів',
    title: 'Набір ручних інструментів WMC TOOLS 100 предметів',
    price: 1048,
    quantity: 1,
    discount: 0,
    subcategory: 'Набір інструментів',
    dateAdded: '2023-12-29',
  },
  {
    id: '270450021',
    images: [p270450021],
    alt: 'Набір інструментів Intertool Cr-V Storm 1/2" & 1/4" 100 предметів (ET-8100)',
    title:
      'Набір інструментів Intertool Cr-V Storm 1/2" & 1/4" 100 предметів (ET-8100)',
    price: 2258,
    quantity: 1,
    discount: 3,
    subcategory: 'Набір інструментів',
    dateAdded: '2024-03-07',
  },
  {
    id: '301427768',
    images: [p301427768],
    alt: 'Набір інструментів WMC TOOLS 130 шт.',
    title: 'Набір інструментів WMC TOOLS 130 шт.',
    price: 859,
    quantity: 1,
    discount: 0,
    subcategory: 'Набір інструментів',
    dateAdded: '2022-02-21',
  },
  {
    id: '57203739',
    images: [p57203739],
    alt: 'Жилет безпеки Lavita LA 171600',
    title: 'Жилет безпеки Lavita LA 171600',
    price: 125,
    quantity: 1,
    discount: 0,
    subcategory: 'Жилети',
    dateAdded: '2023-10-15',
  },
  {
    id: '373561911',
    images: [p373561911],
    alt: 'Штани робочі Ardon Cool Trend 46 Синьо-чорні',
    title: 'Штани робочі Ardon Cool Trend 46 Синьо-чорні',
    price: 1093,
    quantity: 1,
    discount: 0,
    subcategory: 'Штани',
    dateAdded: '2022-11-18',
  },
  {
    id: '373562781',
    images: [p373562781],
    alt: 'Куртка робоча Insight WALTER L Сіро-чорна',
    title: 'Куртка робоча Insight WALTER L Сіро-чорна',
    price: 711,
    quantity: 1,
    discount: 0,
    subcategory: 'Куртки',
    dateAdded: '2023-09-12',
  },
  {
    id: '197259',
    images: [p197259],
    alt: 'Мережевий шуруповерт Зенит Профи ЗШ-550',
    title: 'Мережевий шуруповерт Зенит Профи ЗШ-550',
    price: 1112,
    quantity: 1,
    discount: 5,
    subcategory: 'Шурупокрути',
    dateAdded: '2023-12-17',
  },
  {
    id: '215226661',
    images: [p215226661],
    alt: 'Кутова шліфмашина Metabo WEV 11-125 Quick',
    title: 'Кутова шліфмашина Metabo WEV 11-125 Quick',
    price: 4335,
    quantity: 1,
    discount: 0,
    subcategory: 'Шліфмашини',
    dateAdded: '2023-07-02',
  },
  {
    id: '256597571',
    images: [p256597571],
    alt: 'Лобзик електричний Tekhmann TJS-800 MR',
    title: 'Лобзик електричний Tekhmann TJS-800 MR',
    price: 2550,
    quantity: 1,
    discount: 0,
    subcategory: 'Електролобзики',
    dateAdded: '2023-10-20',
  },
];

// export const categories = [
//   'Фарби, лаки, клеї',
//   'Ручні інструменти',
//   'Спецодяг',
//   'Електроінструменти',
// ];

export const banners = [
  {
    title: 'ТОП-товари',
    image: banner,
    route: '/masterok/tools',
    class: 'tools',
  },
  {
    title: 'Знижки',
    image: banner2,
    route: '/masterok/discounted-products',
    class: 'discountedProduct',
  },
  {
    title: 'Новинки',
    image: banner3,
    route: '/masterok/novelty',
    class: 'novelty',
  },
  {
    title: 'Популярне',
    image: banner4,
    route: '/masterok/popular',
    class: 'popular',
  },
];

export const PLACEHOLDER_LABELS = {
  SEARCH_PLACEHOLDER: 'Я шукаю ...',
};

export const BUTTON_LABELS = {
  BUTTON_SEARCH: 'Знайти',
  BUTTON_CATALOG: 'Каталог товарів',
  BUTTON_LOGOUT: 'Logout',
  BUTTON_REGISTRATION: 'Registration',
  BUTTON_LOGIN: 'Login',
};

export const breadcrumbLinks = {
  '/masterok': 'Головна',
  '/masterok/about': 'Про компанію',
  '/masterok/discounted-products': 'Знижки',
  '/masterok/novelty': 'Новинки',
  '/masterok/delivery-info': 'Умови оплати та доставки',
  '/masterok/favorites': 'Список бажань',
  '/masterok/basket': 'Кошик',
  '/masterok/catalog': 'Каталог',
  '/masterok/catalog/boilers_ocean_flat': 'Водонагрівачі OCEAN FLAT',
};

export const navbarLinks = [
  {
    link: '/masterok/',
    name: 'Головна',
  },
  {
    link: '/masterok/about',
    name: 'Про компанію',
  },
  {
    link: '/masterok/discounted-products',
    name: 'Знижки',
  },
  {
    link: '/masterok/novelty',
    name: 'Новинки',
  },
  {
    link: '/masterok/delivery-info',
    name: 'Умови оплати та доставки',
  },
];

export const foterNavLinks = [
  {
    link: '/masterok/about',
    name: 'Про компанію',
  },
  {
    link: '/masterok/contacts',
    name: 'Контакти',
  },
  {
    link: '/masterok/delivery-info',
    name: 'Умови оплати та доставки',
  },
];

export const svgOption = {
  DEFAULT_SIZE: 25,
  DEFAULT_COLOR: '#ffffff',
};
