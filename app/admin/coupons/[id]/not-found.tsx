import AdminHeading from "@/components/ui/AdminHeading";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className='text-center'>
      <AdminHeading>Cupon no encontrado</AdminHeading>
      <p>Tal vez quieras volver a {' '}<Link href={'/admin/coupons?page=1'} className='text-pink-600 font-bold' >Cupones</Link>
      </p>
    </div>
  )
}
