<template>
    <div class="card">
        <div class="title">
            <a href="{{href}}">{{title}}</a>
        </div>
        <p class="description">
            <slot></slot>
        </p>
    </div>
</template>

<script>
    export default {
        props: ["title", "href"]
    }
</script>

<style scoped>
    .card {
        width: 100%;
        padding: 15px 0;
        margin: 20px 0 0;
        background-color: white;
        border-radius: 2px;
        background-color: rgba(248, 248, 252, 1);
    }

    .title {
        text-align: left;
        width: 90%;
        height: 18px;
        font-size: 18px;
        line-height: 18px;
        margin: 0px auto 8px;
        font-weight: 400;
        color: rgb(38, 39, 136);
        overflow: hidden;
    }

    .description {
        text-align: left;
        width: 90%;
        font-size: 14px;
        white-space: normal;
        margin: 0 auto;
        font-weight: 300;
        color: rgb(38, 39, 136);
    }

    a {
        text-decoration: none;
        color: rgb(38, 39, 136);
    }

    a:hover {
        text-decoration: underline;
        transition: 0.2s;
    }
</style>
