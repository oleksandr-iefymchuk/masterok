import p303370823 from './assets/products/303370823.webp';
import p303371093 from './assets/products/303371093.webp';
import p414763323 from './assets/products/414763323.webp';
import p301427688 from './assets/products/301427688.webp';
import p301427768 from './assets/products/301427768.webp';
import p270450021 from './assets/products/270450021.webp';
import p57203739 from './assets/products/57203739.webp';
import p373561911 from './assets/products/373561911.webp';
import p373562781 from './assets/products/373562781.webp';
import p197259 from './assets/products/197259.webp';
import p215226661 from './assets/products/215226661.webp';
import p256597571 from './assets/products/256597571.webp';

import tools from './assets/banner/banner.jpg';
import discountedProducts from './assets/banner/banner2.jpg';
import novelty from './assets/banner/banner3.webp';
import popular from './assets/banner/banner4.jpg';

export const mockedProductsList = [
  {
    id: '303370823',
    image: p303370823,
    alt: "Фарба інтер'єрна акрилова мийна TRIORA 1.4 кг Біла",
    title: "Фарба інтер'єрна акрилова мийна TRIORA 1.4 кг Біла",
    price: 137,
    quantity: 2,
    discount: 10,
    category: 'Фарби, лаки, клеї',
    dateAdded: '2024-03-23',
  },
  {
    id: '303371093',
    image: p303371093,
    alt: 'Фарба для стель і стін Ruta White 1.4 кг Біла',
    title: 'Фарба для стель і стін Ruta White 1.4 кг Біла',
    price: 90,
    quantity: 0,
    discount: 5,
    category: 'Фарби, лаки, клеї',
    dateAdded: '2022-07-05',
  },
  {
    id: '414763323',
    image: p414763323,
    alt: 'Фарба гумова структурна РабберФлекс SkyLine Біла 1.4 кг',
    title: 'Фарба гумова структурна РабберФлекс SkyLine Біла 1.4 кг',
    price: 216,
    quantity: 1,
    discount: 10,
    category: 'Фарби, лаки, клеї',
    dateAdded: '2024-01-19',
  },
  {
    id: '301427688',
    image: p301427688,
    alt: 'Набір ручних інструментів WMC TOOLS 100 предметів',
    title: 'Набір ручних інструментів WMC TOOLS 100 предметів',
    price: 1048,
    quantity: 1,
    discount: 0,
    category: 'Інструменти',
    dateAdded: '2023-12-29',
  },
  {
    id: '270450021',
    image: p270450021,
    alt: 'Набір інструментів Intertool Cr-V Storm 1/2" & 1/4" 100 предметів (ET-8100)',
    title:
      'Набір інструментів Intertool Cr-V Storm 1/2" & 1/4" 100 предметів (ET-8100)',
    price: 2258,
    quantity: 1,
    discount: 3,
    category: 'Інструменти',
    dateAdded: '2024-03-07',
  },
  {
    id: '301427768',
    image: p301427768,
    alt: 'Набір інструментів WMC TOOLS 130 шт.',
    title: 'Набір інструментів WMC TOOLS 130 шт.',
    price: 859,
    quantity: 1,
    discount: 0,
    category: 'Інструменти',
    dateAdded: '2022-02-21',
  },
  {
    id: '57203739',
    image: p57203739,
    alt: 'Жилет безпеки Lavita LA 171600',
    title: 'Жилет безпеки Lavita LA 171600',
    price: 125,
    quantity: 1,
    discount: 0,
    category: 'Спецодяг',
    dateAdded: '2023-10-15',
  },
  {
    id: '373561911',
    image: p373561911,
    alt: 'Штани робочі Ardon Cool Trend 46 Синьо-чорні',
    title: 'Штани робочі Ardon Cool Trend 46 Синьо-чорні',
    price: 1093,
    quantity: 1,
    discount: 0,
    category: 'Спецодяг',
    dateAdded: '2022-11-18',
  },
  {
    id: '373562781',
    image: p373562781,
    alt: 'Куртка робоча Insight WALTER L Сіро-чорна',
    title: 'Куртка робоча Insight WALTER L Сіро-чорна',
    price: 711,
    quantity: 1,
    discount: 0,
    category: 'Спецодяг',
    dateAdded: '2023-09-12',
  },
  {
    id: '197259',
    image: p197259,
    alt: 'Мережевий шуруповерт Зенит Профи ЗШ-550',
    title: 'Мережевий шуруповерт Зенит Профи ЗШ-550',
    price: 1112,
    quantity: 1,
    discount: 5,
    category: 'Електроінструменти',
    dateAdded: '2023-12-17',
  },
  {
    id: '215226661',
    image: p215226661,
    alt: 'Кутова шліфмашина Metabo WEV 11-125 Quick',
    title: 'Кутова шліфмашина Metabo WEV 11-125 Quick',
    price: 4335,
    quantity: 1,
    discount: 0,
    category: 'Електроінструменти',
    dateAdded: '2023-07-02',
  },
  {
    id: '256597571',
    image: p256597571,
    alt: 'Лобзик електричний Tekhmann TJS-800 MR',
    title: 'Лобзик електричний Tekhmann TJS-800 MR',
    price: 2550,
    quantity: 1,
    discount: 0,
    category: 'Електроінструменти',
    dateAdded: '2023-10-20',
  },
];

export const banners = [
  {
    title: 'ТОП-товари',
    image: tools,
    route: '/masterok/tools',
    class: 'tools',
  },
  {
    title: 'Знижки',
    image: discountedProducts,
    route: '/masterok/discounted-products',
    class: 'discountedProducts',
  },
  {
    title: 'Новинки',
    image: novelty,
    route: '/masterok/novelty',
    class: 'novelty',
  },
  {
    title: 'Популярне',
    image: popular,
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

export const breadcrumbLinks = [
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
  {
    link: '/masterok/basket',
    name: 'Кошик',
  },
  {
    link: '/masterok/order',
    name: 'Оформлення замовлення',
  },
  {
    link: '/masterok/favorites',
    name: 'Список бажань',
  },
];

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

export const categories = [
  'Фарби, лаки, клеї',
  'Інструменти',
  'Спецодяг',
  'Електроінструменти',
];
