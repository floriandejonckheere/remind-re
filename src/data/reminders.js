import moment from 'moment'

export default [{
  id: 0,
  title: 'Hand in final module project',
  due: 1507809600000,
  interval: null,
  labels: [1],
  alerts: [
    {
      time: 3600,
      type: ['email', 'sms']
    },
    {
      time: 86400,
      type: ['email']
    }
  ]
}, {
  id: 1,
  title: 'Go to the gym',
  due: moment().add(2, 'day').unix() * 1000,
  interval: 604800,
  labels: [0],
  alerts: [
    {
      time: 0,
      type: ['notification']
    }
  ]
}, {
  id: 2,
  title: 'Pay bills',
  due: moment().endOf('day').subtract(4, 'hours').unix() * 1000,
  interval: null,
  labels: [0],
  alerts: [
    {
      time: 3600,
      type: ['sms']
    }
  ]
}, {
  id: 3,
  title: 'Fix bike',
  due: moment().add(1, 'day').startOf('day').add(8, 'hours').unix() * 1000,
  interval: null,
  labels: [0, 1],
  alerts: [
    {
      time: 3600,
      type: ['sms']
    }
  ]
}]
