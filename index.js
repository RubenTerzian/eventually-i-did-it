
const transform = str => {

    const strArr = str.split('');
    const unicValue = strArr.filter((el, index, arr) => arr.indexOf(el) === index );
    const unicValuesAndTheirAmount = {}
    for(let value of unicValue){
       const allSameValue  =  strArr.filter(el => el ===  value);
       unicValuesAndTheirAmount[value] = allSameValue.length;
    }

    const result = Object.entries(unicValuesAndTheirAmount).reduce((accum, elem) =>{
            return accum + elem.reverse().join('') + ' ' // пробел добавил для читаемости
    }, '')
    return result
}

const params = document.getElementById('params')
const result = document.getElementById('result')


params.addEventListener('input', (e) => {
    const value = e.target.value
    if(value.match(/[0-9]/)){
        alert('Не нужно вводить цифры)')
        params.value = '';
        result.innerText = '';
    }else{
        result.innerText = transform(value);
    }
})