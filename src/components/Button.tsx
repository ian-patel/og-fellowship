import type { AnchorHTMLAttributes, ReactNode } from 'react'

type Variant = 'crimson' | 'cream' | 'glass' | 'light'

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: Variant
  disabled?: boolean
  children: ReactNode
}

export default function Button({ variant = 'crimson', disabled, className = '', children, ...rest }: Props) {
  const classes = ['btn', `btn--${variant}`, disabled ? 'btn--disabled' : '', className].filter(Boolean).join(' ')
  return (
    <a className={classes} aria-disabled={disabled || undefined} tabIndex={disabled ? -1 : undefined} {...rest}>
      {children}
    </a>
  )
}
