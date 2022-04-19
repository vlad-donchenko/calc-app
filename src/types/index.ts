interface ResultI {
  id: string,
  firstValue: number,
  secondValue: number,
  operation: string,
  result: number
}

export interface RootStateI {
  resultList: Array<ResultI>
}

export default RootStateI;
