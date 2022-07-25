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
        <h4>회음부 평가 점수</h4>  
        <a>○ 1점-회음부나 외음부의 돌출이나 부종이 없음</a><br>    
        <a>○ 2점-회음부나 외음부의 돌출이나 부종이 보임</a><br>
        <a>○ 3점-중증도 또는 심각한 회음부와 외음부 부종으로 질탈이 시작됨</a><br>
        <img width="50%" src="../assets/two.png" />
        <table>
        <thead>
            <tr>
                <th>정상</th>
                <th>비정상</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><a>- 질탈이나 항문탈이 없음</a><br>
                <a>- 적은 양의 투명하거나 우유빛의 무취의 외음부 삼출물</a></td>
                <td><a>- 항문탈이나 질탈</a><br>
                <a>- 하얗거나 노란색의 역겨운 냄새가 나는 외음부 삼출물</a><br>
                <a>- 외음부 부종, 상처</a></td>
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
    name: "two",
    
}
</script>

<style scoped>
@import "C:\Users\sungm\WebstormProjects\cat-success\src\assets\scss\don.scss";
</style>