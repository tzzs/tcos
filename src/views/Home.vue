<template>
  <div class="home">
    <h1>TCOS</h1>
    <div class="upload">
      <a-upload-dragger
        name="file"
        :multiple="true"
        list-type="picture"
        action="http://localhost:8000/tcosupload/upload"
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
        <a-input v-model="url" style="width: 90%" disabled autosize />
        <a-button style="width: 10%" @click="copy">复制</a-button>
      </a-input-group>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data: function () {
    return {
      url: "",
    };
  },
  components: {},
  methods: {
    handleChange(info) {
      // console.log(info.file.response);
      const status = info.file.status;
      // console.log(status);
      if (status !== "uploading") {
        console.log("******");
        // console.log(info.file, info.fileList);
        // console.log("******");
      } else {
        // clear file list
        info.fileList = [];
      }

      if (status === "done") {
        this.$message.success(`${info.file.name} file uploaded successfully.`);
        // display the url in the output box
        this.url = info.file.response.data.url;
      } else if (status === "error") {
        this.$message.error(`${info.file.name} file upload failed.`);
        this.url = info.file.response.msg;
      }
    },
    copy() {
      let th = this;
      navigator.clipboard.writeText(this.url).then(
        function () {
          th.$message.success("The url has been copied.");
          console.log("copy successful.");
        },
        function () {
          th.$message.error("Failed to copy url to clipboard.");
          console.log("copy failed.");
        }
      );
    },
  },
};
</script>

<style scoped>
.home {
  margin-top: 10%;
}
.upload {
  width: 40%;
  text-align: center;
  margin: 30px auto;
}

.res {
  /* text-align: center; */
  margin: auto;
  width: 40%;
}
</style>
