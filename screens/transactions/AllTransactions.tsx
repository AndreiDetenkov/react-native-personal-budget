import React from 'react'
import { FlatList, ListRenderItemInfo } from 'react-native'

import { useAppSelector } from '../../app/store'
import { TransactionCard, transactionModel, TransactionsItem } from '../../entities/transaction'
import { FullLayout } from '../../shared/styled'
import { SafeAreaView } from 'react-native-safe-area-context'

export const AllTransactions = () => {
  const list = useAppSelector(transactionModel.allTransactionsSelector)

  return (
    <FullLayout>
      <SafeAreaView>
        <FlatList
          data={list}
          renderItem={({ item }: ListRenderItemInfo<TransactionsItem>) => (
            <TransactionCard transaction={item} />
          )}
          keyExtractor={(transaction: TransactionsItem) => transaction.id}
        />
      </SafeAreaView>
    </FullLayout>
  )
}
