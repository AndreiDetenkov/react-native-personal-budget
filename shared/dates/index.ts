import dayjs from 'dayjs'

interface MonthDates {
  startDate: string
  endDate: string
}
export function getCurrentMonthDates(): MonthDates {
  const startDate = dayjs().startOf('month').format()
  const endDate = dayjs().endOf('month').format()

  return { startDate, endDate }
}

export function formatDateByTemplate(template: string): string {
  return dayjs().format(template)
}

export const formatDate = (date: string): string => {
  return dayjs(date).format('DD.MM.YYYY')
}
