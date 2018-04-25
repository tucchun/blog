<template>
  <div class="topnav">
    <nav>
      <ul>
        <li>
          <a href="index.html">网站首页</a>
        </li>
        <li>
          <a href="about.html">关于我</a>
        </li>
        <li>
          <a href="share.html">模板分享</a>
        </li>
        <li>
          <a href="list.html">学无止境</a>
        </li>
        <li>
          <a href="list.html">慢生活</a>
        </li>
        <li>
          <a href="link.html">博客导航</a>
        </li>
        <li>
          <a href="gbook.html">留言</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import 'lib/normalize.css/normalize.css'
import '@/common/styles/common.css'
export default {}
</script>

<style scoped>
.topnav {
  width: 100%;
  overflow: hidden;
  background-color: #333;
}
/*导航颜色*/
nav {
  width: 1200px;
  margin: auto;
  color: #999;
  line-height: 32px;
  background: url(./images/logo.png) no-repeat left 10px top 13px;
}
nav ul {
  text-align: right;
  height: 46px;
  line-height: 46px;
}
nav ul li {
  display: inline;
  font-size: 16px;
  padding: 0px 20px;
}
nav ul li a {
  color: #fff;
}
</style>
