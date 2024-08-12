'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';
import { Modal } from '../ui/modal';
import { Textfield } from '../ui/textfield';
import { useDisclosure } from '../hooks/useDisclosure';
import React from 'react';
import { useForm } from 'react-hook-form';
import { MdOutlinePhone } from 'react-icons/md'
import { MdOutlineEmail } from "react-icons/md";

interface Form {
  phone: string;
  name: string;
}

const Header: React.FC = () => {
  const {
    isOpen: isModalOpen,
    onClose: onModaClose,
    onOpen: onModalOpen,
  } = useDisclosure();

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<Form>();

  const onSubmit = (data: Form) => {
    alert(`Здравствуйте, ${data.name}! Мы получили ваш номер телефона, в скором времени мы вам позвоним!`);
    onModaClose();
    reset();
  };

  return (
    <>
      <header className="bg-white text-gray-800 py-4 border-b border-gray-300">
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <Link href="/">
              <Image src="/assets/images/logo.png" alt="Logo" width={250} height={100} />
            </Link>
          </div>
          
          <div className='flex flex-row'>
            <div className='mr-8'>
            <Link
                href="tel: +996706123456"
                className="flex items-center text-sm space-x-2 hover:scale-110 duration-300 hover:underline"
              >
                <MdOutlinePhone className="w-6 h-6" />
                <p>0 (702) 00-05-62</p>
              </Link>
              <Link
                href="mailto:aiacademy.ceo@gmail.com"
                className="flex items-center text-sm space-x-2 hover:scale-110 duration-300 hover:underline"
              >
                <MdOutlineEmail className="w-6 h-6" />
                <p>aiacademy.ceo@gmail.com</p>
              </Link>
            </div>

          <Button
            onClick={onModalOpen}
            className="bg-academy-sky hover:bg-academy-sky-hover text-white px-5 py-2 rounded-lg"
          >
            Заказать звонок
          </Button>
          </div>
        </div>
      </header>

      <Modal isOpen={isModalOpen} onClose={onModaClose} closeButton>
        <div className="text-center space-y-4">
          <div className="text-center text-lg">
            <p>Обратный звонок</p>
            <p>Представьтесь, мы Вам перезвоним</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <Textfield
              label="Имя"
              error={errors.name && errors.name.message}
              placeholder="Ваше имя"
              {...register('name', { required: 'Обязательное поле!' })}
            />

            <Textfield
              label="Номер телефона"
              error={errors.phone && errors.phone.message}
              placeholder="+996"
              {...register('phone', { required: 'Обязательное поле!' })}
            />

            <button
              className="bg-academy-sky hover:bg-academy-sky-hover text-white mx-auto px-10 py-2 rounded-xl w-3/4"
              type="submit"
            >
              Отправить
            </button>
          </form>

          <p className="text-xs text-center">
            Продолжая, вы соглашаетесь с политикой конфиденциальности
          </p>
        </div>
      </Modal>
    </>
  );
};

export default Header;
