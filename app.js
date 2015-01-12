var books = [
  {
    name: 'Coca-Cola',
    books: [
      {
        url: 'http://www.litres.ru/devid-bizli/nevil-isdell/vnutri-coca-cola-istoriya-brenda-1-glazami-legendarnogo-ceo/',
        title: 'Внутри Coca-Cola. История бренда № 1 глазами легендарного CEO'
      }
    ]
  },
  {
    name: 'IKEA',
    books: [
      {
        url: 'http://www.litres.ru/anders-dalvig/ikea-soberi-svou-mechtu-kak-sovmestit-otvetstvennost-i-pribyl-v-odnoy-kompanii/',
        title: 'ИКЕА: собери свою мечту. Как совместить ответственность и прибыль в одной компании'
      }
    ]
  },
  {
    name: 'Starbucks',
    books: [
      {
        url: 'http://www.litres.ru/govard-shulc/dori-dzhons-yeng/kak-chashka-za-chashkoy-stroilas-starbucks/',
        title: 'Как чашка за чашкой строилась Starbucks'
      },
      {
        url: 'http://www.litres.ru/govard-shulc/starbucks-navsegda/',
        title: 'Starbucks навсегда'
      }
    ]
  },
  {
    name: 'Facebook',
    books: [
      {
        url:   'http://www.litres.ru/devid-kirkpatrik/socialnaya-set-kak-osnovatel-facebook-zarabotal-4-milliarda-i-priobrel-500-millionov-druzey/',
        title: 'Социальная сеть: как основатель Facebook заработал $ 4 миллиарда и приобрел 500 миллионов друзей'
      },
      {
        url: 'http://www.ozon.ru/context/detail/id/6746214/',
        title: 'Миллиардеры поневоле. Альтернативная история создания Facebook'
      }
    ]
  },
  {
    name: 'Google',
    books: [
      {
        url:   'http://www.litres.ru/dzhanet-lau/google-proshloe-nastoyaschee-buduschee/',
        title: 'Google. Прошлое. Настоящее. Будущее'
      }
    ]
  },
  {
    name: 'Zappos',
    books: [
      {
        url:   'http://www.litres.ru/toni-shey/dostavlyaya-schaste-ot-nulya-do-milliarda/',
        title: 'Доставляя счастье. От нуля до миллиарда'
      }
    ]
  },
  {
    name: 'Ford',
    books: [
      {
        url:   'http://www.litres.ru/genri-ford/moya-zhizn-moi-dostizheniya-4/',
        title: 'Моя жизнь. Мои достижения'
      }
    ]
  },
  {
    name: 'McKinsey',
    books: [
      {
        url:   'http://www.litres.ru/daff-makdonald/the-firm-istoriya-kompanii-mckinsey-i-ee-taynogo-vliyaniya-na-amerikanskiy-biznes-2/',
        title: 'The Firm. История компании McKinsey и ее тайного влияния на американский бизнес'
      }
    ]
  },
  {
    name: 'Pixar',
    books: [
      {
        url:   'http://www.litres.ru/devid-prays/magiya-pixar/',
        title: 'Магия Pixar'
      }
    ]
  },
  {
    name: 'Apple',
    books: [
      {
        url:   'http://www.litres.ru/dzhina-smit/neizvestnyy-stiv-istoriya-apple-i-ee-soosnovatelya-iz-pervyh-ruk/',
        title: 'Неизвестный Стив. История Apple и ее сооснователя из первых рук'
      }
    ]
  },
  {
    name: 'McDonald\'s',
    books: [
      {
        url:   'http://www.ozon.ru/context/detail/id/3991477/',
        title: 'McDonald\'s: Как создавалась империя'
      }
    ]
  },
  {
    name: 'TOMS',
    books: [
      {
        url: 'http://www.litres.ru/bleyk-maykoski/ostav-svoy-sled-kak-postroit-kompaniu-kotoraya-menyaet-mir-k-luchshemu/',
        title: 'Оставь свой след. Как построить компанию, которая меняет мир к лучшему'
      }
    ]
  },
  {
    name: 'Adidas',
    books: [
      {
        url: 'http://www.litres.ru/barbara-smit-2/adidas-ili-puma-borba-bratev-za-mirovoe-liderstvo/',
        title: 'Adidas или Puma? Борьба братьев за мировое лидерство'
      }
    ]
  },
  {
    name: 'Puma',
    books: [
      {
        url: 'http://www.litres.ru/barbara-smit-2/adidas-ili-puma-borba-bratev-za-mirovoe-liderstvo/',
        title: 'Adidas или Puma? Борьба братьев за мировое лидерство'
      }
    ]
  },
];

var Book = React.createClass({
  render: function() {
    var url = this.props.url + '?lfrom=28196679';
    return (
      <li className="book">
        <a href={url}>{this.props.children}</a>
      </li>
    );
  }
});

var Brand = React.createClass({
  render: function() {
    var bookNodes = this.props.brand.books.map(function (book) {
      return (
        <Book url={book.url}>
          {book.title}
        </Book>
      );
    });
    return (
      <div className="brand">
        <h2>{this.props.brand.name}</h2>
        <ul>
          {bookNodes}
        </ul>
      </div>
    );
  }
});

var BookList = React.createClass({
  render: function() {
    var brandNodes = this.props.books.map(function (brand) {
      return (
        <Brand brand={brand} />
      );
    });
    return (
      <div className="bookList">
        {brandNodes}
      </div>
    );
  }
});

React.render(
  <BookList books={books} />,
  document.getElementById('app')
);
