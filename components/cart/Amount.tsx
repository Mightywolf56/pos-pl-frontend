import { formatCurrency } from "@/app/src/utils"

type AmountProps = {
  label: string
  amount: number
  discount?: boolean
}

export default function Amount({label, amount, discount}: AmountProps) {
  return (
    <div className={`${discount && 'bg-green-300 text-green-800'} flex justify-between p-1`} >
      <dt className='font-bold  text-2xl'>
        {label}
      </dt>
      <dd className='text-gray-900 text-2xl'>
        {discount && '-'} {formatCurrency(amount)}
      </dd>
    </div>
  )
}