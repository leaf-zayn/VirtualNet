<template>
  <div class="gns3-webui-container">
    <iframe :src="gns3WebUILink" frameborder="0" allowfullscreen></iframe>
  </div>
</template>

<script>
export default {
  name: 'GNS3WebUI',
  data() {
    return {
      // 这里替换为你的 GNS3 WebUI 实际链接
      gns3WebUILink: 'http://60.204.156.106:3080/'
    };
  }
}
</script>

<style scoped>
.gns3-webui-container iframe {
  width: 100%;
  height: 100vh; /* 使用视窗高度，或根据需求调整 */
  border: none; /* 移除边框 */
}
</style>
