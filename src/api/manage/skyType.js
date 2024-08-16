import request from '@/utils/request'

// 查询商品类型列表
export function listSkyType(query) {
  return request({
    url: '/manage/skyType/list',
    method: 'get',
    params: query
  })
}

// 查询商品类型详细
export function getSkyType(classId) {
  return request({
    url: '/manage/skyType/' + classId,
    method: 'get'
  })
}

// 新增商品类型
export function addSkyType(data) {
  return request({
    url: '/manage/skyType',
    method: 'post',
    data: data
  })
}

// 修改商品类型
export function updateSkyType(data) {
  return request({
    url: '/manage/skyType',
    method: 'put',
    data: data
  })
}

// 删除商品类型
export function delSkyType(classId) {
  return request({
    url: '/manage/skyType/' + classId,
    method: 'delete'
  })
}
