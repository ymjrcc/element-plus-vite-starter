import { ElMessage } from "element-plus"

export async function fetchData({
  url,
  options,
}: {
  url: string
  options?: RequestInit
}) {
  if (!options) {
    options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      },
    }
  }
  try {
    const response = await fetch(url, options)
    // 检查响应状态，如果是401未登录，重定向到登录页面
    if (response.status === 401) {
      window.location.href = '/login'
      return
    }
    // 处理5XX错误
    if (response.status >= 500 && response.status < 600) {
      const errorData = await response.json().catch(() => ({}))
      console.error('Server error:', errorData)
      ElMessage.error(errorData?.message || '网络错误，请稍后再试')
      return
    }
    // 二进制数据处理
    if (response.headers.get('Content-Type') !== 'application/json; charset=utf-8') {
      console.log('%c [ response.headers.get("Content-Type") ]-119', 'font-size:13px; background:pink; color:#bf2c9f;', response.headers.get('Content-Type'))
      const blob = await response.blob()
      return blob
    }
    if (response.body) {
      const res = await response.json()
      if (res.success) {
        return res.data
      } else {
        ElMessage.error(res.message)
        throw new Error(res.message)
      }
    }
  }
  catch (error: any) {
    console.error('Error:', error)
    throw error
  }
}
