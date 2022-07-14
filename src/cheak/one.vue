<template>
  <div class="wrap">
    <h1>모돈 체평점</h1>
    <div class="sidebar">
        <ul>
          <li><a href="#"><router-link to="/momcheak">모돈평가</router-link></a></li>
          <li><a href="#"><router-link to="/one">확인사항</router-link></a></li>
          <ol>
              <li><a><router-link to="/one">모돈 체평점</router-link></a></li>
              <li><a><router-link to="/two">모돈 회음부</router-link></a></li>
              <li><a><router-link to="/three">모돈 분변,분뇨</router-link></a></li>
              <li><a><router-link to="/four">모돈 유방</router-link></a></li>
          </ol>
        </ul>  
    </div>
    <div>
        <body>
        <div>○ 체평점 관리 기간은 임신 21〜100일이며 이시기에 정확한 체형관리가 필요하며 정기적인 체평점 측정이 필요</div>  
        <div>○농장의 모돈의 바디컨디션점수를 보관해서 계획적인 관리가 필요</div>    
        <div>○ 급여조정을 주기적으로 하여야 한다.</div>
        <img width="50%" src="../assets/one.png" />
        <table class="chartt">
        <thead>
            <tr>
                <th>정상</th>
                <th>비정상</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><a>- 임신 단계에 따른 적절한 체평점</a><br>
                <a>- 어깨부분의 피부 상처가 없음</a></td>
                <td><a>- 임신 단계별 적절하지 못한 체평점 (너무 마르거나 비만) </a><br>
                <a>- 어깨부분의 피부 상처</a></td>
            </tr>
        </tbody>
        </table>
    </body>
    </div>    
    <div class="footer">
        성미 010-7777-8888
    </div>
</div>
</template>

<script>
export default {
    name: "one",
    
}
</script>

<style scoped>
@import "C:\Users\sungm\WebstormProjects\cat-success\src\assets\scss\don.scss";
</style>