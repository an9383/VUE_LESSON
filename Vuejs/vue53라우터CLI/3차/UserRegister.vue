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

<script>
import axios from "axios";

export default {
    /* pdtmc^2w */
    props: [],
    data: function() {
        return {
            user: {
                name: null,
                id: null,
                pwd: null,
                email: null
            },
            errId: false /* */,
            errPwd: false /* */,
            errPwd2: false /* */,
            errEmail: false /* */,
            isProcess: false /* */
        };
    },
    //template: ``,
    methods: {
        join(event) {
            console.log(event);

            var user = {
                uid: this.$data.user.uid,
                pwd: this.$data.user.pwd,
                name: this.$data.user.name,
                email: this.$data.user.email
            };

            axios({
                url: "http://localhost:5050/user/register", // 호출되는 서버 주소.
                method: "get", // request method: get, post, delete, put
                params: user, // 서버로 보내는 데이터. 예시) { data1:"test1", data2:"test2" }
                timeout: 30000, // 최대 대기 시간: 30초. 30초 이상이 되면 fail 부분이 실행됨.
                responseType: "json" // response로 넘어오는 데이터 형태: text, html, xml, json, jsonp, script
            })
                .then(res => {
                    console.log(res.data);
                    //this.message1 = res.data;

                    if (res.data.uid === this.$data.user.uid) {
                        alert("회원가입 성공");
                        this.$router.push("/login");
                    }
                    this.isProcess = false;
                })
                .catch(error => {
                    console.log(error);
                });
        },
        checkId(event) {
            console.log(event);
            let len = this.$data.user.uid.length;
            if (len < 4 || len > 6) {
                this.$data.errId = true;
            } else {
                this.$data.errId = false;
            }
        },
        checkPwd(event) {
            console.log(event);
            let len = this.$data.user.pwd.length;
            this.$data.errPwd = len < 4 || len > 8 ? true : false;
        },
        checkRePwd(event) {
            console.log(event);
            let pwd2 = event.target.value; //재확인 비번값
            this.$data.errPwd2 = this.$data.user.pwd != pwd2 ? true : false;
        },
        checkEmail(event) {
            console.log(event);
            var pattern = /^[\w-_]+(\.[\w]+)*@([a-zA-Z]+\.)+[a-z]{2,3}$/;
            this.$data.errEmail = pattern.test(this.$data.user.email)
                ? false
                : true;
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
