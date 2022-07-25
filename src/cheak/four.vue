<template>
  <div class="wrap">
    <div class="sidebar">
        <ul>
          <li><a href="#"><router-link to="/momcheak">사료무게</router-link></a></li>
          <li><a href="#"><router-link to="/one">모돈 확인사항</router-link></a></li>
          <ol>
              <li><a><router-link to="/one">모돈 체평점</router-link></a></li>
              <li><a><router-link to="/two">모돈 회음부</router-link></a></li>
              <li><a><router-link to="/three">모돈 분변,분뇨</router-link></a></li>
              <li><a><router-link to="/four">모돈 유방</router-link></a></li>
          </ol>
        </ul>  
    </div>
    <div >
        <body>
        <h4>모돈의 급성유방염</h4>  
        <div>○ 급성 유방염 이환시 체온은 41.5도씨 이상의 체온</div>    
        <div>○ 전체적으로 단단해지고 열감이 있으며 붉게 변하며 고통스러워 함</div>
        <div>○ 유방을 만졌을때 모돈 즉각 반응</div>
        <h4>모돈의 만성유방염</h4>
        <div>○ 유방조직에 단단한 혹처럼 나타나며 특히 유방 뒤쪽부터 절반부위까지 발생율이 높음</div>    
        <div>○ 종창의 돌출부는 이유 직후부터 교배후 1달까지 관찰됨</div>
    
        <img width="50%" src="../assets/four.png" />
        <table>
        <thead>
            <tr>
                <th>정상</th>
                <th>비정상</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><a>- 정상적인 기능을 하는 유두</a><br>
                <a>- 포유자돈에게 추웁ㄴ한 갯수의 부드러운 유방</a><br>
                <a>- 유즙 생산을 잘하고 포유자돈에게 젖을 잘 주는 모돈</a></td>
                <td><a>- 딱딱하거나 유방염이 의심되는 유방</a><br>
                <a>- 맹유두나 손상된 유두</a><br>
                <a>유즙 생산이 적거나 포유자돈에게 충분히 공급하지 않는 행동을 보이는 모돈</a></td>
            </tr>
        </tbody>
        </table>
    </body>
    </div>    
    <div class="footer">
        꿀!사 관리자 번호 010-XXXX-XXXX
    </div>
</div>
</template>

<script>
export default {
    name: "four",
    
}
</script>

<style scoped>
@import "C:\Users\sungm\WebstormProjects\cat-success\src\assets\scss\don.scss";
</style>