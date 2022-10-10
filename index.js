//добавляю 'алфавит"
const alphabet = {
    'а': 'a',
    'б': 'b',
    'в': 'v',
    'г': 'g',
    'д': 'd',
    'е': 'e',
    'ё': 'yo',
    'ж': 'zh',
    'з': 'z',
    'и': 'i',
    'й': 'y',
    'к': 'k',
    'л': 'l',
    'м': 'm',
    'н': 'n',
    'о': 'o',
    'п': 'p',
    'р': 'r',
    'с': 's',
    'т': 't',
    'у': 'u',
    'ф': 'f',
    'х': 'kh',
    'ц': 'ts',
    'ч': 'ch',
    'ш': 'sh',
    'щ': 'shch',
    'ъ': '',
    'ы': 'i',
    'ь': '\'',
    'э': 'e',
    'ю': 'yu',
    'я': 'ya',
    'А': 'A',
    'Б': 'B',
    'В': 'V',
    'Г': 'G',
    'Д': 'D',
    'Е': 'E',
    'Ё': 'YO',
    'Ж': 'ZH',
    'З': 'Z',
    'И': 'I',
    'Й': 'Y',
    'К': 'K',
    'Л': 'L',
    'М': 'M',
    'Н': 'N',
    'О': 'O',
    'П': 'P',
    'Р': 'R',
    'С': 'S',
    'Т': 'T',
    'У': 'U',
    'Ф': 'F',
    'Х': 'KH',
    'Ц': 'TS',
    'Ч': 'CH',
    'Ш': 'SH',
    'Щ': 'SHCH',
    'Ъ': '',
    'Ы': 'I',
    'Ь': '\'',
    'Э': 'E',
    'Ю': 'YU',
    'Я': 'YA',
    ' ': ' ',
};

//Кнопка добавить

let button1 = document.querySelector('#addWord')

//кнопка enter

let input = document.getElementsByClassName('input')[0]
input.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        document.querySelector('#addWord').click();
    }
})

button1.addEventListener('click', () => {

    //создаем левый див для слов на русском языке

    let tablica = document.getElementsByClassName('tablica')[0]
    let leftDiv = document.createElement('div')
    leftDiv.className = 'left'
    tablica.appendChild(leftDiv)

    //создаем внутри див для стиля

    let rusDiv = document.createElement('div')
    rusDiv.className = 'rusWord'
    leftDiv.appendChild(rusDiv)

    //создаем див для чисел

    let numberDiv = document.createElement('div')
    numberDiv.className = 'number'
    rusDiv.appendChild(numberDiv)
    let number1 = document.getElementsByClassName('number')
    for (let k = 0; k < number1.length; k++) {
        numberDiv.innerHTML = `${k+1}`
    }

    //создаем див для рус текста

    let textDiv = document.createElement('div')
    textDiv.className = 'rus'
    textDiv.id = 'tooltip'
    rusDiv.appendChild(textDiv)

    //создаем правый див для транслитерных слов

    let rightDiv = document.createElement('div')
    rightDiv.className = 'right'
    tablica.appendChild(rightDiv)

    //создаем так же див для стиля

    let engDiv = document.createElement('div')
    engDiv.className = 'engWord'
    rightDiv.appendChild(engDiv)

    //создаем див для транслитерых слов

    let translit = document.createElement('div')
    translit.className = 'eng'
    translit.id = 'tooltip'
    engDiv.appendChild(translit)

    //создаем крестик

    let krest = document.createElement('div')
    krest.className = 'del'
    engDiv.appendChild(krest)
    let button = document.createElement('button')
    button.className = 'krestik'
    button.id = 'delWord'
    button.innerHTML = '<img src="./icons/Group3.svg">'
    krest.appendChild(button)

    //создаем переменную для текста и закидываем ее в оба словарика

    let text = document.getElementsByClassName('input')[0].value

    let rusResult
    if (text.length > 7) {
        rusResult = text.slice(0, 7) + '...' + '<span id="tooltipText">' + text + '</span>'
    } else if (text.length <= 7 && text.length > 0) {
        rusResult = text + '<span id="tooltipText">' + text + '</span>'
    } else {
        rusResult = 'Ты не в...<span id="tooltipText">Ты не ввел слово</span>'
    }
    textDiv.innerHTML = rusResult;
    let engText = ''
    let engResult = ''
    for (let i = 0; i < text.length; i++) {
        let rusLetter = text[i]
        let engLetter = alphabet[rusLetter]
        if (engLetter === undefined) {
            engText = engText + rusLetter
        } else {
            engText = engText + engLetter
        }
    }
    if (engText.length > 7) {
        engResult = engText.slice(0, 7) + '...' + '<span id="tooltipText">' + engText + '</span>'
    } else if (text.length <= 7 && text.length > 0) {
        engResult = engText + '<span id="tooltipText">' + engText + '</span>'
    } else {
        engResult = 'Ti ne v...<span id="tooltipText">Ti ne vvel slovo</span>'
    }
    translit.innerHTML = engResult;

    //отчищаем поле ввода

    document.getElementsByClassName("input")[0].value = '';

    //Кнопка крестик

    button.addEventListener('click', () => {
        leftDiv.remove()
        rightDiv.remove()
        for (let g = 1; g < number1.length; g++) {
            let nextDiv = document.getElementsByClassName('number')[g]
            nextDiv.innerHTML = `${g+1}`
        }
    })

    //Кнопка очистить все
    let button3 = document.querySelector('#delAll')
    button3.addEventListener('click', () => {
        leftDiv.remove()
        rightDiv.remove()
    })
})