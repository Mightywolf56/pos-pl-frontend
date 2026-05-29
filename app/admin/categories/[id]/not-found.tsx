import AdminHeading from "@/components/ui/AdminHeading";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className='text-center'>
      <AdminHeading>Categoria no encontrada</AdminHeading>
      <p>Tal vez quieras volver a {' '}<Link href={'/admin/categories?page=1'} className='text-pink-600 font-bold' >Categorias</Link>
      </p>
    </div>
  )
}
