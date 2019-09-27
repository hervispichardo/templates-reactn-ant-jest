import moment from 'moment-timezone'
import './locale.js'
moment.locale('es')

const toUtc = (time) => {
  const format = 'HH:mm:ss'
  return moment(time, format).tz('America/Santiago').utc().format(format)
}

const toLocal = (time, short) => {
  const format = short ? 'HH:mm' : 'HH:mm:ss'
  return moment.utc(time, format).tz('America/Santiago').format(format)
}

const isToday = (date) => {
  const today = moment().format('YYYY-MM-DD')
  const disabled = moment(date).format('YYYY-MM-DD')

  return R.equals(today, disabled)
}

export {
  toUtc,
  toLocal,
  isToday,
}