import AdminHeading from "@/components/ui/AdminHeading";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className='text-center'>
      <AdminHeading>Producto no encontrado</AdminHeading>
      <p>Tal vez quieras volver a {' '}<Link href={'/admin/products?page=1'} className='text-pink-600 font-bold' >Productos</Link>
      </p>
    </div>
  )
}
