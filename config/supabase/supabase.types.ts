import {getTransactions} from "../../models/transactions";
import {Database} from "./database.types";

type Categories = Database["public"]["Tables"]["categories"]["Row"];

type TransactionsResponse = Awaited<ReturnType<typeof getTransactions>>
export type TransactionsResponseSuccess = TransactionsResponse['data']
export type TransactionsResponseError = TransactionsResponse["error"];

