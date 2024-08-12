// components/CategoryBlock.js
import { MdOutlineMemory, MdDataUsage, MdComputer, MdAppSettingsAlt, MdSensorOccupied, MdWork } from 'react-icons/md';

const icons = {
  "Основы ИИ": <MdOutlineMemory size={24} className="text-blue-800" />,
  "Анализ данных и визуализация": <MdDataUsage size={24} className="text-blue-800" />,
  "Машинное обучение": <MdComputer size={24} className="text-blue-800" />,
  "Разработка ИИ-приложений": <MdAppSettingsAlt size={24} className="text-blue-800" />,
  "Глубокое обучение": <MdSensorOccupied size={24} className="text-blue-800" />,
  "Возможности трудоустройства в Big Tech компаниях": <MdWork size={24} className="text-blue-800" />,
};

const CategoryBlock = ({ title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg flex items-start">
      <div className="mr-4">
        {icons[title]}
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-4">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default CategoryBlock;
