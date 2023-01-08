<style scoped></style>

<template>
    <div class="signup">
        <h1>This is an signup page</h1>
        <user-register></user-register>
    </div>
</template>

<script>
import UserRegister from "../components/user/UserRegister";

export default {
    /* pdtmc^2w */
    props: [],
    data: function() {
        return {};
    },
    //template: ``,
    methods: {},
    components: {
        "user-register": UserRegister
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
