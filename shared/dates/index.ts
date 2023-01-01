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

export function formattedDate(template: string): string {
  return dayjs().format(template)
}
