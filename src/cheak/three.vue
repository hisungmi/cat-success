<template>
  <div class="wrap">
    <h1>모돈 분변,분뇨</h1>
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
        <div>○ 모돈의 정상적인 분변 상태를 확인</div>  
        <div>○ 분뇨는 돈사 내에서 유해가스를 발생시키고 공기의 질을 떨어뜨려서 돼지의 호흡기 질병을 악화시키거나 수태율 하락, 성장 지연, 사료효율 저하 등 생산성에 악영향</div>    
        <div>○ 분뇨는 돈사 밖에서는 냄새로 인한 집단 민원의 원인</div>
        <div>○ 모돈의 후구 쪽에 분변이 쌓이지 않도록 자주 치워주고 바닥의 상태를 청결하게 유지하는 것이 중요</div>
        <img width="50%" src="" />
        <table>
        <thead>
            <tr>
                <th>정상</th>
                <th>비정상</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><a>- 형태가 있고 부드러운 분변</a><br>
                <a>- 투명하거나 약간 노란 오줌</a></td>
                <td><a>- 설사 또는 변비(딱딱한 염소똥 형태)</a><br>
                <a>- 어둡거나 피가 섞인 탁한 오줌</a></td>
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
    name: "three",

}
</script>

<style scoped>
@import "C:\Users\sungm\WebstormProjects\cat-success\src\assets\scss\don.scss";
</style>