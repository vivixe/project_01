/*
 * @Author: vivi.
 * @Date: 2022-05-24 13:10:57
 * @LastEditTime: 2022-06-24 21:05:26
 * @FilePath: \MyFirstProject\src\js\index.js
 * @Description: 
 */
const token = window.localStorage.getItem('token')
const id = window.localStorage.getItem('id')

if (!token || !id) {
    $('.off').addClass('active')
    $('.on').removeClass('active')
    window.alert('您还未登录，请登录后再进行操作')
    window.location.href = '../html/login.html'
} else {
    getInfo()
}
function getInfo() {
    $.ajax({
        url: 'http://localhost:3007/my/userinfo',
        method: 'GET',
        data: { id: id },
        headers: {
            authorization: token
        },
        success(res) {
            console.log(res)
            if (res.status !== 0) {
                $('.off').addClass('active')
                $('.on').removeClass('active')
                return
            } else {
                if(res.data.nickname===null){
                    $('.on').addClass('active').find('span').text(res.data.username)
                    window.alert('您还未更新头像和昵称！点击您的用户名去更新')
                }else{
                    $('.on').addClass('active').find('span').text(res.data.nickname)
                }
                
                if (res.data.user_pic === null) {
                    $('.on').find('img').prop('src', '../img/mrtx.png')
                } else {
                    $('.on').find('img').prop('src', res.data.user_pic)
                }
                $('.off').removeClass('active')
            }
        }
    })
}
$('li.logout').on('click', function () {
    window.localStorage.setItem('token', null)
    window.location.reload()
})
$('li#self').on('click', function () {
    window.location.href = '../html/self.html'
})