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
    name: 'Водонагрівачі',
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

export const banners = [
  {
    title: 'ТОП-товари',
    image: banner,
    route: '/tools',
    class: 'tools',
  },
  {
    title: 'Акції',
    image: banner2,
    route: '/sale',
    class: 'discountedProduct',
  },
  {
    title: 'Новинки',
    image: banner3,
    route: '/novelty',
    class: 'novelty',
  },
  {
    title: 'Популярне',
    image: banner4,
    route: '/popular',
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
  '/': 'Головна',
  '/about': 'Про компанію',
  '/contacts': 'Контактна інформація',
  '/sale': 'Знижки',
  '/novelty': 'Новинки',
  '/delivery-info': 'Умови оплати та доставки',
  '/favorites': 'Список бажань',
  '/basket': 'Кошик',
  '/catalog': 'Каталог',
  '/catalog/boilers': 'Водонагрівачі',
  '/catalog/ocean_flat': 'Водонагрівачі OCEAN FLAT',
};

export const navbarLinks = [
  {
    link: '/',
    name: 'Головна',
  },
  {
    link: '/about',
    name: 'Про компанію',
  },
  {
    link: '/sale',
    name: 'Знижки',
  },
  {
    link: '/novelty',
    name: 'Новинки',
  },
  {
    link: '/delivery-info',
    name: 'Умови оплати та доставки',
  },
];

export const foterNavLinks = [
  {
    link: '/about',
    name: 'Про компанію',
  },
  {
    link: '/contacts',
    name: 'Контакти',
  },
  {
    link: '/delivery-info',
    name: 'Умови оплати та доставки',
  },
];

export const messengers = (url) => [
  {
    icon: 'whatsapp',
    link: `https://api.whatsapp.com/send?text=${encodeURIComponent(url)}`,
  },
  {
    icon: 'telegram',
    link: `https://t.me/share/url?url=${encodeURIComponent(url)}`,
  },
  {
    icon: 'facebook',
    link: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      url,
    )}`,
  },
  {
    icon: 'gmail',
    link: `https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=&su=Your%20Subject&body=${encodeURIComponent(
      url,
    )}&ui=2&tf=1&pli=1`,
  },
  {
    icon: 'skype',
    link: `https://web.skype.com/share?url=${encodeURIComponent(url)}`,
  },
  {
    icon: 'twitter',
    link: `https://twitter.com/intent/tweet?url=${encodeURIComponent(
      url,
    )}&text=Check%20this%20out!`,
  },
];

export const svgOption = {
  DEFAULT_SIZE: 25,
  DEFAULT_COLOR: '#ffffff',
};
