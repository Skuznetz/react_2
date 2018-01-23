var my_news = [{
        author: 'Саша Пушкин',
        text: 'В четверг в четыре четверти часа'
    },
    {
        author: 'Просто Петя',
        text: 'Считаю, что $ должен стоить 35 рублей!'

    },
    {
        author: 'Гость',
        text: 'Бесплатно. Скачать. Лучший сайт - http://localhost:3000'
        
    },
    {   author: 'Вася',
        text: 'Московское время'

    }
];
var News = React.createClass({
    render: function(){
        var data = this.props.data;
        var newsTamplate;
        if (data.length > 0){
        newsTamplate = data.map(function(item,index){
            return (
                <div key={index}>
                <p className="news_author">{item.author} :
                </p>
                <p className="news_text">{item.text}</p>
                </div>)})
        } else {
            newsTamplate = <p> К сожалению,новостей нет.</p>}
        
                return (
            <div className="news">
            {newsTamplate}
            <strong>Всего новостей: {data.length}</strong>
            </div>);
    }

});

var App = React.createClass({
    render: function(){
        return (
            <div className="app">
                 <h1>Привет</h1>
            <News data={my_news} />
            </div>);
    }
});   

const opp = document.getElementById('root');

ReactDOM.render( <
    App /> ,
    opp);
