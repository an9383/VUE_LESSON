<style scoped>
.col-md-10 {
    margin: 5px 0 0 5px;
}
.col-md-10 > label {
    width: 100px;
    display: inline-block;
    text-align: left;
}
</style>

<template>
    <div class="col-md-3 mt-4">
        <h1 class="text-center">Login</h1>
        <template v-if="!isLogin">
            <form name="loginF" method="POST" v-on:submit.prevent="login">
                <div class="row">
                    <div class="col-md-10 offset-md-1">
                        User ID:
                        <input
                            type="text"
                            name="id"
                            v-model="tmpUser.uid"
                            ref="uid"
                            placeholder="User ID"
                            class="form-control"
                        />
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-10 offset-md-1">
                        PASSWORD:
                        <input
                            type="password"
                            name="pwd"
                            v-model="tmpUser.pwd"
                            ref="upwd"
                            placeholder="Password"
                            class="form-control"
                        />
                    </div>
                </div>
                <div class="col-md-10 offset-md-1 p-1">
                    <button class="btn btn-block btn-primary mt-3">
                        Login
                    </button>
                </div>
            </form>
            <div>
                <p>
                    로그인 테스트용: ID / PW<br />
                    uid01 / pwd01<br />
                    uid02 / pwd02<br />
                    <br />
                    로그인 테스트 URL: http://localhost:5050/user/login?uid=uid01&pwd=pwd01<br />
                </p>
            </div>
        </template>
        <template v-else>
            <div class="alert alert-primary m-4">
                <h4 class="text-primary">{{ user.uid }}님 로그인 중...</h4>
                <a href="#" v-on:click="logout">로그아웃</a>
            </div>
        </template>
    </div>
</template>

<style scoped></style>

<script>
export default {
    /* npdtmc^2w */
    name: "UserLogin",
    data() {
        return {
            tmpUser: {
                id: "",
                pwd: ""
            },
            user: {
                uid: ""
            },
            isLogin: false
        };
    },
    methods: {
        logout: function (e) {},
        login: function (e) {}
    }
};
</script>
