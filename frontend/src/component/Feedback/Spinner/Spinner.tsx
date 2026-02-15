import './Spinner.css'

import clsx from 'clsx'

type SpinnerProps = {
  className?: string
}

export const Spinner = ({ className }: SpinnerProps) => {
  return <span className={clsx('spinner', className)} />
}
