var brands = [
  {
    id: 'coca-cola',
    name: 'Coca-Cola'
  },
  {
    id: 'ikea',
    name: 'IKEA'
  },
  {
    id: 'starbucks',
    name: 'Starbucks'
  },
  {
    id: 'facebook',
    name: 'Facebook'
  },
  {
    id: 'google',
    name: 'Google'
  },
  {
    id: 'zappos',
    name: 'Zappos'
  },
  {
    id: 'ford',
    name: 'Ford'
  },
  {
    id: 'mckinsey',
    name: 'McKinsey'
  },
  {
    id: 'pixar',
    name: 'Pixar'
  },
  {
    id: 'apple',
    name: 'Apple'
  },
  {
    id: 'mcdonalds',
    name: 'McDonald\'s'
  },
  {
    id: 'toms',
    name: 'TOMS'
  },
  {
    id: 'adidas',
    name: 'Adidas'
  },
  {
    id: 'puma',
    name: 'Puma'
  },
  {
    id: 'procter-and-gamble',
    name: 'Procter & Gamble'
  },
  {
    id: 'id-software',
    name: 'id Software'
  },
  {
    id: 'wikileaks',
    name: 'WikiLeaks'
  },
  {
    id: 'yandex',
    name: 'Яндекс'
  },
  {
    id: 'subway',
    name: 'Subway'
  },
  {
    id: 'virgin',
    name: 'Virgin'
  },
  {
    id: 'sony',
    name: 'Sony'
  },
  {
    id: 'walmart',
    name: 'Wal-Mart'
  },
  {
    id: 'ogilvy-and-mather',
    name: 'Ogilvy & Mather'
  },
  {
    id: 'amazon.com',
    name: 'Amazon.com'
  },
  {
    id: 'nokia',
    name: 'Nokia'
  },
  {
    id: 'disney',
    name: 'Disney'
  },
  {
    id: 'bmw',
    name: 'BMW'
  },
  {
    id: 'dell',
    name: 'Dell'
  },
  {
    id: 'general-electric',
    name: 'General Electric'
  },
  {
    id: 'sun',
    name: 'Sun'
  },
  {
    id: 'yahoo',
    name: 'Yahoo!'
  },
  {
    id: 'philips',
    name: 'Philips'
  }
];

entries = [];

var books = [
  {
    name: 'Coca-Cola',
    books: [
      {
        url: 'http://www.litres.ru/devid-bizli/nevil-isdell/vnutri-coca-cola-istoriya-brenda-1-glazami-legendarnogo-ceo/',
        title: 'Внутри Coca-Cola. История бренда № 1 глазами легендарного CEO'
      },
      {
        url: 'http://www.ozon.ru/context/detail/id/8261254/',
        title: 'Coca Cola. Грязная правда'
      }
    ]
  },
  {
    name: 'IKEA',
    books: [
      {
        url: 'http://www.litres.ru/anders-dalvig/ikea-soberi-svou-mechtu-kak-sovmestit-otvetstvennost-i-pribyl-v-odnoy-kompanii/',
        title: 'ИКЕА: собери свою мечту. Как совместить ответственность и прибыль в одной компании'
      },
      {
        url: 'http://www.ozon.ru/context/detail/id/5019352/',
        title: 'Вопреки абсурду. Как я покорял Россию, а она — меня'
      },
      {
        url: 'http://www.litres.ru/bertil-torekul/ingvar-kamprad/est-ideya-istoriya-ikea/',
        title: 'Есть идея! История ИКЕА'
      },
      {
        url: 'http://www.litres.ru/bertil-torekul/saga-ob-ikea/',
        title: 'Сага об ИКЕА'
      }
    ]
  },
  {
    name: 'Starbucks',
    books: [
      {
        url: 'http://www.litres.ru/govard-shulc/dori-dzhons-yeng/kak-chashka-za-chashkoy-stroilas-starbucks/',
        title: 'Как чашка за чашкой строилась Starbucks',
        alt: 'http://www.mann-ivanov-ferber.ru/books/sse/starbucks/'
      },
      {
        url: 'http://www.litres.ru/govard-shulc/starbucks-navsegda/',
        title: 'Starbucks навсегда'
      },
      {
        url: 'http://www.litres.ru/govard-behar/a-dacykova/delo-ne-v-kofe-korporativnaya-kultura-starbucks/',
        title: 'Дело не в кофе: Корпоративная культура Starbucks'
      },
      {
        url: 'http://www.ozon.ru/context/detail/id/4292534/',
        title: 'Как Старбакс спас мне жизнь'
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
      },
      {
        url:   'http://www.ozon.ru/context/detail/id/4633378/',
        title: 'Что сделал бы Google?'
      },
      {
        url:   'http://www.ozon.ru/context/detail/id/3177042/',
        title: 'Google. Прорыв в духе времени'
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
      },
      {
        url:   'http://www.litres.ru/ed-ketmell/emi-uolles/korporaciya-geniev-kak-upravlyat-komandoy-tvorcheskih-ludey-2/',
        title: 'Корпорация гениев. Как управлять командой творческих людей'
      },
      {
        url:   'http://www.litres.ru/vilyam-saymon/dzheffri-yang/ikona-stiv-dzhobs/',
        title: 'iКона. Стив Джобс'
      }
    ]
  },
  {
    name: 'Apple',
    books: [
      {
        url:   'http://www.litres.ru/uolter-ayzekson/stiv-dzhobs/',
        title: 'Стив Джобс'
      },
      {
        url:   'http://www.litres.ru/dzhina-smit/neizvestnyy-stiv-istoriya-apple-i-ee-soosnovatelya-iz-pervyh-ruk/',
        title: 'Неизвестный Стив. История Apple и ее сооснователя из первых рук'
      },
      {
        url: 'http://www.mann-ivanov-ferber.ru/books/paperbook/the_apple_expirience/',
        title: 'Правила Apple. Принципы создания искренней лояльности'
      },
      {
        url:   'http://www.litres.ru/vilyam-saymon/dzheffri-yang/ikona-stiv-dzhobs/',
        title: 'iКона. Стив Джобс'
      },
      {
        url: 'http://www.mann-ivanov-ferber.ru/books/paperbook/presentationsecretsofstevejobs2/',
        title: 'iПрезентация'
      }
    ]
  },
  {
    name: 'McDonald\'s',
    books: [
      {
        url:   'http://www.ozon.ru/context/detail/id/3991477/',
        title: 'McDonald\'s: Как создавалась империя'
      },
      {
        url:   'http://www.ozon.ru/context/detail/id/3115344/',
        title: 'McDonald\'s. О чем молчит БИГМАК?'
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
  {
    name: 'Procter & Gamble',
    books: [
      {
        url: 'http://www.ozon.ru/context/detail/id/5312456/',
        title: 'Procter & Gamble. Путь к успеху. 165-летний опыт построения брендов'
      }
    ]
  },
  {
    name: 'id Software',
    books: [
      {
        url: 'http://www.litres.ru/devid-kushner/vlasteliny-doom-kak-dvoe-parney-sozdali-igrovuu-industriu-i-vospitali-celoe-pokolenie-geymerov/',
        title: 'Властелины Doom. Как двое парней создали игровую индустрию и воспитали целое поколение геймеров'
      }
    ]
  },
  {
    name: 'WikiLeaks',
    books: [
      {
        url: 'http://www.litres.ru/dzhulian-assanzh/dzhulian-assanzh-neavtorizovannaya-avtobiografiya/',
        title: 'Джулиан Ассанж: Неавторизованная автобиография'
      }
    ]
  },
  {
    name: 'Яндекс',
    books: [
      {
        url: 'http://www.litres.ru/dmitriy-sokolov-mitrich/yandeks-kniga/',
        title: 'Яндекс.Книга'
      },
      {
        url: 'http://www.litres.ru/vladislav-dorofeev/yandeks-volozha-istoriya-sozdaniya-kompanii-mechty-2/',
        title: 'Яндекс Воложа. История создания компании мечты'
      }
    ]
  },
  {
    name: 'Subway',
    books: [
      {
        url: 'http://www.litres.ru/dzhon-heyz/fred-deluka/nachni-s-malogo-pravila-vedeniya-biznesa-ot-osnovatelya-subway/',
        title: 'Начни с малого. Правила ведения бизнеса от основателя Subway'
      }
    ]
  },
  {
    name: 'Virgin',
    books: [
      {
        url: 'http://www.litres.ru/richard-brenson/biznes-v-stile-virgin-chemu-vas-ne-nauchat-v-biznes-shkole/',
        title: 'Бизнес в стиле Virgin. Чему вас не научат в бизнес-школе'
      },
      {
        url: 'http://www.ozon.ru/context/detail/id/4621575/',
        title: 'Обнаженный бизнес'
      },
      {
        url: 'http://www.alpinabook.ru/catalogue/338020/',
        title: 'Теряя невинность: Как я построил бизнес, делая все по-своему и получая удовольствие от жизни'
      },
      {
        url: 'http://www.alpinabook.ru/catalogue/8604/',
        title: 'К черту всё! Берись и делай!'
      },
      {
        url: 'http://www.alpinabook.ru/catalogue/739203/',
        title: 'К черту «бизнес как всегда»'
      }
    ]
  },
  {
    name: 'Sony',
    books: [
      {
        url: 'http://www.litres.ru/akio-morita/sony-sdelano-v-yaponii-2/',
        title: 'Sony. Сделано в Японии'
      }
    ]
  },
  {
    name: 'Wal-Mart',
    books: [
      {
        url: 'http://www.alpinabook.ru/catalogue/4789/',
        title: 'Как я создал Wal-Mart'
      }
    ]
  },
  {
    name: 'Ogilvy & Mather',
    books: [
      {
        url: 'http://www.mann-ivanov-ferber.ru/books/paperbook/confession-of-an-advertising-man/',
        title: 'Откровения рекламного агента'
      },
      {
        url: 'http://www.mann-ivanov-ferber.ru/books/paperbook/ogilvi-o-reklame/',
        title: 'Огилви о рекламе'
      }
    ]
  },
  {
    name: 'Amazon.com',
    books: [
      {
        url: 'http://www.ozon.ru/context/detail/id/3029702/',
        title: '32 покупателя в секунду, или Как Amazon.com достиг миллиардных продаж'
      },
      {
        url: 'http://www.ozon.ru/context/detail/id/3381089/',
        title: 'Amazon.com. Секреты самого успешного в мире веб-бизнеса'
      }
    ]
  },
  {
    name: 'Nokia',
    books: [
      {
        url: 'http://www.ozon.ru/context/detail/id/3381085/',
        title: 'Nokia. Секреты самой быстро растущей компании в мире'
      }
    ]
  },
  {
    name: 'Disney',
    books: [
      {
        url: 'http://www.ozon.ru/context/detail/id/2779016/',
        title: 'Война за империю Disney'
      }
    ]
  },
  {
    name: 'BMW',
    books: [
      {
        url: 'http://www.ozon.ru/context/detail/id/5689129/',
        title: 'BMW. История семьи Квандт, возродившей компанию'
      }
    ]
  },
  {
    name: 'Dell',
    books: [
      {
        url: 'http://www.ozon.ru/context/detail/id/1901992/',
        title: 'От Dell без посредников. Стратегии, которые совершили революцию в компьютерной индустрии'
      },
      {
        url: 'http://www.ozon.ru/context/detail/id/3381088/',
        title: 'Dell. Секреты лучшего в мире компьютерного бизнеса'
      }
    ]
  },
  {
    name: 'General Electric',
    books: [
      {
        url: 'http://www.ozon.ru/context/detail/id/2900690/',
        title: 'Джек. Мои годы в GE'
      }
    ]
  },
  {
    name: 'Sun',
    books: [
      {
        url: 'http://www.ozon.ru/context/detail/id/3381091/',
        title: 'Sun. Секреты мегабренда новой экономики'
      }
    ]
  },
  {
    name: 'Yahoo!',
    books: [
      {
        url: 'http://www.ozon.ru/context/detail/id/3381087/',
        title: 'Yahoo! Секреты самой популярной в мире интернет-компании'
      }
    ]
  },
  {
    name: 'Philips',
    books: [
      {
        url: 'http://www.ozon.ru/context/detail/id/154991/',
        title: 'Формула успеха'
      }
    ]
  }
];

var Book = React.createClass({
  render: function() {
    var url = this.props.url;
    if (url.indexOf('litres') != -1) {
      url += '?lfrom=28196679';
    }
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
