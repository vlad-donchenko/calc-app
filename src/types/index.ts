export interface ProductI {
  id: string,
  name: number | string,
  price: number | string,
  quantity: number | string,
}

export interface tableColumnI {
  gridTemplateColumns: string
}

export interface RootStateI {
  taskMessage: string,
  taskStackMessage: string,
}

export interface CalcI {
  productList: Array<ProductI>
}

export enum CalcMutation {
  SET_PRODUCT_ITEM = 'SET_PRODUCT_ITEM',
  DELETE_PRODUCT_ITEM = 'DELETE_PRODUCT_ITEM',
}

export default ProductI;
