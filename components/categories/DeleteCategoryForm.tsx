
import { Category } from "@/app/src/schemas";
import { revalidatePath } from "next/cache";

export default function DeleteCategoryForm({categoryId}: {categoryId: Category['id']}) {

  const handleDeleteProduct = async () => {
    "use server"
    const url = `${process.env.API_URL}/categories/${categoryId}`
    const req = await fetch(url, {
    method: "DELETE"
  });
  await req.json()
  revalidatePath('/admin/categories')
  }

  return (
    <form
      action={handleDeleteProduct} 
    >
      <input 
        type="submit"
        className='text-red-600 hover:text-red-800 cursor-pointer'
        value='Eliminar'
      />
    </form>
  )
}
