export default [{
  id: 0,
  title: 'Hand in assignment 1',
  active: true,
  standalone: false,
  due: 1506583794276,
  interval: null,
  labels: ['personal', 'ucn'],
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
  active: true,
  standalone: false,
  due: 1506883794276,
  interval: 604800,
  labels: ['personal'],
  alerts: [
    {
      time: 0,
      type: ['notification']
    }
  ]
}, {
  id: 2,
  title: 'Pay bills',
  active: false,
  standalone: true,
  due: 1506425832000,
  interval: null,
  labels: ['personal'],
  alerts: [
    {
      time: 3600,
      type: ['sms']
    }
  ]
}]
