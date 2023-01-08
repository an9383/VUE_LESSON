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
                        <label for="">User ID</label>
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
                        <label for="">PASSWORD</label>
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
                    로그인 테스트 : http://localhost:5050/user/login<br />
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

<script>
import axios from "axios";

export default {
    /* pdtmc^2w */
    props: [],
    data: function() {
        return {
            isLogin: false,
            tmpUser: {
                uid: null,
                pwd: null
            },
            user: {
                uid: null
            }
        };
    },
    //template: ``,
    methods: {
        login(event) {
            console.log(event.target);
            // import axios from "axios";
            var loginInfo = {
                uid: this.$data.tmpUser.uid,
                pwd: this.$data.tmpUser.pwd
            };

            axios({
                url: "http://localhost:5050/user/login", // 호출되는 서버 주소.
                method: "get", // request method: get, post, delete, put
                params: loginInfo, // 서버로 보내는 데이터. 예시) { data1:"test1", data2:"test2" }
                timeout: 30000, // 최대 대기 시간: 30초. 30초 이상이 되면 fail 부분이 실행됨.
                responseType: "json" // response로 넘어오는 데이터 형태: text, html, xml, json, jsonp, script
            })
                .then(res => {
                    console.log(res.data);
                    //this.$data.isLogin = res.data.isLogin;
                    this.$set(this.$data, "isLogin", !this.$data.isLogin);

                    // this.$data.user = res.data;
                    this.$set(this.$data, "user", res.data);
                })
                .catch(error => {
                    console.log(error);
                });
        },
        logout(event) {
            console.log(event.target);

            axios({
                url: "http://localhost:5050/user/logout", // 호출되는 서버 주소.
                method: "get", // request method: get, post, delete, put
                params: { uid: this.$data.user.uid }, // 서버로 보내는 데이터. 예시) { data1:"test1", data2:"test2" }
                timeout: 30000, // 최대 대기 시간: 30초. 30초 이상이 되면 fail 부분이 실행됨.
                responseType: "json" // response로 넘어오는 데이터 형태: text, html, xml, json, jsonp, script
            })
                .then(res => {
                    console.log(res.data);

                    //this.$data.isLogin = !this.$data.isLogin;
                    this.$set(this.$data, "isLogin", !this.$data.isLogin);

                    // this.$data.user = res.data;
                    this.$set(this.$data, "user", res.data);
                })
                .catch(error => {
                    console.log(error);
                });
        }
    },
    components: {
        /* 컴포넌트 등록. 예시) "태그명" : 컴포넌트명 */
    },
    computed: {},
    watch: {},
    mounted: function() {
        console.log("mounted");
    },
    updated: function() {
        console.log("updated");
    }
};
</script>
