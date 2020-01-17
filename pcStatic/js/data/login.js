$(document).ready(function () {

    $("#forget_btn").click(function () {
        $("#login").hide();
        $("#for_phone").val($('#login_phone').val());
        $("#forget").show();
    });
    $("#return").click(function () {
        $("#forget").hide();
        $("#login").show();
    });
    //
    $('#login_sub').click(function () {
        if ($('#login_phone').val() == '') {
            $('#login_phone').focus();
            $('#login_err').html("手机号不能为空");
            return false;
        }
        if (!/^1[345789][\d]{9}$/.test($('#login_phone').val())) {
            $('#login_phone').focus();
            $('#login_err').html("请输入有效的手机号");
            return false;
        }
        if ($('#login_password').val() == '') {
            $('#login_password').focus();
            $('#login_err').html("密码不能为空");
            return false;
        }
        if ($('#login_password').val().length < 6 || $('#login_password').val().length > 32) {
            $('#login_password').focus();
            $('#login_err').html("密码长度必须大于6位小于32位");
            return false;
        }
        $.ajax({
            url: '/login',
            type: 'POST',
            data: {
                phone: $('#login_phone').val(),
                password: $('#login_password').val()
            },
            success: function (res) {
                if (res.code == 200) {
                    window.location.href = $("#referrer").val();
                } else if (res.code == 202) {
                    changeCap('reg');
                    $("#login").hide();
                    $("#reg_phone").val($('#login_phone').val());
                    $("#register").show();
                } else if (res.code == 2000) {
                    window.location.href = res.data;
                } else {
                    $('#login_err').html(res.msg);
                }
            },
            error: function (res) {
                $('#login_err').html(res.msg);
            }
        })
    });

    $('#reg_sub').click(function () {

        if ($('#reg_phone').val() == '') {
            $('#reg_phone').focus();
            $('#reg_err').html("手机号不能为空");
            return false;
        }
        if (!/^1[345789][\d]{9}$/.test($('#reg_phone').val())) {
            $('#reg_phone').focus();
            $('#reg_err').html("请输入有效的手机号");
            return false;
        }
        if ($('#reg_password').val() == '') {
            $('#reg_password').focus();
            $('#reg_err').html("密码不能为空");
            return false;
        }
        if ($('#reg_password').val().length < 6 || $('#reg_password').val().length > 32) {
            $('#reg_password').focus();
            $('#reg_err').html("密码长度必须大于6位小于32位");
            return false;
        }
        if ($("#reg_pho_cap").val() == '') {
            $('#reg_err').html("请输入验证码");
            return false;
        }

        $.ajax({
            url: '/register',
            type: 'POST',
            data: {
                phone: $("#reg_phone").val(),
                password: $("#reg_password").val(),
                vcode: $("#reg_pho_cap").val()
            },
            success: function (res) {
                if (res.code == 200) {
                    $("#register").hide();
                    $("#forget").hide();
                    $("#login_phone").val($("#reg_phone").val());
                    $("#reg_password").val('');
                    $("#login").show();
                } else {
                    $('#reg_err').html(res.msg);
                }
            }
        })
    });


    $('#for_sub').click(function () {

        if ($('#for_phone').val() == '') {
            $('#for_phone').focus();
            $('#for_err').html("手机号不能为空");
            return false;
        }
        if (!/^1[345789][\d]{9}$/.test($('#for_phone').val())) {
            $('#for_phone').focus();
            $('#for_err').html("请输入有效的手机号");
            return false;
        }
        if ($("#for_pho_cap").val() == '') {
            $('#for_pho_cap').focus();
            $('#for_err').html("请输入短信验证码");
            return false;
        }
        if ($('#new_password').val() == '') {
            $('#new_password').focus();
            $('#for_err').html("密码不能为空");
            return false;
        }
        if ($('#new_password').val().length < 6 || $('#new_password').val().length > 32) {
            $('#new_password').focus();
            $('#for_err').html("密码长度必须大于6位小于32位");
            return false;
        }

        $.ajax({
            url: '/forget',
            type: 'POST',
            data: {
                phone: $("#for_phone").val(),
                password: $("#new_password").val(),
                vcode: $("#for_pho_cap").val()
            },
            success: function (json) {
                if (json.code == 200) {
                    // alert('');
                    $("#register").hide();
                    $("#forget").hide();
                    $("#login_phone").val($("#for_phone").val());
                    $("#login_password").val('');
                    $("#login").show();
                } else {
                    $('#for_err').html(json.msg);
                }
            }
        })
    });

    var ishold = false;
    $('#reg_get_yzm').click(function () {
        phoneCode("reg");
    });

    $('#for_get_yzm').click(function () {
        phoneCode("for");
    });

    function phoneCode(type) {
        $("#" + type + "_err").html("手机号码错误");
        if ($("#" + type + "_phone").val() == '') {
            $("#" + type + "_err").html("手机号码错误");
            return false;
        }

        if (!(/^1[3|4|5|7|8]\d{9}$/.test($("#" + type + "_phone").val()))) {
            $("#" + type + "_err").html("手机号码错误");
            return false;
        }

        if ($("#" + type + "_cap").val() == '') {
            $("#" + type + "_err").html("图片验证码不能为空");
            return false;
        }

        if (!ishold) {
            ishold = true;
            $.post('/sendCode', {
                phone: $("#" + type + "_phone").val(),
                cpcode: $("#" + type + "_cap").val()
            }, function (json) {
                if (json.code == 200) {
                    var time = 60;
                    var $p1 = $('<span></span>');
                    var $time = $('<em>' + time + '</em>').prependTo($p1);
                    $("#" + type + "_get_yzm").parent().addClass("yzmYf");
                    $("#" + type + "_get_yzm").empty().append($p1);
                    var hander = setInterval(function () {
                        time--;
                        console.log(time);
                        if (time > -1) {
                            $time.text(time);
                        } else {
                            ishold = false;
                            clearInterval(hander);
                            console.log(type);
                            $("#" + type + "_get_yzm").parent().removeClass('yzmYf');
                            $("#" + type + "_get_yzm").html('');
                        }
                    }, 1000);
                } else {
                    ishold = false;
                    $("#" + type + "_err").html(json.msg);
                    return false;
                }
            });
        }
    }

    $("#reg_change_cap").click(function () {
        changeCap('reg');
    });
    $("#for_change_cap").click(function () {
        changeCap('for');
    });

    $('#visitor_btn').click(function () {
        var referrer = $("#referrer").val();
        if (referrer.indexOf('?') > 0) {
            referrer = referrer + '&visitor=1';
        } else {
            referrer = referrer + '?visitor=1';
        }
        window.top.location.href = referrer;
    });

    function changeCap(type) {
        $("#" + type + "_err").html("");
        $("#" + type + "_cap").val("");
        var timestamp = Date.parse(new Date());
        $("#" + type + "_cap_img").attr('src', '/captcha?' + timestamp);
    }


});