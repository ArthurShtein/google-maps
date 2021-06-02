function init() {
    displayData()
}

function displayData() {
    var {bgColor, txtColor, foreCast} = getData()
    document.body.style.backgroundColor = bgColor;
    document.body.style.color = txtColor;
    elForecast = document.querySelector('h2')
    elForecast.innerText = foreCast;
}
    

// function displayForecast(foreCast){
//     console.log(foreCast)
//     var elForecast = document.querySelector('h2')
//     console.log(elForecast)
    // elForecast.innerText = foreCast
// }



function onSubmitForm(ev) {
    ev.preventDefault();
    var elForm = document.querySelector('form')
    var elInputs = elForm.querySelectorAll ('input')

    // Get user colors to display in main page
    var favBgColor = elInputs[0].value
    var favTxtColor = elInputs[1].value
    // setColors(favBgColor, favTxtColor)

    //get users birtday to display astrological forecast in main page
    var birthday = elInputs[2].value
    const randForeCast = getForecast(birthday)
    // displayForecast(randForeCast)
    
    setHomePageData(favBgColor, favTxtColor, randForeCast)
}









// Maybe i will use later?
function onSetBirthDay(date) {
    elBirthday = document.querySelector('input[name=birthday]').value
}
function onChangeBgColor(ev) {
    var bgColor = ev
}
function onChangeTxtColor(ev) {
    var txtColor = ev
}