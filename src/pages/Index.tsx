import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const menuItems = [
    {
      category: 'Кофе',
      items: [
        { name: 'Эспрессо', price: '150₽', description: 'Классический итальянский кофе' },
        { name: 'Капучино', price: '200₽', description: 'С нежной молочной пенкой' },
        { name: 'Латте', price: '220₽', description: 'Мягкий кофе с молоком' },
        { name: 'Флэт уайт', price: '210₽', description: 'Двойной эспрессо с микропеной' },
      ]
    },
    {
      category: 'Десерты',
      items: [
        { name: 'Чизкейк', price: '250₽', description: 'Классический нью-йоркский' },
        { name: 'Тирамису', price: '280₽', description: 'Итальянский десерт с маскарпоне' },
        { name: 'Макарон', price: '100₽', description: 'Французское миндальное печенье' },
        { name: 'Брауни', price: '200₽', description: 'Шоколадный пирог' },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-primary">Щегол</h1>
            <div className="hidden md:flex gap-8">
              {['Главная', 'Меню', 'О нас', 'Доставка', 'Контакты'].map((item, idx) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(['home', 'menu', 'about', 'delivery', 'contacts'][idx])}
                  className="text-foreground hover:text-primary transition-colors font-medium"
                >
                  {item}
                </button>
              ))}
            </div>
            <Button variant="default" className="hidden md:block">
              Заказать
            </Button>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-24 pb-20 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
                Кофейня<br />с душой
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Каждая чашка — это история о качественных зёрнах, мастерстве бариста и любви к кофе
              </p>
              <div className="flex gap-4">
                <Button size="lg" onClick={() => scrollToSection('menu')}>
                  Меню
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection('about')}>
                  О нас
                </Button>
              </div>
            </div>
            <div className="animate-scale-in">
              <img
                src="https://cdn.poehali.dev/projects/6c1941de-4914-42e9-8216-c3e3f0dbd70b/files/25611a48-6f2b-43af-a96e-1a35b0adf9c6.jpg"
                alt="Кофе"
                className="rounded-lg shadow-2xl w-full object-cover h-[500px]"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="menu" className="py-20 px-6 bg-secondary/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-foreground">Меню</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {menuItems.map((category, idx) => (
              <div key={category.category} className="animate-fade-in" style={{ animationDelay: `${idx * 0.1}s` }}>
                <h3 className="text-2xl font-semibold mb-6 text-primary">{category.category}</h3>
                <div className="space-y-4">
                  {category.items.map((item) => (
                    <Card key={item.name} className="p-6 hover:shadow-lg transition-shadow">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-lg font-semibold text-foreground">{item.name}</h4>
                        <span className="text-lg font-bold text-primary">{item.price}</span>
                      </div>
                      <p className="text-muted-foreground text-sm">{item.description}</p>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img
                src="https://cdn.poehali.dev/projects/6c1941de-4914-42e9-8216-c3e3f0dbd70b/files/22d14069-7924-4bf6-b9a4-f84a9225d1f2.jpg"
                alt="Интерьер кофейни"
                className="rounded-lg shadow-2xl w-full object-cover h-[400px]"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl font-bold mb-6 text-foreground">О кофейне</h2>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                Мы открылись в 2020 году с простой идеей — делать отличный кофе и создавать уютное пространство для встреч.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Работаем только со свежеобжаренными зёрнами от локальных обжарщиков. Каждый напиток готовим с заботой и вниманием к деталям.
              </p>
              <div className="grid grid-cols-3 gap-4 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">5+</div>
                  <div className="text-sm text-muted-foreground">Лет опыта</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">20+</div>
                  <div className="text-sm text-muted-foreground">Видов кофе</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">1000+</div>
                  <div className="text-sm text-muted-foreground">Гостей в месяц</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="delivery" className="py-20 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-16 text-foreground">Доставка</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <Icon name="Clock" size={48} className="mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-3 text-foreground">30 минут</h3>
              <p className="text-muted-foreground">Доставим горячий кофе за полчаса</p>
            </Card>
            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <Icon name="MapPin" size={48} className="mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-3 text-foreground">В радиусе 3 км</h3>
              <p className="text-muted-foreground">Бесплатная доставка по району</p>
            </Card>
            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <Icon name="ShoppingBag" size={48} className="mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-3 text-foreground">От 500₽</h3>
              <p className="text-muted-foreground">Минимальная сумма заказа</p>
            </Card>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-16 text-foreground">Контакты</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="mb-8">
                <div className="flex items-start gap-4 mb-6">
                  <Icon name="MapPin" size={24} className="text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1 text-foreground">Адрес</h3>
                    <p className="text-muted-foreground">ул. Пушкина, 10<br />Москва, 101000</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 mb-6">
                  <Icon name="Phone" size={24} className="text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1 text-foreground">Телефон</h3>
                    <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Icon name="Clock" size={24} className="text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1 text-foreground">Режим работы</h3>
                    <p className="text-muted-foreground">Пн-Вс: 8:00 — 22:00</p>
                  </div>
                </div>
              </div>
            </div>
            <Card className="p-8">
              <h3 className="text-xl font-semibold mb-6 text-foreground">Напишите нам</h3>
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Ваше имя"
                    className="w-full px-4 py-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Сообщение"
                    rows={4}
                    className="w-full px-4 py-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background resize-none"
                  />
                </div>
                <Button className="w-full" size="lg">
                  Отправить
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-12 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Щегол</h2>
          <p className="text-primary-foreground/80 mb-6">Кофейня с душой</p>
          <div className="flex justify-center gap-6 mb-6">
            <a href="#" className="hover:opacity-80 transition-opacity">
              <Icon name="Instagram" size={24} />
            </a>
            <a href="#" className="hover:opacity-80 transition-opacity">
              <Icon name="Facebook" size={24} />
            </a>
            <a href="#" className="hover:opacity-80 transition-opacity">
              <Icon name="Twitter" size={24} />
            </a>
          </div>
          <p className="text-sm text-primary-foreground/60">© 2024 Щегол. Все права защищены</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
