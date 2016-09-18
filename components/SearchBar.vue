<template>
    <div class="search-bar">
        <div class="container">
            <input type="text" placeholder="{{placeholder}}" v-model="value">
        </div>
    </div>
</template>

<script>
    export default {
        props: ["value", "placeholder"]
    }
</script>

<style scoped>
    .search-bar {
        height: 30px;
        width: 100%;
        padding: 10px 0px;
        background-color: white;

        -webkit-box-shadow: 0px 3px 7px -4px rgba(0,0,0,0.75);
           -moz-box-shadow: 0px 3px 7px -4px rgba(0,0,0,0.75);
                box-shadow: 0px 3px 7px -4px rgba(0,0,0,0.75);
    }

    input {
        border: none;
        outline: none;
        font-family: Roboto;
        font-size: 20px;
        height: 20px;
        line-height: 20px;
        padding: 2px;
        color: rgb(24, 28, 33);
        width: 100%;
        border-bottom: 2px solid rgb(221, 230, 240);
    }

    input:focus {
        border-bottom: 2px solid rgb(62, 100, 142);
        transition: 0.2s;
    }

    ::-webkit-input-placeholder {
        color: grey;
        font-size: 20px;
        line-height: 20px;
        padding: 2px;
    }

    .container {
        margin: 0 auto;
        width: 80%;
    }
</style>
