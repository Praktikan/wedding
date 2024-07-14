let timer

const onClick = () => {
    clearTimeout(timer)
    const element = document.querySelector('.letter-image')
    if (!element.classList.contains('open')) {
        element.classList.add('open')
    } else if (!element.classList.contains('touch')) {
        element.classList.add('touch')
    } else if (!element.classList.contains('take')) {
        element.classList.add('take')
    }
    //timer = setTimeout(onClick, 15000)
}

//timer = setTimeout(onClick, 15000)

const personalization = {
    common: {
        title: 'Дорогие друзья!',
        who0: 'вам',
        who1: 'вас',
        register: 'без гостей',
        who2: 'вас'
    },
    elena: {
        title: 'Дорогие мама Лена и Леонид!',
        who0: 'вам',
        who1: 'вас',
        register: '<strong>в 15:20</strong>, Королёвское управление ЗАГС',
        who2: 'вас'
    },
    irina: {
        title: 'Дорогая мама Ира!',
        who0: 'тебе',
        who1: 'тебя',
        register: '<strong>в 15:20</strong>, Королёвское управление ЗАГС',
        who2: 'тебя'
    },
    alexey: {
        title: 'Дорогие папа и Надежда!',
        who0: 'вам',
        who1: 'вас',
        register: '<strong>в 15:20</strong>, Королёвское управление ЗАГС',
        who2: 'вас'
    },
    sveta: {
        title: 'Дорогая Света!',
        who0: 'Вам',
        who1: 'Вас',
        register: 'без гостей',
        who2: 'Вас'
    },
    sergey: {
        title: 'Дорогой Серёжа!',
        who0: 'тебе',
        who1: 'тебя',
        register: 'без гостей',
        who2: 'тебя'
    },
    misha: {
        title: 'Дорогие Рита и Миша!',
        who0: 'вам',
        who1: 'вас',
        register: 'без гостей',
        who2: 'вас',
    },
    tema: {
        title: 'Дорогие Аня и Артём!',
        who0: 'вам',
        who1: 'вас',
        register: 'без гостей',
        who2: 'вас',
    },
    andrey: {
        title: 'Дорогие Алёна и Андрей!',
        who0: 'вам',
        who1: 'вас',
        register: 'без гостей',
        who2: 'вас',
    },
    kolya: {
        title: 'Дорогие Люда и Коля!',
        who0: 'вам',
        who1: 'вас',
        register: 'без гостей',
        who2: 'вас',
    },
    genya: {
        title: 'Дорогие Вика и Женя!',
        who0: 'вам',
        who1: 'вас',
        register: 'без гостей',
        who2: 'вас',
    },
    sasha: {
        title: 'Дорогие Лена и Саша!',
        who0: 'вам',
        who1: 'вас',
        register: 'без гостей',
        who2: 'вас',
    },
    tanya: {
        title: 'Дорогие Таня и Лёша!',
        who0: 'вам',
        who1: 'вас',
        register: 'без гостей',
        who2: 'вас',
    },
    sashka: {
        title: 'Дорогие Саша и Женя!',
        who0: 'вам',
        who1: 'вас',
        register: 'без гостей',
        who2: 'вас',
    },
    victor: {
        title: 'Дорогие Витя и Катя!',
        who0: 'вам',
        who1: 'вас',
        register: 'без гостей',
        who2: 'вас',
    },
    artem: {
        title: 'Дорогой Артём (+1)!',
        who0: 'вам',
        who1: 'вас',
        register: 'без гостей',
        who2: 'вас',
    }
}

const onLoad = () => {
    const params = new URLSearchParams(document.location.search);
    const name = params.get('name') ?? 'common'
    
    document.querySelector('.title').innerText = personalization[name].title
    document.querySelector('.who0').innerText = personalization[name].who0
    document.querySelector('.who1').innerText = personalization[name].who1
    document.querySelector('.register').innerHTML = personalization[name].register
    document.querySelector('.who2').innerText = personalization[name].who2
}
/*



Дорогие друзья!

24 августа может пройти как обычный день и не запомниться вам ничем особенным… А может стать одним из самых приятных дней!

Приглашаем вас на нашу свадьбу! Мы хотим разделить этот важный для нас день с вами, нашими друзьями/близкими и родными людьми (ВЫБРАТЬ В ЗАВИСТИ ОТ ПРИГЛАШЕНИЯ).

Регистрация состоится 16 августа 2024 г. без гостей. А уже через неделю, 24 августа в 17:00, мы будем ждать вас на торжество в коттедже по адресу: Сергиево-Посадский г.о., д. Березняки, 158.

Обрадуйте нас своим присутствием!
    Мария и Владимир


К великому сожалению, в коттедже нет детских зон и нет возможности пригласить аниматоров для того, чтобы занять самых маленьких наших гостей, потому просим заранее подумать о том с кем оставить Вашу кроху на праздничный вечер.
-----
    Пожалуйста, подтвердите ваше присутствие на нашем празднике до 1 августа 2024 г.
---
    P.s. Дорогие гости, наше мероприятие пройдёт в формате фуршета и барбекю без рассадки за столы. Вы сможете насладиться разнообразными закусками и блюдами, приготовленными на открытом огне. Также для всех желающих будет доступен мини-бассейн, где вы сможете освежиться и расслабиться.
    Официальная часть запланирована с 17:00 до 22:00. Гостей ожидают приятные сюрпризы на протяжение всего вечера.*/
