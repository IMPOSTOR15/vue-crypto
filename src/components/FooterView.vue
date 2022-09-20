<template>
<div class="footer">
  <div class="inner">
    <div class="big-block-list">
      <div class="block-list">
        <a class="main-link-text" href="">Terraform Labs</a>
        <a class="link-text" href="">Contact</a>
        <a class="link-text" href="">Career</a>
        <a class="link-text" href="">Media Injuries</a>
        <a class="link-text" href="">Brand Acesse</a>
      </div>
      <div class="block-list">
        <a class="main-link-text" href="">Develop</a>
        <a class="link-text" href="">Developers Portal</a>
        <a class="link-text" href="">Docs</a>
        <a class="link-text" href="">Github</a>
        <a class="link-text" href="">Academy</a>
      </div>
      <div class="block-list">
        <a class="main-link-text" href="">Practice</a>
        <a class="link-text" href="">Comunity</a>
      </div>
    </div>
    <div class="block">
      <img class="logo-img" src="@/assets/logo_copy.png" alt="">
      <div class="block">
        <a class="button" href="">Term of Use</a>
        <a class="button" href="">Cokkie Policy</a>
        <a class="button" href="">Privacy Policy</a>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
.footer {
  margin-top: 240px;
  padding-top: 100px;
  padding-bottom: 50px;
  border-top: 1px solid #262626;
}

.inner {
  display: flex;
  width: 100%;
  max-width: 1088px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 32px;
  padding-left: 32px;
  -webkit-box-pack: start;
  justify-content: flex-start;
}

.button {
  left: 36px;
  bottom: 36px;
  display: flex;
  width: 200px;
  height: 50px;
  justify-content: center;
  padding: 14px 36px;
  margin-bottom: 10px;
  border-radius: 28px;
  background: #262626;
  font-size: 14px;
  line-height: 21px;
  font-weight: 500;
  text-align: center;
  box-sizing: border-box;
  text-decoration: none;
  color: #fff;
  transition: background 0.5s ease-out;
}

.button:hover {
  background: #113778;
}


.logo-img {
  width: 100px;
}

.a {
  color: #fff
}

.main-link-text {
  margin-bottom: 19px;
  opacity: .5;
  font-size: 14px;
  line-height: 1.5;
  letter-spacing: -.3px;
  text-decoration: none;
  color: gray
}

.link-text {
  padding-top: 5px;
  padding-bottom: 5px;
  transition: .2s;
  color: #fff;
  font-size: 14px;
  line-height: 1.5;
  letter-spacing: -.3px;   
  text-decoration: none;
  transition: color 0.5s ease-out;
}

.link-text:hover {
  color: rgb(74, 152, 215)
}

.big-block {
  flex: 1;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 0%;
}

.big-block-list {
  display: flex;
  -webkit-box-pack: start;
  justify-content: flex-start;
  -webkit-box-flex: 1;
  flex: 1;
  grid-column-gap: 20px;
  font-size: 16px;
  line-height: 0;
}

.block-list {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
}
</style>