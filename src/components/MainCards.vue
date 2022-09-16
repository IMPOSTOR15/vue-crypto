<template>
  <div class="list">
      <div class="listitem">
        <a href="" class="card">
          <div class="text50">Moonlight Docs</div>
          <div class="text30">The official documentation site for Terra. Learn how Terra works and what tools are available.</div>
          <div class="button">→</div>
        </a>
      </div>
            <div class="listitem">
        <a href="" class="card">
          <div class="text50">MoonlightWiki.org</div>
          <div class="text30">Tutorials, reference material, and troubleshooting guides written by devs, for devs.</div>
          <div class="button">→</div>
        </a>
      </div>
            <div class="listitem">
        <a href="" class="card">
          <div class="text50">Moonlight Academy</div>
          <div class="text30">Take interactive courses on developing smart contracts using Rust and CosmWasm libraries.</div>
          <div class="button">→</div>
        </a>
      </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.card {
  position: relative;
  display: block;
  min-height: 80px;
  min-width: 80px;
  padding: 36px 36px 150px;
  flex-direction: column;
  justify-content: flex-start;
  border: 1px solid #363636;
  border-radius: 12px;
  color: #fff;
  width: 400px;
  text-decoration: none
}
.listitem {
  display: flex;
  padding: 10px;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
  float: left;
}
.list {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.text50 {
  font-size: 24px;
  font-weight: 700;
  color: rgb(255, 255, 255);
  
}
.text30 {
  margin-top: 16px;
  font-size: 16px;
  line-height: 1.6;
  color: rgb(255, 255, 255);
  text-align: left;
}
.button {
  position: absolute;
  left: 36px;
  bottom: 36px;
  display: flex;
  width: 100px;
  min-width: 100px;
  justify-content: center;
  padding: 14px 36px;
  border-radius: 28px;
  background-color: #262626;
  background-image: linear-gradient(180deg,#262626,#262626);
  transition: .2s;
  font-family: Gotham,sans-serif;
  font-size: 14px;
  line-height: 21px;
  font-weight: 500;
  text-align: center;
  box-sizing: border-box;
}
.button:hover {
  position: absolute;
  display: block;
  background-image: linear-gradient(90deg,#228bbc,#002c81);
}
</style>