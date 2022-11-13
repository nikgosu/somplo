export const TEMPLATE_STYLES = `
body {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
#box {
    display: inline-block;
    overflow: hidden;
}
.box {
  position: relative;
  height: 300px;
  display: inline-block;
  overflow: hidden;
  width: 220px;
}
.from-top {
  position: relative;
  top: 0px;
  left: 0px;
  display: block;
  -webkit-animation: from-top 2s ease;
}
@keyframes from-top
  {
    0% {
      top: -300px;
    }
    100% {
      top: 0%;;
    }
  }
  .from-bottom {
  position: relative;
  top: 0px;
  left: 0px;
  display: block;
  -webkit-animation: from-bottom 2s ease;
}
@keyframes from-bottom
  {
    0% {
      top: 300px;
    }
    100% {
      top: 0%;;
    }
  }
.rotate {
  float: left;
  margin: 0 auto;
  position: absolute;
  width: 150px;
  height: 150px;

  -webkit-animation-name: spin;
  -webkit-animation-duration: 4000ms;
  -webkit-animation-iteration-count: infinite;
  -webkit-animation-timing-function: linear;

  -moz-animation-name: spin;
  -moz-animation-duration: 4000ms;
  -moz-animation-iteration-count: infinite;
  -moz-animation-timing-function: linear;

  -ms-animation-name: spin;
  -ms-animation-duration: 4000ms;
  -ms-animation-iteration-count: infinite;
  -ms-animation-timing-function: linear;

  animation-name: spin;
  animation-duration: 4000ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}
@-ms-keyframes spin {
  from {
    -ms-transform: rotate(0deg);
  } to {
      -ms-transform: rotate(360deg);
  }
}
@-moz-keyframes spin {
  from {
    -moz-transform: rotate(0deg);
  } to {
      -moz-transform: rotate(360deg);
  }
}
@-webkit-keyframes spin {
  from {
    -webkit-transform: rotate(0deg);
  } to {
    -webkit-transform: rotate(360deg);
  }
}
@keyframes spin {
  from {
    transform: rotate(0deg);
  } to {
    transform: rotate(360deg);
  }
}
.from-left {
  position: relative;
  top: 0px;
  left: 0px;
  display: block;
  -webkit-animation: from-left 2s ease;
}
@keyframes from-left
{
  0% {
    left: -300px
  }
  100% {
    left: 0%;;
  }
}`
