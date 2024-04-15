<template>
  <div class="content" ref="canvas">
    <div id="screen"></div>
  </div>
</template>

<script>
import RFB from "@novnc/novnc/core/rfb";

export default {
  name: "novnc",
  data() {
    return {
      rfb: null,
      isFullscreen: false,
      wsURL: "ws://192.168.101.1:9999/websockify",
      // wsURL: "wss://xxx.xxx.xx/websockify", // https请求使用wss
      password: "yze200078",
    };
  },
  mounted() {
    this.sendCtrlAltDel();
    this.connectVnc();
  },
  methods: {
    sendCtrlAltDel  () {
      this.rfb.sendCtrlAltDel();
      return false;
    },

    //连接
    connectVnc() {
      this.rfb = new RFB(document.getElementById("screen"), this.wsURL, {
        // 传递参数，例如UltraVNC设置的密码
        credentials: {
          password: this.password,
        },
      });
      this.rfb.addEventListener("connect", this.connectedToServer);
      this.rfb.addEventListener("disconnect", this.disconnectedFromServer);
      this.rfb.scaleViewport = true; // true为自适应大小，false当远程会话小于容器大小时居中
      this.rfb.resizeSession = false;
    },

    connectedToServer(e) {
      console.log("success", e);
    },

    disconnectedFromServer(e) {
      // 根据情况重新连接或销毁
      if (e.detail.clean) {
        // 重新连接
        // this.connectVnc()
        // 销毁连接
        // this.rfb && this.rfb._disconnect();
      } else {
        // 重新连接
        // this.connectVnc()
        // 销毁连接
        // this.rfb && this.rfb._disconnect();
      }
    }
  },
};
</script>

<style lang="scss" scoped>
.content {
  width: 100%;
  height: 800px;
  display: flex;
  flex-direction: row;

  #screen {
    overflow: hidden;
    height: 800px;
    width: 70%;
  }
}
</style>

