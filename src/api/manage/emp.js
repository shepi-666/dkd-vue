import request from '@/utils/request'

// 查询人员李彪列表
export function listEmp(query) {
  return request({
    url: '/manage/emp/list',
    method: 'get',
    params: query
  })
}

// 查询人员李彪详细
export function getEmp(id) {
  return request({
    url: '/manage/emp/' + id,
    method: 'get'
  })
}

// 新增人员李彪
export function addEmp(data) {
  return request({
    url: '/manage/emp',
    method: 'post',
    data: data
  })
}

// 修改人员李彪
export function updateEmp(data) {
  return request({
    url: '/manage/emp',
    method: 'put',
    data: data
  })
}

// 删除人员李彪
export function delEmp(id) {
  return request({
    url: '/manage/emp/' + id,
    method: 'delete'
  })
}
