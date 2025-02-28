<script setup>
import { ref } from "vue";

defineEmits(["create-task"]);
const text = ref("");
</script>

<template>
  <li class="item">
    <div class="flex wrap">
      <input type="text" v-model="text" placeholder="Новая задача" />
      <button class="save" @click="$emit('create-task', text), (text = '')">
        Создать задачу
      </button>
    </div>
  </li>
</template>

<style lang="css" scoped>
.item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  border: 1px solid #adadad;
  margin: 20px 5px 5px;
  border-radius: 10px;
}
.save {
  background-color: #d4d8fc;
  width: 100px;
  height: auto;
  padding: 3px 0;
}
.save:hover {
  background-color: #ddffd6;
}
</style>
