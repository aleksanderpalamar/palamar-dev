export const formatDate = (date: string) => {
  const dateObj = new Date(date)
  const hours = dateObj.getHours()
  const minutes = dateObj.getMinutes()
  const PM = hours >= 12 ? 'PM' : 'AM'
  const month = dateObj.toLocaleString('default', { month: 'short' })
  const day = dateObj.getDate()
  const year = dateObj.toLocaleDateString('default', { year: '2-digit' })
  return `${day} de ${month}, ${year} at ${hours}:${minutes} - ${PM}`
}