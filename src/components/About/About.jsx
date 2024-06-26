import './About.scss';
import Breadcrumbs from '../../common/Breadcrumbs/Breadcrumbs';

const About = () => {
  return (
    <div className="aboutWrap">
      <Breadcrumbs />
      <h1>Інтернет-магазин сантехніки AquaZone</h1>
      <div className="about">
        <p>
          Інтернет-магазин AquaZone здійснює продаж інженерної сантехніки в м.
          Миколаїв та по Україні. Ми продаємо товари за справедливими цінами та
          гарантуємо їх якість, оскільки вважаємо, що онлайн-шопінг має бути
          максимально комфортним і безпечним для наших клієнтів.
        </p>
        <p>
          AquaZone є офіційним дилером, авторизованим дистриб&#39;ютором та
          офіційною точкою продажу сантехніки. Це означає, що весь товар,
          представлений у нашому інтернет-магазині сантехніки, є офіційним і має
          відповідну офіційну гарантію від виробника.
        </p>
        <p>
          Перед відправкою кожен товар обов&#39;язково перевіряється. Ми не
          відправляємо та не відвантажуємо товар, який не пройшов перевірку на
          механічні пошкодження. Усі ціни та інформація по товару на сайті є
          актуальними!
        </p>

        <p>
          Ми прагнемо забезпечити індивідуальний підхід до кожного нашого
          клієнта, підлаштовуючи наші послуги та консультації під ваші потреби
          та бажання. Наші клієнти рекомендують нас за нашу професійність та
          якість продукції.
        </p>

        <p>
          Будь-які додаткові запитання чи уточнення ви можете задати за
          контактним телефоном: <span>+38(050)174-70-15</span>
        </p>
        <p>
          чи електронною поштою: <span>masterok.mk24@gmail.com</span>
        </p>
        <ul>
          Графік роботи нашого інтернет-иагазину:
          <li>ПН-ПТ 9:00 - 17:00</li>
          <li>СБ-НД - вихідні</li>
        </ul>
        <p className="wait">Чекаємо на Вас тут!</p>
      </div>
    </div>
  );
};

export default About;
