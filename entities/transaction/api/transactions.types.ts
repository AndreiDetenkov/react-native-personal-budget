export interface TransactionByRangePayload {
  from: string
  to: string
}

export interface CreateTransactionPayload {
  name: string
  value: number
  category_id: string
}
