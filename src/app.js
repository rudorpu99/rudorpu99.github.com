//const tplList = require ('./list.hbs');
const createTable = require('./createTable');
const $ = require('jquery');//노드모듈스에 있는애들인경우에만 경로가아닌 이름
const ajax = require('./ajax');
const main = require('./main.hbs');
var a = {name: 111};
var b = main(a);
$('#root').html(b);
//id를 btn으로 하는 엘리먼트에 클릭 이벤트 바인딩
$('#btn').on('click', function(e){
    ajax('https://raw.githubusercontent.com/suhokim2/suhokim2.github.com/master/data.json',function(data){
        var table = createTable(JSON.parse(data).fruits);
        $('[data-view="list"]').html(table);
    })
});

$('#btn').on('click', e => {
    ajax('https://raw.githubusercontent.com/suhokim2/suhokim2.github.com/master/data.json', data => {
        const table = createTable(JSON.parse(data).fruits);
        $('[data-view="list"]').html(table);
    });
});




import tplList from './list.hbs';

