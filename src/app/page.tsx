'use client';
import { PagesContainer } from "./components/pagesContainer";
import { MdDeveloperMode } from "react-icons/md";
import CategoryBlock from "./components/categoryblock";
import { MdOutlineSchool, MdWork, MdFlag, MdComputer } from 'react-icons/md';
import { Button } from "./components/ui/button";
import Image from 'next/image';
import Link from "next/link";


const categories = [
  {
    title: "Основы ИИ",
    description: "Узнайте, что такое ИИ, его основные термины и как он работает. Поймите, как ИИ используется в разных сферах и научитесь создавать базовые модели."
  },
  {
    title: "Анализ данных и визуализация",
    description: "Научитесь собирать, анализировать и визуализировать данные. Создавайте простые графики и отчеты для представления информации."
  },
  {
    title: "Машинное обучение",
    description: "Изучите основные алгоритмы и как применять их на практике. Создавайте и улучшайте модели на реальных данных."
  },
  {
    title: "Разработка ИИ-приложений",
    description: "Интегрируйте ИИ в приложения. Используйте API и облачные сервисы для создания полезных решений."
  },
  {
    title: "Глубокое обучение",
    description: "Освойте нейронные сети и их применение. Работайте с популярными фреймворками для разработки сложных моделей."
  },
  {
    title: "Возможности трудоустройства в Big Tech компаниях",
    description: "Узнайте, какие навыки нужны для работы в крупных IT-компаниях. Готовьтесь к собеседованиям и оценивайте карьерные возможности."
  }
];

const teachers = [
  {
    name: 'Тимур Туратали',
    title: 'Преподаватель по Machine Learning',
    description: 'Senior Data Scientist',
    description2: "Опыт работы: 7+ лет опыта работы",
    description3: "Места работы: Citi Bank, EY",
    description4: "Опыт преподавания: более 3 лет",
    imageUrl: '/assets/images/1.jpg', 
  },
  {
    name: 'Жетиген Сулаиманов',
    title: 'Преподаватель по Data Analyst',
    description: 'Senior Data Analyst',
    description2: "Опыт работы: 7+ лет опыта работы",
    description3: "Компаньон Банк, Highland Capital",
    description4: "Опыт преподавания: более 1 года",
    imageUrl: '/assets/images/2.jpg', 
  },
  {
    name: 'Адиль Аденов',
    title: 'Преподаватель по Deep Learning',
    description: 'Senior Machine Learning Engineer',
    description2: "Опыт работы: 6+ лет опыта работы",
    description3: "360.tech, KODIF, Doscredbank",
    description4: "Опыт преподавания: более 2 лет",
    imageUrl: '/assets/images/4.jpg', 
  },
  {
    name: 'Ден Павлов',
    title: 'Преподаватель по Python & Math',
    description: 'Middle Machine Learning Engineer',
    description2: "Опыт работы: 2+ лет опыта работы",
    description3: "The Cramer Project",
    description4: "Опыт преподавания: более 7 лет (Физмат, МАИ)",
    imageUrl: '/assets/images/5.jpg', 
  },
  {
    name: 'Пархат Базаков',
    title: 'Преподаватель по Data Science',
    description: 'Middle Data Scientist',
    description2: "Опыт работы: 4+ лет опыта работы",
    description3: "The Cramer Project, ITCareerHub",
    description4: "Опыт преподавания: более 1 года",
    imageUrl: '/assets/images/3.jpg', 
  },
];

const courses = [
  {
    name: 'Data Analytics',
    descr: 'Курс для начинающих',
    image: 'https://assets.datamation.com/uploads/2023/08/dm08172023-what-is-data-analytics-768x502.png',
    time: '5 раз в неделю по 2 часа',
    duration: '4 месяца оффлайн'
  },
  {
    name: 'Data Science',
    descr: 'Курс для начинающих',
    image: 'https://builtin.com/sites/www.builtin.com/files/styles/ckeditor_optimize/public/inline-images/Data%20Science%201600x800.jpg',
    time: '5 раз в неделю по 2 часа',
    duration: '6 месяцев оффлайн + 1 месяц онлайн'
  },
  {
    name: 'Data Science PRO',
    descr: 'Курс для продолжающих (python)',
    image: 'https://www.inteliment.com/wp-content/uploads/2021/05/37-The-Techniques-Team-and-Tools-for-Effective-Data-Science.jpg',
    time: '5 раз в неделю по 2 часа',
    duration: '6 месяцев оффлайн + 1 месяц онлайн'
  },
  {
    name: 'Data Science PRO Math',
    descr: 'Курс для математиков',
    image: 'https://www.datasciencedegreeprograms.net/wp-content/uploads/2022/08/math-in-data-science.jpg',
    time: '5 раз в неделю по 2 часа',
    duration: '6 месяцев оффлайн + 1 месяц онлайн'
  },
]


export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Section 1 */}
      <div className="relative h-screen w-full bg-cover bg-center p-20" style={{ backgroundImage: "url('/assets/images/background.jpg')" }}>
        <div className="flex flex-col w-full h-full justify-between p-4">
          <div className="flex flex-col w-full md:w-1/2 h-2/3 justify-between py-4">
            <h1 className="text-gray-50 text-5xl md:text-6xl font-medium" style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}>Хватит терять время на неэффективные курсы!</h1>
            <h4 className="text-gray-50 text-2xl md:text-2xl mt-2 dont-semibold" style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}>
              Станьте профессионалом в аналитике данных всего за <span className="text-blue-600 font-bold" style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}>6 месяцев</span> <br />
              с <span className="text-blue-600 font-bold">AI ACADEMY</span> и начните свою карьеру с гарантированной стажировки
            </h4>
          </div>
          <div className="flex flex-row items-center pt-4 md:mt-0 absolute bottom-4 left-15">
            <MdDeveloperMode className="text-white" size={24} />
            <p className="text-white ml-1 text-base" style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}>Бесплатное пробное занятие — убедитесь сами!</p>
          </div>
        </div>
      </div>
      {/* Section 2 */}
      <PagesContainer>
        <div className="py-10">
          <h1 className="text-blue-800 text-4xl md:text-6xl font-semibold text-center">На наших занятиях вы узнаете:</h1>
        </div>
        <div className="container mx-auto p-6">
          <div className="grid gap-6 grid-cols-2 sm:grid-cols-1 lg:grid-cols-3">
          {categories.map((category) => (
          <CategoryBlock
            key={category.title}
            title={category.title}
            description={category.description}
          />
          ))}
          </div>
        </div>
        <div>
        </div>
          {/* Section 3 */}
          <div className="py-10">
            <h1 className="text-blue-800 text-4xl md:text-6xl font-semibold text-center">Почему именно AI Академия?</h1>

            <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-4 md:grid-cols-2 sm:grid-cols-4 gap-8 text-center">
        
        {/* Первая AI академия */}
        <div className="flex flex-col items-center">
          <MdOutlineSchool size={50} className="text-blue-800 mb-4" />
          <h3 className="text-xl font-bold mb-2">Первая AI Академия</h3>
          <p className="text-gray-700">
          Наша академия — первая в Кыргызстане, ориентированная на подготовку специалистов в области искусственного интеллекта. 
          Мы создаём будущее уже сегодня, обучая студентов навыкам, востребованным в ведущих IT-компаниях. 
          </p>
          <div className="pt-10">
            <h1 className="text-blue-800 text-5xl py-5 font-bold text-center border-b border-gray-300">5000+</h1>
            <p className="py-5">Выпускников программ Академии</p>
          </div>
        </div>
        
        {/* Гарантированная стажировка */}
        <div className="flex flex-col items-center">
          <MdWork size={50} className="text-blue-800 mb-4" />
          <h3 className="text-xl font-bold mb-2">Гарантированная стажировка</h3>
          <p className="text-gray-700">
          Учитесь у лучших и получайте гарантированную стажировку в ведущих мировых компаниях. 
          Мы поможем вам не только освоить профессию, но и обеспечить плавный переход в реальный мир технологий. 
          </p>
          <div className="pt-10">
            <h1 className="text-blue-800 text-5xl py-5 font-bold text-center border-b border-gray-300">КАРПОУ</h1>
            <p className="py-5">AI Академия - часть крупнейшего IT-сообщества Кыргызстана </p>
          </div>
        </div>
        
        {/* Работа в кремниевой долине */}
        <div className="flex flex-col items-center">
          <MdFlag size={50} className="text-blue-800 mb-4" />
          <h3 className="text-xl font-bold mb-2">Работа в кремниевой долине</h3>
          <p className="text-gray-700">
          Мечтаете о карьере в Кремниевой долине? Лучшие выпускники нашей академии получают уникальный шанс 
          отправиться в США и работать в самом сердце мировой IT-индустрии. Откройте двери в будущее вместе с нами!
          </p>
          <div className="pt-10">
            <h1 className="text-blue-800 text-5xl py-5 font-bold text-center border-b border-gray-300">7+ лет</h1>
            <p className="py-5">На рынке IT-образования</p>
          </div>
        </div>
        
        {/* Лучшие преподаватели в Кыргызстане */}
        <div className="flex flex-col items-center">
          <MdComputer size={50} className="text-blue-800 mb-4" />
          <h3 className="text-xl font-bold mb-2">Лучшие преподаватели в Кыргызстане</h3>
          <p className="text-gray-700">
          В нашей академии преподают эксперты мирового уровня, готовые делиться своим опытом и знаниями. 
          Мы объединили лучших специалистов, чтобы вы могли учиться у настоящих лидеров отрасли.           
          </p>
          <div className="pt-10">
            <h1 className="text-blue-800 text-5xl py-5 font-bold text-center border-b border-gray-300">1000+</h1>
            <p className="py-5">Трудоустроенных выпускников</p>
          </div>
        </div>
        </div>
        </div>

        {/* Section 4 - mk */}

        <div className="flex flex-row justify-around py-8">
            <div>
              <h3 className="text-blue-800 font-semibold text-2xl">Готовы создать свой первый проект?</h3>
              <p className="pt-2">Оставьте заявку и мы запишем Вас на мастер-класс</p>
            </div>
            <div className="flex flex-row h-1/2 pt-3">
              <form action="" className="border-b border-gray-900 mr-3"><input type="text" placeholder="Номер телефона" className="outline-none"/></form>
              <Button>Записаться на мастер-класс</Button>
            </div>
        </div>

        {/* Section 5 - преподы */}
        <div className="container mx-auto py-10">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">Наши преподаватели</h2>
        <div className="grid grid-cols-5 md:grid-cols-2 sm:grid-cols-3 gap-6">
          {teachers.map((teacher, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="flex justify-center mb-4">
                <Image
                  src={teacher.imageUrl}
                  alt={teacher.name}
                  width={180}
                  height={180}
                  className="rounded-full object-cover"
                />
              </div>
              <div className="text-center">
                <div className="w-50 h-14">
                  <h3 className="text-lg font-semibold mb-2">{teacher.name}</h3>
                </div>
                <p className="text-blue-600 mb-4">{teacher.title}</p>
                <div className="text-start">
                  <p className="text-gray-700">{teacher.description}</p>
                  <p className="text-gray-700">{teacher.description2}</p>
                  <p className="text-gray-700">{teacher.description3}</p>
                  <p className="text-gray-700">{teacher.description4}</p>
                </div>
              
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section 6 - courses */}
      <div className="container mx-auto p-5">
      <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">Доступные курсы</h2>
      <div className="grid grid-cols-2 sm:grid-cols-1 gap-4">
      {courses.map((course, index) => (
          <div className="flex flex-col p-4 rounded-md shadow-md">
            <div className="flex flex-row justify-between px-10">
              <div className="md:w-1/2 md:pr-4 pt-4">
                <h2 className="text-lg font-semibold">{course.name}</h2>
                <p className="text-sm mb-2">{course.descr}</p>
                <p className="text-sm mb-2"><strong>График:</strong> {course.time}</p>
                <p className="text-sm mb-2"><strong>Длительность:</strong> {course.duration}</p>
                <Link href="https://wa.me/+996772000562" target='_blank'>
                  <button className="border-blue-800 hover:border-doclab-sky-hover hover:bg-slate-100 border h-10 w-56 duration-300 rounded-xl font-medium my-5">Узнать подробнее</button>
                </Link>
              </div>
              <div className="md:w-1/2">
                <img src={course.image} 
                alt={course.name} 
                className="w-40 h-40 object-cover mb-2 rounded-full md:ml-auto" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Section 7 - partners */}
    <div className="py-10">
      <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">Наши партнеры</h2>
      <div className="flex flex-row align-center justify-center gap-20 w-full h-30 justify-around">
        <Link href="http://htp.kg/" target='_blank'><Image src="/assets/images/htp.jpg" alt="Logo" width={250} height={100} /></Link>
        <Link href="https://www.instagram.com/kssda.kg/" target='_blank'><Image src="/assets/images/KSSDA.png" alt="Logo" width={150} height={100} /></Link>
        <Link href="https://thecramer.com/" target='_blank'><Image src="/assets/images/cramer.jpg" alt="Logo" width={300} height={300} /></Link>
        <Link href="https://bigdatateam.org" target='_blank'><Image src="/assets/images/bigdata.jpg" alt="Logo" width={280} height={100} /></Link>
      </div>
    </div>
    {/* Section 8 - Contact us */}
    <div className="py-10 flex flex-row md:flex-col">
        <div>
          <h2 className="text-3xl font-bold text-blue-800 py-5">Как нас найти:</h2>
          <p className="text-2xl">График работы: 9:00 - 21:00</p>
          <p className="text-2xl">Понедельник - Пятница</p>
          <p className="pt-10"> <span className="font-semibold">Адрес:</span> Бишкек, пр. Чуй 265/1, Парк Высоких Технологий (вход со стороны ул. Уметалиева)</p>
          <p className="py-4"><span className="font-semibold">Email:</span> aiacademy.ceo@gmail.com</p>
          <Link href="https://wa.me/+996772000562" target='_blank'>
            <button className="border-blue-800 hover:border-doclab-sky-hover hover:bg-slate-100 border h-10 w-56 duration-300 rounded-xl font-medium my-5">Связаться с нами</button>
          </Link>
        </div>
        <div>
        <iframe className="h-96" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2923.757556552603!2d74.57712117565744!3d42.87796110222571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389ec96991f6bf6f%3A0xa3add42d4faf4a33!2sHigh%20Technology%20Park%20of%20the%20Kyrgyz%20Republic!5e0!3m2!1sru!2skg!4v1723211122259!5m2!1sru!2skg" width="600" height="450" loading="lazy"></iframe>
        </div>
    </div>
    <div>

    </div>

          </div>
      </PagesContainer>
    </main>
  );
}
