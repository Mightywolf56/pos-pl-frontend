import AddCouponForm from "@/components/coupons/AddCouponForm";
import CouponsForm from "@/components/coupons/CouponsForm";
import AdminHeading from "@/components/ui/AdminHeading";
import Link from "next/link";

export default function NewCouponPage() {
  return (
    <>
      <Link
        href={'/admin/coupons'}
        className='rounded bg-pink-600 text-white font-bold py-2 px-10' 
      >
        Volver
      </Link>
      <AdminHeading >Nuevo Cupon</AdminHeading>
      <AddCouponForm>
        <CouponsForm/>
      </AddCouponForm>
    </>
  )
}