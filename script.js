const onClick = () => {
    const element = document.querySelector('.letter-image')
    if (!element.classList.contains('open')) {
        element.classList.add('open')
    } else if (!element.classList.contains('touch')) {
        element.classList.add('touch')
    } else if (!element.classList.contains('take')) {
        element.classList.add('take')
    } else if (!element.classList.contains('expand')) {
        element.classList.add('expand')
    } else if (!element.classList.contains('rotate')) {
        element.classList.add('rotate')
    }
}

const personalization = {
    common: {
        title: 'Дорогие друзья!',
        who0: 'вам',
        who1: 'вас',
        exact: 'вами, нашими друзьями',
        who2: 'вас'
    },
    elena: {
        title: 'Дорогая Елена!',
        who0: 'вам',
        who1: 'вас',
        exact: 'вами, нашими близкими и родными людьми',
        who2: 'вас'
    }
}

const onLoad = () => {
    const params = new URLSearchParams(document.location.search);
    const name = params.get('name') ?? 'common'
    
    document.querySelector('.title-text').innerText = personalization[name].title
    document.querySelector('.who0').innerText = personalization[name].who0
    document.querySelector('.who1').innerText = personalization[name].who1
    document.querySelector('.exact').innerText = personalization[name].exact
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
