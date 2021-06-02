'use strict';

const KEY = 'userData';


function getData() {
    var colors = loadFromStorage(KEY);
    if (!colors) colors = ({ bgColor: 'rgb(90, 90, 90)', txtColor: 'white' });
    return colors;
}

function setHomePageData(bgColor, txtColor, foreCast) {
    _saveToStorage(bgColor, txtColor,foreCast);
}

function getForecast(date) {
    //Extract the month from the date
    var monthStr = date.split('-')[1]
    // and change him to string
    var monthInt = parseInt(monthStr)
    var sentences = [
        'You will be hungry soon',
        'You will find your dream job very soon',
        'You will get married soon',
        'Prepare to find your love',
        'You should stay home today',
        'Become full stack developer',
        'Great obsticales a head, be carefull! ',
        ' You need to buy a dog',
        'Dont drive this month',
        'Start doing sports',
        'Stop smoking! its not healthy',
        'One day you will die']

    // var randIdx = getRandomIntInclusive(0, sentences.length-1) // maybe i will do it more random
    var randSentence = sentences[monthInt-1]
    // saveToStorage(KEY, {sentence: randSentence})

    return randSentence;
}



function _saveToStorage(bgColor, txtColor,foreCast) {
    saveToStorage(KEY, { bgColor, txtColor, foreCast });
}

