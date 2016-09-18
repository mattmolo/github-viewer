<template>
    <div class="dashboard">
        <slot>
        </slot>
    </div>
</template>

<style scoped>
    .dashboard {
        width: 100%;
        position: absolute;
        top: 70px;
        bottom: 0px;
        white-space: nowrap;
        overflow-x: scroll;
    }
</style>
