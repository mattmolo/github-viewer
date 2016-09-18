<template>
    <div class="column" v-show="list.length > 0">
        <div class="title">{{title}}</div>
        <button class="sort" @click="switchType">{{sortTypePretty}}</button>
        <button class="sort sortOrder" @click="switchOrder">{{sortOrderPretty}}</button>
        <div class="container">
            <card v-for="repo in list | orderBy sortType sortOrder"
                  :title="repo.name"
                  :href="repo.url"
            >
                {{repo.description}}
            </card>
        </div>
    </div>
</template>

<script>
import Card from './Card.vue'

export default {
    props: ["title", "list"],
    components: {
        Card
    },
    data: function() {
        return {
            sortOrder: 1,
            sortType: "name"
        };
    },
    methods: {
        switchType: function() {
            if (this.sortType == "last_updated") {
                this.switchOrder();
                this.sortType = "name";
            } else {
                this.switchOrder();
                this.sortType = "last_updated";
            }
        },
        switchOrder: function() {
            this.sortOrder *= -1;
        }
    },
    computed: {
        sortTypePretty: function() {
            return (this.sortType == "last_updated") ? "Last Updated" : "Name";
        },
        sortOrderPretty: function() {
            var arrow = "▼"
            if (this.sortType == "last_updated" && this.sortOrder > 0) {
                arrow = "▲";
            } else if (this.sortType == "name" && this.sortOrder < 0) {
                arrow = "▲";
            }

            return arrow;
        }
    }
};
</script>

<style scoped>
    .column {
        min-height: 50px;
        max-height: 90%;
        overflow-y: scroll;
        width: 300px;
        padding: 15px;
        padding-bottom: 0;
        border-bottom: 15px solid rgb(227, 237, 246);
        margin: 0px 15px;
        display: inline-block;
        background-color: rgb(227, 237, 246);
        border-radius: 2px;
        vertical-align: top;

        -webkit-box-shadow: 0px 3px 7px -4px rgba(0,0,0,0.75);
           -moz-box-shadow: 0px 3px 7px -4px rgba(0,0,0,0.75);
                box-shadow: 0px 3px 7px -4px rgba(0,0,0,0.75);
    }

    .title {
        text-align: left;
        width: 70%;
        height: 20px;
        font-size: 20px;
        line-height: 20px;
        margin: 0 auto;
        font-weight: 400;
        color: rgb(38, 39, 136);
        float: left;
    }

    .sort {
        text-align: right;
        width: 25%;
        height: 20px;
        font-size: 12px;
        line-height: 20px;
        margin: 0 auto;
        font-weight: 400;
        color: rgba(38, 39, 136, 0.6);
        float: left;
        border: none;
        background-color: rgb(227, 237, 246);
        padding: 0;
    }

    .sort:hover {
        color: rgb(38, 39, 136);
        cursor: pointer;
    }

    .sortOrder {
        width: 5%;
        padding-top: 2px;
        font-size: 10px;
    }

    .container {
        margin-top: 30px;
    }
</style>
