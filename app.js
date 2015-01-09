var books = [
  {
    'url': 'http://www.litres.ru/devid-bizli/nevil-isdell/vnutri-coca-cola-istoriya-brenda-1-glazami-legendarnogo-ceo/',
    'title': 'Внутри Coca-Cola. История бренда № 1 глазами легендарного CEO'
  },
  {
    'url': 'http://www.litres.ru/anders-dalvig/ikea-soberi-svou-mechtu-kak-sovmestit-otvetstvennost-i-pribyl-v-odnoy-kompanii/',
    'title': 'ИКЕА: собери свою мечту. Как совместить ответственность и прибыль в одной компании'
  },
  {
    'url': 'http://www.litres.ru/govard-shulc/dori-dzhons-yeng/kak-chashka-za-chashkoy-stroilas-starbucks/',
    'title': 'Как чашка за чашкой строилась Starbucks'
  },
  {
    'url': 'http://www.litres.ru/govard-shulc/starbucks-navsegda/',
    'title': 'Starbucks навсегда'
  },
  {
    'url':   'http://www.litres.ru/devid-kirkpatrik/socialnaya-set-kak-osnovatel-facebook-zarabotal-4-milliarda-i-priobrel-500-millionov-druzey/',
    'title': 'Социальная сеть: как основатель Facebook заработал $ 4 миллиарда и приобрел 500 миллионов друзей'
  },
  {
    'url':   'http://www.litres.ru/toni-shey/dostavlyaya-schaste-ot-nulya-do-milliarda/',
    'title': 'Доставляя счастье. От нуля до миллиарда'
  },
  {
    'url':   'http://www.litres.ru/genri-ford/moya-zhizn-moi-dostizheniya-4/',
    'title': 'Моя жизнь. Мои достижения'
  },
  {
    'url':   'http://www.litres.ru/daff-makdonald/the-firm-istoriya-kompanii-mckinsey-i-ee-taynogo-vliyaniya-na-amerikanskiy-biznes-2/',
    'title': 'The Firm. История компании McKinsey и ее тайного влияния на американский бизнес'
  },
  {
    'url':   'http://www.litres.ru/devid-prays/magiya-pixar/',
    'title': 'Магия Pixar'
  },
  {
    'url':   'http://www.litres.ru/dzhina-smit/neizvestnyy-stiv-istoriya-apple-i-ee-soosnovatelya-iz-pervyh-ruk/',
    'title': 'Неизвестный Стив. История Apple и ее сооснователя из первых рук'
  },
  {
    'url': 'http://www.litres.ru/bleyk-maykoski/ostav-svoy-sled-kak-postroit-kompaniu-kotoraya-menyaet-mir-k-luchshemu/',
    'title': 'Оставь свой след. Как построить компанию, которая меняет мир к лучшему'
  }
];

var Book = React.createClass({
  render: function() {
    var url = this.props.url + '?lfrom=28196679';
    return (
      <div className="book">
        <a href={url}>{this.props.children}</a>
      </div>
    );
  }
});

var BookList = React.createClass({
  render: function() {
    var bookNodes = this.props.books.map(function (book) {
      return (
        <Book url={book.url}>
          {book.title}
        </Book>
      );
    });
    return (
      <div className="bookList">
        {bookNodes}
      </div>
    );
  }
});

React.render(
  <BookList books={books} />,
  document.body
);
