<template>
  <div class="grid-container">
    <el-row>
      <el-col :span="10">
        <div class="grid-item">
          <img src="@/assets/NetworkTopology/protocol_distribution.png" class="image" alt="Image">
        </div>
      </el-col>
      
      <el-col :span="10">
        <div class="grid-item">
          <img src="@/assets/NetworkTopology/total_traffic_by_source_ip.png" class="image" alt="Image">
        </div>
      </el-col>
    </el-row>  
    <el-row>
      <el-col :span="10">
        <div class="grid-item">
          <img src="@/assets/NetworkTopology/source_ip_distribution.png" class="image" alt="Image">
        </div>
      </el-col>
      <el-col :span="10">
        <div class="grid-item">
          <img src="@/assets/NetworkTopology/traffic_volume_by_source_ip.png" class="image" alt="Image">
          <div class="title">{{ images[3].title }}</div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        { src: '@/assets/NetworkTopology/ensp.png', title: '标题1' },
        { src: 'image2.jpg', title: '标题2' },
        { src: 'image3.jpg', title: '标题3' },
        { src: 'image4.jpg', title: '标题4' }
      ]
    };
  }
};
</script>

<style scoped>
.grid-container {
  padding: 20px;
}

.grid-item {
  text-align: center;
  margin-bottom: 20px;
}

.image {
  width: 100%;
  height: auto;
}

.title {
  margin-top: 10px;
}
</style>
