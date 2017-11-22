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
var Article = React.createClass({
render: function() {
var author = this.props.data.author,
text = this.props.data.text;
return (
<div className='article'>
<p className='news__author'>{author}:</p>
<p className='news__text'>{text}</p>
</div>
)
}
});
var News = React.createClass({
  var News = React.createClass({
propTypes: {
data: React.PropTypes.array.isRequired
},
render: function() {
var data = this.props.data;
var newsTemplate;
if (data.length > 0) {
newsTemplate = data.map(function(item, index) {
return (
<div key={index}>
<Article data={item} />
</div>
)
})
} else {
newsTemplate = <p>К сожалению новостей нет</p>
}
return (
<div className="news">
{newsTemplate}
<strong className={'news__count ' + (data.length > 0 ? '':'none')}>Всего новостей: {data.length}</strong>
</div>
);
}
});

var App = React.createClass({
render: function() {
return (
<div className="app">
<h3>Новости</h3>
<News data={my_news} /> {/*добавили свойство data */}
</div>
);
}
});
ReactDOM.render(
<App />,
document.getElementById('root')
);