import { Coupon } from "@/app/src/schemas";

export default async function CouponsForm({coupon}: {coupon?: Coupon}) {

  return (
    <>
      <div className="space-y-2 ">
        <label htmlFor="name" className="block">
          Nombre del Cupon
        </label>
        <input
          id="name"
          type="text"
          placeholder="Nombre de la Categoria"
          className="border border-gray-300 w-full p-2"
          name="name"
          defaultValue={coupon?.name}
        />
        <label htmlFor="name" className="block">
          Porcentaje
        </label>
        <input
          id="percentage"
          type="number"
          placeholder="Porcentaje del cupon"
          className="border border-gray-300 w-full p-2"
          name="percentage"
          defaultValue={coupon?.percentage}
        />
        <label htmlFor="name" className="block">
          Fecha de vigencia del cupon
        </label>
        <input
          id="expirationDate"
          type="date"
          placeholder="Fecha de expiración del cupon"
          className="border border-gray-300 w-full p-2"
          name="expirationDate"
          defaultValue={coupon?.expirationDate}
        />
      </div>
    </>
  );
}
