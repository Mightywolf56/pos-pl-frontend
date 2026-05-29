import AddCategoryForm from "@/components/categories/AddCategoryForm";
import CategoryForm from "@/components/categories/CategoryForm";
import AdminHeading from "@/components/ui/AdminHeading";
import Link from "next/link";

export default function NewCategoryPage() {
  return (
    <>
      <Link
        href={'/admin/categories'}
        className='rounded bg-pink-600 text-white font-bold py-2 px-10' 
      >
        Volver
      </Link>
      <AdminHeading >Nueva Categoria</AdminHeading>
      <AddCategoryForm>
        <CategoryForm/>
      </AddCategoryForm>
    </>
  )
}
