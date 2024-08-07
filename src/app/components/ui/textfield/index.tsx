import React from 'react'

import { twMerge } from 'tailwind-merge'

interface Props {
  label: string
  error?: string
  type?: 'text' | 'password' | 'email' | 'number'
  placeholder?: string
  defaultValue?: string | number
  onKeyDown?: () => void
}

export const Textfield = React.forwardRef<HTMLInputElement, Props>(
  (
    {
      error,
      label,
      type = 'text',
      placeholder = 'Введите ваше имя',
      defaultValue,
      onKeyDown,
      ...rest
    },
    ref,
  ) => {
    return (
      <div className={twMerge('mb-4', 'flex flex-col')}>
        <label className="text-left">{label}</label>
        <input
          placeholder={placeholder}
          className={twMerge('rounded-full bg-gray-100 placeholder-gray-500 text-black py-3 px-4 mt-2', error ? 'border-error-input' : '')}
          ref={ref}
          type={type}
          defaultValue={defaultValue}
          onKeyDown={onKeyDown}
          {...rest}
        />
        {error && <span className="text-error-message text-[14px] mt-1">{error}</span>}
      </div>
    )
  },
)
