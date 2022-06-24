/*
 * @Author: vivi.
 * @Date: 2022-05-24 12:17:45
 * @LastEditTime: 2022-05-24 13:09:17
 * @FilePath: \MyFirstProject\src\js\login.js
 * @Description: 
 */
$('form').on('submit', function (e) {
    e.preventDefault()

    const data = $('form').serialize()
    console.log(data)

    $.post('http://localhost:3007/api/login', data, res => {
        console.log(res)
        if (res.status === 1) {
            $('form>span').css('display', 'block')
            return
        }
        window.alert('登录成功，点击确定跳转到首页')

        window.localStorage.setItem('token', res.token)
        window.localStorage.setItem('id', res.id)
        window.location.href = './index.html'
    })
})
