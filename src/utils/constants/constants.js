////////header/////
import slide from '../../assets/img/header/slide.png'
import slide2 from '../../assets/img/header/slide2.png'
import slide3 from '../../assets/img/header/slide3.png'
import slide4 from '../../assets/img/header/slide4.svg'
import bday from '../../assets/bday.svg'
import holiday from '../../assets/holiday.png'
import holiday2 from '../../assets/holiday2.png'
import holiday3 from '../../assets/holiday3.png'
import holiday4 from '../../assets/holiday4.png'
import holiday5 from '../../assets/holiday5.png'
import news from '../../assets/news.png'
import card from '../../assets/card.png'
import card2 from '../../assets/card2.png'
import card3 from '../../assets/card3.png'
import card4 from '../../assets/card4.png'
import card5 from '../../assets/card5.png'
import card6 from '../../assets/card6.png'
import popular from '../../assets/img/popular/popular.png'
import popular2 from '../../assets/img/popular/popular2.png'
import popular3 from '../../assets/img/popular/popular3.png'
import popular4 from '../../assets/img/popular/popular4.png'
import popular5 from '../../assets/img/popular/popular5.png'

import bag from '../../assets/bag.svg'
import phone from '../../assets/phone.svg'
import place from '../../assets/place.svg'
///////гарантияяя///////
import guarantee from '../../assets/guarantee.jpg'
import guarantee2 from '../../assets/guarantee2.jpg'
import guarantee3 from '../../assets/guarantee3.jpg'
///////поставки////////
import suplples2 from '../../assets/img/supplies/suplples2.png'
import suplples3 from '../../assets/img/supplies/suplples3.png'
import suplples4 from '../../assets/img/supplies/suplples4.png'
import suplples5 from '../../assets/img/supplies/suplples5.png'
import suplples6 from '../../assets/img/supplies/suplples6.png'
import suplples7 from '../../assets/img/supplies/suplples7.png'
import suplples8 from '../../assets/img/supplies/suplples8.png'
import suplples9 from '../../assets/img/supplies/suplples9.png'
import suplples10 from '../../assets/img/supplies/suplples10.png'
import suplples11 from '../../assets/img/supplies/suplples11.png'
import suplples12 from '../../assets/img/supplies/suplples12.png'
import foot from '../../assets/img/supplies/foot.svg'
import foot2 from '../../assets/img/supplies/foot2.svg'
import foot3 from '../../assets/img/supplies/foot3.svg'
import foot4 from '../../assets/img/supplies/foot4.svg'
////////каталог десертов//////
import catalog2 from '../../assets/img/desertsCatalog/catalog2.png'
import catalog3 from '../../assets/img/desertsCatalog/catalog3.png'
import catalog4 from '../../assets/img/desertsCatalog/catalog4.png'

///////about/////////////
import about from '../../assets/img/about/about.png'
import about2 from '../../assets/img/about/about2.png'
import about3 from '../../assets/img/about/about3.png'
import about4 from '../../assets/img/about/about4.png'
///////footer///////
import footer from '../../assets/img/footer/footer.png'
import footer2 from '../../assets/img/footer/footer2.png'
import footer3 from '../../assets/img/footer/footer3.png'
/////////путь////////
export const INITIAL_PATH = {
    main_page: '/',
    guarantee: '/guarantee',
    podarochnye_nabory: '/podarochnye_nabory',
    deserty_dlya_kofejni: '/deserty_dlya_kofejni',
    catalog_desertov: '/catalog_desertov',
    sales_week: '/sales_week',
    sales_week_page_two: '/sales_week/page_two',
    o_nas: '/o_nas',
}

///////header/////////
export const headerSlide = [
    {
        id: 1,
        img: slide,
        title: 'ДОСТАВКА В ДЕНЬ ЗАКАЗА',
    },
    {
        id: 2,
        img: slide2,
        title: 'ОПТОВЫЕ ПОСТАВКИ ОТ ПРОИЗВОДИТЕЛЯ',
    },
    {
        id:3,
        img: slide3,
        title: 'ВСЕГДА СВЕЖЕЕ',
    },
    {
        id:4,
        img: slide4,
        title: 'МИНДАЛЬНАЯ МУКА И НАТУРАЛЬНЫЕ ИНГРЕДИЕНТЫ',
    },
]
export const headerMenuData = [
    {
        id: 1,
        title: 'Гарантия свежести',
        path: '/guarantee'
    },
    {
        id: 2,
        title: 'Доставка и оплата',
        path: '',
    },
    {
        id: 3,
        title: 'Оптовые поставки',
        path: '/deserty_dlya_kofejni'
    },
    {
        id: 4,
        title: 'Контакты',
        path: ''
    },
]
export const headerData = [
    {
        id: 1,
        svg: place,
        title: 'Санкт-Петербург',
    },
    {
        id: 2,
        svg: phone,
        title: 'Санкт-Петербург',
    },
    {
        id: 3,
        svg: bag,
        title: 'Санкт-Петербург',
    },

]
// export const navData = [
//     {
//         id: 1,
//         title: 'СЛАДКИЕ ДНИ',
//     },
//     {
//         id: 2,
//         title: 'ПОДАРОЧНЫЕ НАБОРЫХ',
//     },
//     {
//         id: 3,
//         title: 'СОБРАТЬ НАБОР',
//     },

// ]


export const holidaysData = [
    {
        id: 1,
        img: bday,
        description: 'Скоро День рождения близкого человека'
    },
    {
        id: 2,
        img: holiday,
        description: 'Скоро День рождения близкого человека'
    },
    {
        id: 3,
        img: holiday2,
        description: 'Скоро День рождения близкого человека'
    },
    {
        id: 4,
        img: holiday3,
        description: 'Скоро День рождения близкого человека'
    },
    {
        id: 5,
        img: holiday4,
        description: 'Скоро День рождения близкого человека'
    },
    {
        id: 6,
        img: holiday5,
        description: 'Скоро День рождения близкого человека'
    },

]

export const popularData = [
    {
        id: 1,
        img: popular,
        title: 'сердце',
        description: 'Набор 16 шт. Вкусы: клубника - базилик, кокос, голубой сыр, пармезан',
        price: 2900,
    },
    {
        id: 2,
        img: popular2,
        title: 'Красота спасёт мир ',
        description: '22 макаронс в коробке.22 макаронс в коробке.22 макаронс в коробке.    ',
        price: 750,
    },
    {
        id: 3,
        img: popular3,
        title: 'Круглый набор',
        description: '40 макаронс в круглой коробке с персональной надписью 22 макаронс в коробке.',
        price: 3900,
    },
    {
        id: 4,
        img: popular4,
        title: 'Набор на 9',
        description: 'Набор из 9 штук в квадратной коробке. Вкусы: шоколад, фисташка, вишня',
        price: 950,
    },
    {
        id: 5,
        img: popular5,
        title: 'Набор на 16',
        description: 'Набор 16 шт. Вкусы: соленая карамель, голубой сыр, пармезан, шоколад ',
        price: 1500,
    },
    {
        id: 6,
        img: popular3,
        title: 'сердце',
        description: '24 штуки в коробке в виде сердца.Ассорти из 6 вкусов ',
        price: 2500,
    },
    {
        id: 7,
        img: popular3,
        title: 'сердце',
        description: '24 штуки в коробке в виде сердца.Ассорти из 6 вкусов ',
        price: 2500,
    },
    {
        id: 8,
        img: popular3,
        title: 'сердце',
        description: '24 штуки в коробке в виде сердца.Ассорти из 6 вкусов ',
        price: 2500,
    },
    {
        id: 9,
        img: popular3,
        title: 'сердце',
        description: '24 штуки в коробке в виде сердца.Ассорти из 6 вкусов ',
        price: 2500,
    },
    {
        id: 10,
        img: popular3,
        title: 'сердце',
        description: '24 штуки в коробке в виде сердца.Ассорти из 6 вкусов ',
        price: 2500,
    },
    {
        id: 11,
        img: popular3,
        title: 'сердце',
        description: '24 штуки в коробке в виде сердца.Ассорти из 6 вкусов ',
        price: 2500,
    },
    {
        id: 12,
        img: popular3,
        title: 'сердце',
        description: '24 штуки в коробке в виде сердца.Ассорти из 6 вкусов ',
        price: 2500,
    },
    {
        id: 13,
        img: popular3,
        title: 'сердце',
        description: '24 штуки в коробке в виде сердца.Ассорти из 6 вкусов ',
        price: 2500,
    },
    {
        id: 14,
        img: popular3,
        title: 'сердце',
        description: '24 штуки в коробке в виде сердца.Ассорти из 6 вкусов ',
        price: 2500,
    },
    {
        id: 15,
        img: popular3,
        title: 'сердце',
        description: '24 штуки в коробке в виде сердца.Ассорти из 6 вкусов ',
        price: 2500,
    },
    {
        id: 16,
        img: popular3,
        title: 'сердце',
        description: '24 штуки в коробке в виде сердца.Ассорти из 6 вкусов ',
        price: 2500,
    },
    {
        id: 17,
        img: popular3,
        title: 'сердце',
        description: '24 штуки в коробке в виде сердца.Ассорти из 6 вкусов ',
        price: 2500,
    },
    {
        id: 18,
        img: popular3,
        title: 'сердце',
        description: '24 штуки в коробке в виде сердца.Ассорти из 6 вкусов ',
        price: 2500,
    },
    {
        id: 19,
        img: popular3,
        title: 'сердце',
        description: '24 штуки в коробке в виде сердца.Ассорти из 6 вкусов ',
        price: 2500,
    },
    {
        id: 20,
        img: popular3,
        title: 'сердце',
        description: '24 штуки в коробке в виде сердца.Ассорти из 6 вкусов ',
        price: 2500,
    },
    {
        id: 21,
        img: popular3,
        title: 'сердце',
        description: '24 штуки в коробке в виде сердца.Ассорти из 6 вкусов ',
        price: 2500,
    },
    {
        id: 22,
        img: popular3,
        title: 'сердце',
        description: '24 штуки в коробке в виде сердца.Ассорти из 6 вкусов ',
        price: 2500,
    },
    {
        id: 23,
        img: popular3,
        title: 'сердце',
        description: '24 штуки в коробке в виде сердца.Ассорти из 6 вкусов ',
        price: 2500,
    },
    {
        id: 24,
        img: popular3,
        title: 'сердце',
        description: '24 штуки в коробке в виде сердца.Ассорти из 6 вкусов ',
        price: 2500,
    },
    {
        id: 25,
        img: popular3,
        title: 'сердце',
        description: '24 штуки в коробке в виде сердца.Ассорти из 6 вкусов ',
        price: 2500,
    },
    {
        id: 26,
        img: popular3,
        title: 'сердце',
        description: '24 штуки в коробке в виде сердца.Ассорти из 6 вкусов ',
        price: 2500,
    },
    {
        id: 27,
        img: popular3,
        title: 'сердце',
        description: '24 штуки в коробке в виде сердца.Ассорти из 6 вкусов ',
        price: 2500,
    },


]

export const newsData = [
    {
        id: 1,
        img: news,
        data: '25.02.2023',
        title: 'Скоро главный праздник весны!',
        description: 'Девушки любят, когда вкусно, красиво и натурально. Смотрите больше наборов с десертами ручной работы',
    },
    {
        id: 2,
        img: news,
        data: '25.02.2023',
        title: 'Скоро главный праздник весны!',
        description: 'Девушки любят, когда вкусно, красиво и натурально. Смотрите больше наборов с десертами ручной работы',
    },
    {
        id: 3,
        img: news,
        data: '25.02.2023',
        title: 'Скоро главный праздник весны!',
        description: 'Девушки любят, когда вкусно, красиво и натурально. Смотрите больше наборов с десертами ручной работы',
    },
    {
        id: 4,
        img: news,
        data: '25.02.2023',
        title: 'Скоро главный праздник весны!',
        description: 'Девушки любят, когда вкусно, красиво и натурально. Смотрите больше наборов с десертами ручной работы',
    },
    {
        id: 5,
        img: news,
        data: '25.02.2023',
        title: 'Скоро главный праздник весны!',
        description: 'Девушки любят, когда вкусно, красиво и натурально. Смотрите больше наборов с десертами ручной работы',
    },
]
export const featuresData = [
    {
        id: 1,
        img: card,
        title: 'Подарочные наборы',
        description: 'Готовые наборы со скидкой. Вы можете подобрать набор на подходящий случай.',
        path: '/podarochnye_nabory'
    },
    {
        id: 2,
        img: card2,
        title: 'Собрать свой набор',
        description: 'Выбрать количество макарун, и выбрать вкусы',
    },
    {
        id: 3,
        img: card3,
        title: 'Набор с индивидуальной печатью',
        description: 'Собрать набор макарон с уникальным дизайном. ',
    },
    {
        id: 4,
        img: card4,
        title: 'Свадебные предложения',
        description: 'Нежные пирожные макаронс с разными вкусами для украшения вашего свадебного торжества',
    },
    {
        id: 5,
        img: card5,
        title: 'Корпоративные подарки',
        description: 'От 85 руб за шт. С уникальным дизайном. Приятный комплимент для коллег и партнеров',
    },
    {
        id: 6,
        img: card6,
        title: 'Оптовые поставки',
        description: "Предложение для кофеен, кафе, отелей и т.д.Посмотрите условия сотрудничества и отзывы.",
        path: '/deserty_dlya_kofejni'
    },
]
/////////////guarantee-гарантияData//////
export const guaranteeData = [
    {
        id: 1,
        img: guarantee,
        percent: '100%',
        title: 'миндальная мука',
    },
    {
        id: 2,
        img: guarantee2,
        percent: '100%',
        title: 'натуральные красители',
    },
    {
        id: 3,
        img: guarantee3,
        percent: '100%',
        title: 'натуральные ингредиенты',
    },
]
export const suplplesData = [
    {
        id: 1,
        img: suplples2,
        title: 'Французские макаронс',
        description: "22 потрясающих классических и авторских вкуса в линейке",
    },
    {
        id: 2,
        img: suplples3,
        title: 'Эклеры',
        description: "Вкусы: арахис, ваниль, карамель, клубника, малина, смородина, фисташка, манго-маракуйя, шоколад",
    },
    {
        id: 3,
        img: suplples4,
        title: 'Кейк-попсы',
        description: "С добавлением миндальной муки: три цвета",
    },
    {
        id: 4,
        img: suplples5,
        title: 'Пирожные-картошка',
        description: "С натуральной вишневой посыпкой",
    },
    {
        id: 6,
        img: suplples6,
        title: 'Карамель на палочке',
        description: "Петушки, спирали, фрукты и другие виды",
    },
    {
        id: 7,
        img: suplples7,
        title: 'Орешки со сгущенкой',
        description: "Орешки со сгущенкой",
    },
    {
        id: 8,
        img: suplples8,
        title: 'Домашние трубочки',
        description: "Со вареным сгущенным молоком",
    },
    {
        id: 9,
        img: suplples9,
        title: 'Карамель на палочке',
        description: "Наливная карамель",
    },
    {
        id: 10,
        img: suplples10,
        title: 'Конфеты для кофеен',
        description: "В индивидуальных упаковках",
    },
    {
        id: 11,
        img: suplples11,
        title: 'Маффин',
        description: "Вкусы: лесные ягоды, шоколад-карамель, лимон",
    },
    {
        id: 11,
        img: suplples12,
        title: 'Брендированные макарон',
        description: "Для ваших гостей, коллег и партнёров",
    },
]
export const sulpesFooterData = [
    {
        id: 1,
        img: foot3,
        title: 'Привлекательный внешний вид',
    },
    {
        id: 2,
        img: foot4,
        title: 'Яркие шоубоксы',
    },
    {
        id: 3,
        img: foot2,
        title: 'Высокая возвращаемость',
    },
    {
        id: 4,
        img: foot,
        title: 'Натуральные ингредиенты и широкий ассортимент вкусов',
    },
]
export const DesertsCatalogData = [
    {
        id: 1,
        img: catalog2,
        title: 'Эклеры',
    },
    {
        id: 2,
        img: catalog3,
        title: 'Вафельные трубочки',
    },
    {
        id: 3,
        img: catalog4,
        title: 'Комбо-наборы',
    },
]
export const aboutData = [
    {
        img: about
    },
    {
        img: about2
    },
    {
        img: about3
    },
    {
        img: about4
    },
]
export const footerIconData = [
    {
        id: 1,
        img: footer,
        title: 'Готовим вручную и с любовью',
    },
    {
        id: 2,
        img: footer2,
        title: 'Доставим в день заказа',
    },
    {
        id: 3,
        img: footer3,
        title: '100% натуральные ингредиенты',
    },
]
// export const footerTextData = [
//     {
//         title: 'Информация',
//         about: 'О компании',
//         ganatee: 'Гарантии вкуса и свежести',
//         pay: 'Доставка и оплата',
//         contacts: 'Контакты',
//         confidentiality:'Политика конфиденциальности',
//     },
//     {
//         title: 'Каталог',
//         about: 'Каталог десертов',
//         ganatee: 'Готовые наборы',
//         pay: 'Собрать свой набор ',
//         sale: 'Акции',
//     },
//     {
//         title: 'ДЛЯ БИЗНЕСА',
//         about: 'Корпоративные подарки',
//         pay: 'Оповикам',
//     },
// ]
export const footerTextData = [
    {
        title: 'Информация',
        items: [
            { text: 'О компании', link: '/o_nas' },
            { text: 'Гарантии вкуса и свежести', link: '/guarantee' },
            { text: 'Доставка и оплата', link: '/доставка-и-оплата' },
            { text: 'Контакты', link: '/контакты' },
            { text: 'Политика конфиденциальности', link: '/политика-конфиденциальности' },
        ]
    },
    {
        title: 'Каталог',
        items: [
            { text: 'Каталог десертов', link: '/catalog_desertov' },
            { text: 'Подарочные наборы', link: '/podarochnye_nabory' },
            { text: 'Собрать свой набор', link: '/собрать-свой-набор' },
            { text: 'Акции', link: '/акции' },
        ]
    },
    {
        title: 'ДЛЯ БИЗНЕСА',
        items: [
            { text: 'Корпоративные подарки', link: '/корпоративные-подарки' },
            { text: 'Оповикам', link: '/deserty_dlya_kofejni' },
        ]
    },
];
