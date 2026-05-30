import { CouponSchema } from "@/app/src/schemas";
import CouponsForm from "@/components/coupons/CouponsForm";
import EditCouponForm from "@/components/coupons/EditCouponForm";
import AdminHeading from "@/components/ui/AdminHeading";
import Link from "next/link";
import { notFound } from "next/navigation";

async function getCoupon(id: string) {
  const url = `${process.env.API_URL}/coupons/${id}`
  const req = await fetch(url)
  const json = await req.json()

  if(!req.ok){
    notFound()
  }

  const coupon = CouponSchema.parse(json)
  return coupon
}

type Params = Promise<{id: string}>

export default async function EditCouponPage({params}: {params:Params}) {
  const { id } = await params
  const coupon = await getCoupon(id)

  return (
    <>
      <Link
        href={'/admin/coupons'}
        className='rounded bg-pink-600 text-white font-bold py-2 px-10' 
      >
        Volver
      </Link>
      <AdminHeading>Editar Cupon: {`${coupon.name}`}</AdminHeading>
      <EditCouponForm>
        <CouponsForm coupon={coupon}/>
      </EditCouponForm>
    </>
  )
}
