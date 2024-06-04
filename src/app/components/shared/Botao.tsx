import { ButtonHTMLAttributes } from 'react'

export interface BotaoProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: any
  className?: string
  variant?: 'primary' | 'secondary' | 'danger'
}

export default function Botao({ variant = 'primary', ...props }: BotaoProps) {
  const COLORS_VARIANTS = {
    primary: 'bg-blue-500 hover:bg-blue-400 color-white',
    secondary: 'bg-zinc-500 hover:bg-zinc-400 color-white',
    danger: 'bg-red-500 hover:bg-red-400 color-white',
  }

  return (
    <button
      {...props}
      className={`px-4 py-2 rounded-md ${COLORS_VARIANTS[variant]} ${
        props.className ?? ''
      }`}
    >
      {props.children}
    </button>
  )
}
