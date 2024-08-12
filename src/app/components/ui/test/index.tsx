import React, { useState } from 'react';
import TestModal from '../testmodal';


const Test: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [answers, setAnswers] = useState({ question1: '', question2: '' });
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleAnswerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAnswers({ ...answers, [name]: value });
  };

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(e.target.value);
  };

  const handleTestSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <button
        onClick={handleOpenModal}
        className="mt-2 bg-academy-sky hover:bg-academy-sky-hover text-white px-5 py-2 duration-300 rounded-xl"
      >
        Начать опрос
      </button>

      <TestModal isOpen={isModalOpen} onClose={handleCloseModal}>
        {!isSubmitted ? (
          <form onSubmit={handleTestSubmit} className="space-y-4">
            <div>
              <p className="font-semibold">1. Чем вы занимаетесь?</p>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="question1"
                    value="schoolkid"
                    onChange={handleAnswerChange}
                    checked={answers.question1 === 'schoolkid'}
                    className="mr-2"
                  />
                  Школьник
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="question1"
                    value="student"
                    onChange={handleAnswerChange}
                    checked={answers.question1 === 'student'}
                    className="mr-2"
                  />
                  Студент
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="question1"
                    value="worker"
                    onChange={handleAnswerChange}
                    checked={answers.question1 === 'worker'}
                    className="mr-2"
                  />
                  Работаю
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="question1"
                    value="other"
                    onChange={handleAnswerChange}
                    checked={answers.question1 === 'other'}
                    className="mr-2"
                  />
                  Другое
                </label>
              </div>
            </div>

            <div>
              <p className="font-semibold">2. Обучались ли вы программированию ранее?</p>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="question2"
                    value="yes"
                    onChange={handleAnswerChange}
                    checked={answers.question2 === 'yes'}
                    className="mr-2"
                  />
                  Да
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="question2"
                    value="No"
                    onChange={handleAnswerChange}
                    checked={answers.question2 === 'No'}
                    className="mr-2"
                  />
                  Нет
                </label>
              </div>
            </div>

            <div>
              <p className="font-semibold">3. Пожалуйста, введите ваш номер телефона</p>
              <input
                type="tel"
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
                placeholder="+996"
                required
                className="border border-gray-300 p-2 rounded w-full"
              />
            </div>

            <button
              type="submit"
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
              Отправить
            </button>
          </form>
        ) : (
          <div className="text-center">
            <p>Спасибо за прохождение опроса!</p>
          </div>
        )}
      </TestModal>
    </>
  );
};

export default Test;
