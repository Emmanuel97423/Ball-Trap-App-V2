<template>
  <div>
    <!-- <button class="btn-orange" v-b-modal.modal-click-collect>
      Tableau des tailles
    </button> -->
    <img
      class="click-collect-img"
      v-b-modal.modal-click-collect
      src="@/assets/img/common/click-collect-computer-mouse-pointer-260nw.jpg"
    />
    <b-modal
      id="modal-click-collect"
      body-class="body-click-collect"
      dialog-class="dialog-click-collect"
      content-class="content-click-collect"
      modal-class="modal-click-collect"
      :hide-header-close="false"
      :hide-footer="true"
      :hide-header="false"
    >
      <div class="click-collect-content">
        <img src="@/assets/img/common/Click-and-Collect-process.jpg" />
      </div>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: "click-collect-modal",
};
</script>

<style scoped>
.click-collect-img {
  width: 100px;
  cursor: pointer;
}

.click-collect-content {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
@media (max-width: 425px) {
  .click-collect-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .btn-orange {
    width: 100%;
  }
}

.modal-click-collect {
  width: 100%;
}
</style>