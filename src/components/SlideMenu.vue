<template>
  <div class="slide-menu">
          <ul class="toggle-menu">
            <li>돈사환경</li>
            <li>그래프</li>
            <li>모돈평가</li>
            <li>확인사항</li>
            <li>로그인</li>
            <li>회원가입</li>
          </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.slide-menu {
    float:right;
    background-color: rgb(249, 160, 240);
    width: 200px;
}
.toggle-menu{
  list-style-type: none;
  display: flex;
  flex-direction: column;
}

@media all and (min-width: 600px) {
.slide-menu{
  display:none;
  background: rgb(255, 208, 208);

}
}
</style>