var my_news = [
{
author: 'Саша Пушкин',
text: 'В четверг, четвертого числа...'
},
{
author: 'Просто Петя',
text: 'Считаю, что $ должен стоить 35 рублей!'
},
{
author: 'Гость',
text: 'Бесплатно. Скачать. Лучший сайт - http://localhost:3000'
}
];

var News = React.createClass({
render: function() {
return (
<div className="news">
К сожалению, новостей нет.
</div>
);
}
});
var Comments = React.createClass({
render: function() {
return (
<div className="comments">
Нет новостей - комментировать нечего
</div>
);
}
});
var App = React.createClass({
render: function() {
return (
<div className="app">
Всем привет, я компонент App! Я умею отображать новости.
<News />
<Comments />
</div>
);
}
});
ReactDOM.render(
<App />,
document.getElementById('root')
);