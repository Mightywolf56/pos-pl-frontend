import { CategorySchema } from "@/app/src/schemas";
import CategoryForm from "@/components/categories/CategoryForm";
import EditCategoryForm from "@/components/categories/EditCategoryForm";
import AdminHeading from "@/components/ui/AdminHeading";
import Link from "next/link";
import { notFound } from "next/navigation";

async function getCategory(id: string) {
  const url = `${process.env.API_URL}/categories/${id}`
  const req = await fetch(url)
  const json = await req.json()

  if(!req.ok){
    notFound()
  }

  const category = CategorySchema.parse(json)
  return category
}

type Params = Promise<{id: string}>

export default async function EditCategoryPage({params}: {params:Params}) {
  const { id } = await params
  const category = await getCategory(id)

  return (
    <>
      <Link
        href={'/admin/categories'}
        className='rounded bg-pink-600 text-white font-bold py-2 px-10' 
      >
        Volver
      </Link>
      <AdminHeading>Editar Categoria: {`${category.name}`}</AdminHeading>
      <EditCategoryForm>
        <CategoryForm category={category}/>
      </EditCategoryForm>
    </>
  )
}
