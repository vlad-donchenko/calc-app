export interface ProductI {
  id: string,
  name: number | string,
  price: number | string,
  quantity: number | string,
}

export interface RootStateI {
  resultList: Array<ProductI>
}

export default ProductI;
