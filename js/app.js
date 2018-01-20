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

});

var App = React.createClass({
    render: function(){
        return (
            <div className="app")>
                 Привет
            </div>);
    }
});   

const opp = document.getElementById('root');

ReactDOM.render( <
    App / > ,
    opp);
