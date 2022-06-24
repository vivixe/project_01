/*
 * @Author: vivi.
 * @Date: 2022-05-24 15:01:51
 * @LastEditTime: 2022-05-24 15:03:51
 * @FilePath: \MyFirstProject\src\js\register.js
 * @Description: 
 */
$('form').on('submit',function(e){
    e.preventDefault()

    const data=$('form').serialize()
    console.log(data)

    $.post('http://localhost:3007/api/reguser',data,res=>{
        console.log(res)
        if(res.status === 1){
            $('form>span').css('display','block')
            return
        }
        window.alert('注册成功，点击确定跳转到登录页')
        window.location.href='./login.html'
        
    })
})