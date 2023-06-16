import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

export function dateFormat(date: string) {
  const _date = new Date(date)
  return formatDistanceToNow(_date, {
    addSuffix: true,
    locale: ptBR,
  })
}
