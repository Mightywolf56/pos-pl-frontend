import { ProductSchema } from "@/app/src/schemas";
import EditProductForm from "@/components/products/EditProductForm";
import ProductForm from "@/components/products/ProductForm";
import AdminHeading from "@/components/ui/AdminHeading";
import Link from "next/link";
import { notFound } from "next/navigation";

async function getProduct(id: string) {
  const url = `${process.env.API_URL}/products/${id}`
  const req = await fetch(url)
  const json = await req.json()

  if(!req.ok){
    notFound()
  }

  const product = ProductSchema.parse(json)
  return product
}

type Params = Promise<{id: string}>

export default async function EditProductPage({params}: {params:Params}) {
  const { id } = await params
  const product = await getProduct(id)

  return (
    <>
      <Link
        href={'/admin/products'}
        className='rounded bg-pink-600 text-white font-bold py-2 px-10' 
      >
        Volver
      </Link>
      <AdminHeading>Editar Producto: {`${product.name}`}</AdminHeading>
      <EditProductForm>
        <ProductForm product={product}/>
      </EditProductForm>
    </>
  )
}
