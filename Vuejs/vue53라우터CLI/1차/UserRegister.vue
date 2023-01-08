<style scoped>
.col-md-8 {
    margin: 5px 0 0 5px;
}
.col-md-8 > label {
    width: 160px;
    display: inline-block;
    text-align: left;
}
</style>

<template>
    <div>
        <div id="join" class="container p-3">
            <h1 class="text-center text-primary">SingUp</h1>
            <div class="row">
                <div class="col-md-8 offset-md-2">
                    <label for="">Name</label>
                    <input
                        type="text"
                        name="name"
                        v-model="user.name"
                        placeholder="Name"
                        class="form-control"
                    />
                </div>
            </div>

            <div class="row">
                <div class="col-md-8 offset-md-2">
                    <label for="">User ID</label>
                    <input
                        type="text"
                        name="id"
                        v-model="user.uid"
                        v-on:keyup="checkId"
                        class="form-control"
                        placeholder="User ID"
                    />
                    <div class="text-danger" v-show="errId">
                        아이디는 4자이상 6자 이하 입니다.
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-8 offset-md-2">
                    <label for="">PASSWORD</label>
                    <input
                        type="text"
                        name="pwd"
                        v-model="user.pwd"
                        v-on:keyup="checkPwd"
                        placeholder="Password"
                        class="form-control"
                    />
                    <div class="text-danger" v-show="errPwd">
                        비밀번호는 4자 이상 8자 이내입니다.
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-8 offset-md-2">
                    <label for="">PASSWORD Confirm </label>
                    <input
                        type="text"
                        name="pwd2"
                        v-on:keyup="checkRePwd"
                        placeholder="Password Confirm"
                        class="form-control"
                    />
                    <div class="text-danger" v-show="errPwd2">
                        비밀번호가 일치하지 않아요
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-8 offset-md-2">
                    <label for="">Email </label>
                    <input
                        type="text"
                        name="email"
                        v-model="user.email"
                        v-on:change="checkEmail"
                        placeholder="Email"
                        class="form-control"
                    />
                    <div class="text-danger" v-show="errEmail">
                        이메일 형식에 맞지 않아요
                    </div>
                </div>
            </div>

            <div class="row m-2">
                <div class="col-md-8 offset-md-2 p-1">
                    <button
                        class="btn btn-block btn-outline-success"
                        v-on:click="join"
                    >
                        Signup
                    </button>
                </div>
            </div>

            <div v-show="isProcess" class="alert alert-danger m-5">
                <h3>회원 가입 요청 중...</h3>
            </div>
        </div>

        <div>
            <p>
                회원가입 테스트:
                http://localhost:5050/user/register?uid=uid01&pwd=pwd01&username=홍길동&email=email@mail.com<br />
            </p>
            <ul style="text-align:left;">
                <li>이메일 형식을 체크하는 함수를 작성하여 적용하시오.</li>
                <li>
                    회원 가입이 성공하면 로그인 페이지(/login) 로 리다이렉트
                    되게 작성하시오.
                </li>
            </ul>
        </div>
    </div>
</template>
