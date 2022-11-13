export const WITHOUT_ANIMATION_STYLES = `
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
`

export const ANIMATION_FROM_TOP_STYLES = `
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
`

export const ANIMATION_FROM_BOTTOM_STYLES = `
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
`

export const ANIMATION_FROM_LEFT_STYLES = `
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
    left: -220px
  }
  100% {
    left: 0%;;
  }
}
`

export const ANIMATION_FROM_RIGHT_STYLES = `
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
.from-right {
  position: relative;
  top: 0px;
  left: 0px;
  display: block;
  -webkit-animation: from-right 2s ease;
}
@keyframes from-right
{
  0% {
    left: 220px
  }
  100% {
    left: 0%;;
  }
}
`

export const ANIMATION_ROTATE_STYLES = `
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
    position: relative;
}
.box {
  position: relative;
  height: 300px;
  display: inline-block;
  overflow: hidden;
  width: 220px;
}
.rotate {
  float: left;
  display: block;
  -webkit-animation: rotate 2s ease;
}
@-ms-keyframes rotate {
  from {
    -ms-transform: rotate(0deg);
  } to {
      -ms-transform: rotate(360deg);
  }
}
@-moz-keyframes rotate {
  from {
    -moz-transform: rotate(0deg);
  } to {
      -moz-transform: rotate(360deg);
  }
}
@-webkit-keyframes rotate {
  from {
    -webkit-transform: rotate(0deg);
  } to {
    -webkit-transform: rotate(360deg);
  }
}
@keyframes rotate {
  from {
    transform: rotate(0deg);
  } to {
    transform: rotate(360deg);
  }
}
`

export const ANIMATION_ROTATE_YZ_STYLES = `
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
    position: relative;
}
.box {
  position: relative;
  height: 300px;
  display: inline-block;
  overflow: hidden;
  width: 220px;
}
.rotateYZ {
  float: left;
  display: block;
  -webkit-animation: rotateYZ 2s ease;
}
@-ms-keyframes rotateYZ {
  from {
    -ms-transform: rotateY(0) rotateZ(0);
  } to {
      -ms-transform: rotateY(360deg) rotateZ(360deg);
  }
}
@-moz-keyframes rotateYZ {
  from {
    -moz-transform: rotateY(0) rotateZ(0);
  } to {
      -moz-transform: rotateY(360deg) rotateZ(360deg);
  }
}
@-webkit-keyframes rotateYZ {
  from {
    -webkit-transform: rotateY(0) rotateZ(0);
  } to {
    -webkit-transform: rotateY(360deg) rotateZ(360deg);
  }
}
@keyframes rotateYZ {
  from {
    transform: rotateY(0) rotateZ(0);
  } to {
    transform: rotateY(360deg) rotateZ(360deg);
  }
}
`
