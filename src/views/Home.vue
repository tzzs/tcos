<template>
  <div class="home">
    <h1>TCOS</h1>
    <div class="upload">
      <a-upload-dragger
        name="file"
        :multiple="true"
        list-type="picture"
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        @change="handleChange"
      >
        <p class="ant-upload-drag-icon">
          <a-icon type="inbox" />
        </p>
        <p class="ant-upload-text">Click or drag file to this area to upload</p>
        <p class="ant-upload-hint">
          Support for a single or bulk upload. Strictly prohibit from uploading
          company data or other band files
        </p>
      </a-upload-dragger>
    </div>
    <div class="res">
      <a-input-group compact style="text-align: left">
        <a-input style="width: 90%" disabled />
        <a-button style="width: 10%">复制</a-button>
      </a-input-group>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  components: {},
  methods: {
    handleChange(info) {
      const status = info.file.status;
      console.log(status);
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      } else {
        // clear file list
        info.fileList = [];
      }
      if (status === "done") {
        this.$message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        this.$message.error(`${info.file.name} file upload failed.`);
      }
    },
  },
};
</script>

<style scoped>
.home {
  margin-top: 10%;
}
.upload {
  width: 60%;
  text-align: center;
  margin: 30px auto;
}

.res {
  /* text-align: center; */
  margin: auto;
  width: 60%;
}
</style>
