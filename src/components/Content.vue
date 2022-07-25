<template>
<div class="content-wrapper">
<button class="menu-toggle-btn" @click="showMenu(true)" >
    <span></span>
    <span></span>
    <span></span>
</button>
<button @click="showMenu(false)">hide</button>
</div>
</template>

<script>
export default {
mounted(){
    console.log("[menu visible?]", this.$store.state.ui.rightMenu.visible)
},
methods: {
    showMenu(visible) {
        this.$store.state.ui.rightMenu.visible = visible;
    },
}

}
</script>

<style>
.menu-toggle-btn {
  float: right;
  width: 40px;
  padding-top: 10px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
}
.menu-toggle-btn span {
  display:block;
  width: 100%;
  height: 3px;
  background: #000;
}
.menu-toggle-btn span:nth-child(2) {
  margin: 7px 0;
}
</style>