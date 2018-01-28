var my_news = [{
        author: 'Саша Пушкин',
        text: 'В четверг в четыре четверти часа',
        bigText: '4 черненьких чумазеньких чертёнка'
    },
    {
        author: 'Просто Петя',
        text: 'Считаю, что $ должен стоить 35 рублей!',
        bigText: 'ну может быть -75'

    },
    {
        author: 'Гость',
        text: 'Бесплатно. Скачать. Лучший сайт - http://localhost:3000',
        bigText: 'Ну не очень бесплатно'
    },
    {   author: 'Вася',
        text: 'Московское время',
        bigText: 'Кому сколько -5-00'
    }
];
var Article = React.createClass({
    propsTypes: {
        data: React.PropTypes.shape({
            author: React.PropTypes.string.isRequired,
            text: React.PropTypes.string.isRequired,
            bigText: React.PropTypes.string.isRequired
        })
    },
    getInitialState: function(){
        return {
            visible: false
        };
},
    readmoreClick: function(e){
        e.preventDefault();
        this.setState({visible: true});
    },
    render: function(){
    var author = this.props.data.author;
    var text = this.props.data.text;
    var bigText = this.props.data.bigText;
    var visible = this.state.visible;
        return (
            <div className="article">
            <p className="news_author">{author}: </p>
            <p className="news_text">{text}</p>
            {/* для ссылки readmore: не показывай ссылку, если visible === true */}
<a href="#" className={'news__readmore ' + (visible ? 'none': '')}>Подробнее</a
>
{/* для большо текста: не показывай текст, если visible === false */}
<p className={'news__big-text ' + (visible ? '': 'none')}>{bigText}</p>
            </div>)
    }
});
var News = React.createClass({
    render: function(){
        var data = this.props.data;
        var newsTamplate;
        if (data.length > 0){
        newsTamplate = data.map(function(item,index){
            return (
                <div key={index}>
                <Article data={item} />
                
                </div>)})
        } else {
            newsTamplate = <p> К сожалению,новостей нет.</p>}
        
                return (
            <div className="news">
            {newsTamplate}
            <strong className={'news_count ' + (data.length > 0 ? '' : 'none')}>Всего новостей: {data.length}</strong>
            </div>);
    }

});

var App = React.createClass({
    render: function(){
        return (
            <div className="app">
                 <h1>Новости</h1>
            <News data={my_news} />
            </div>);
    }
});   

const opp = document.getElementById('root');

ReactDOM.render( <
    App /> ,
    opp);
