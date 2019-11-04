function getInfo(req, res) {
  res.send({
    id: 1,
    name: 'leo',
    address: 'balabala',
  })
}

function getInfoList(req, res) {
  const data = [...Array(10)].map((v, idx) => ({
    id: idx + 1,
    name: `leo_${idx + 1}`,
    address: `balabala ${idx + 1}`,
  }))
  res.send(data)
}

export default {
  'GET /api/info': getInfo,
  'GET /api/infolist': getInfoList,
};
