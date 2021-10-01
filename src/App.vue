<template>
  <div class="container">
    <router-view/>
  </div>
</template>

<style lang="scss">
/* ===== FONTS ===== */
@import url('https://fonts.googleapis.com/css2?family=Pangolin&display=swap');

/* ===== RESET ===== */

*{padding: 0;margin: 0;border: 0;}
*,*:before,*:after{-moz-box-sizing: border-box;-webkit-box-sizing: border-box;box-sizing: border-box;}
:focus,:active{outline: none;}
a:focus,a:active{outline: none;}
address{font-style:inherit;}
aside,nav,footer,header,main,section{display: block;}
html,body{height: 100%;width: 100%;min-width: 320px;-webkit-font-smoothing: antialiased;-moz-osx-font-smoothing: grayscale;}
body{-ms-text-size-adjust: 100%;-moz-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;}
input,button,textarea{font-family: inherit;}
input::-ms-clear{display: none;}
button{cursor: pointer;background-color:transparent;}
button::-moz-focus-inner {padding:0;border:0;}
a, a:visited{text-decoration: none;color:inherit;}
a:hover{text-decoration: none;}
ul li{list-style: none;}
img{display: block;max-width: 100%;}
h1,h2,h3,h4,h5,h6{font-weight: inherit;font-size: inherit;margin: 0;}
cite{font-style: normal;}
svg{display: block;min-width: 100%;}

/* ===== STYLES ===== */

body {
  font-family: 'Pangolin', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 14px;
  line-height: 1.15;
  height: auto;
  color: #333;
}

.container {
  width: 100%;
  max-width: 1130px;
  padding: 0 15px;
  margin: 0 auto;
}

.main-wrapper {
  padding: 20px 0;
}

.header {
  display: flex;
  justify-content: space-between;
}

.home {
  font-size: 20px;
  padding: 0 15px;
  height: 30px;
  text-transform: uppercase;
  background: linear-gradient(to top, #e4d59b, #eed);
  color: #777;
  cursor: pointer;
  border-radius: 7px;
  &:hover {
    background: linear-gradient(to bottom, #e4d59b, #eed);
  }
}

.main-title {
  font-size: 32px;
  margin-bottom: 30px;
  text-transform: uppercase;
  text-align: center;
}

.loading {
  display: flex;
  justify-content: center;
}

</style>
