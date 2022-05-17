<template>

</template>

<script>
import apiBoard from '@/api/url';
export default {
    name : "Menubar",
    mounter() {
        apiBoard.getArticle(1)
        .then(function (response) {
            console.log("getArticle", response);
        })
        .catch(function (e) {
            console.log(e);

        });
    }
}
</script>

<style scoped>
@import url("C:\Users\sungm\WebstormProjects\cat-success\src\assets\scss\menu.scss");
</style>