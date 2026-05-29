import AddProductForm from "@/components/products/AddProductForm";
import ProductForm from "@/components/products/ProductForm";
import AdminHeading from "@/components/ui/AdminHeading";
import Link from "next/link";

export default function NewProductPage() {
  return (
    <>
      <Link
        href={'/admin/products'}
        className='rounded bg-pink-600 text-white font-bold py-2 px-10' 
      >
        Volver
      </Link>
      <AdminHeading >Nuevo Producto</AdminHeading>
      <AddProductForm>
        <ProductForm/>
      </AddProductForm>
    </>
  )
}
