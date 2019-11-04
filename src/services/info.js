import request from '@/utils/request';

export async function getInfo() {
  return request.get('/api/info');
}

export async function getInfoList() {
  return request.get('/api/infolist');
}
