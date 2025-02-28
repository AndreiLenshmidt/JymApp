<script setup>
import { inject, ref, watch } from "vue";

const props = defineProps(["item"]);
defineEmits(["delete-item"]);
const changeText = ref(false);
const handleClick = () => {
  changeText.value = !changeText.value;
};

const ListItems = inject("ListItems");

watch(changeText, (oldValue, newValue) => {
  if (oldValue === false && newValue === true) {
    localStorage.setItem("ListItems", JSON.stringify(ListItems.value));
  }
});

watch(props.item, () => {
  localStorage.setItem("ListItems", JSON.stringify(ListItems.value));
});
</script>

<template>
  <li class="item">
    <div>
      <div class="absolute">
        <input v-if="changeText" type="text" v-model="item.text" />
        <span v-else>
          {{ item.text }}
        </span>
      </div>
      <button class="save" @click="handleClick">
        {{ changeText ? "Сохранить" : "Редактировать" }}
      </button>
    </div>
    <div class="flex">
      <label :for="item.id">
        {{ item.status ? "выполнена" : "выполнить" }}
      </label>
      <input type="checkbox" :id="item.id" v-model="item.status" />
      <button @click="$emit('delete-item')">X</button>
    </div>
  </li>
</template>

<style lang="css" scoped>
.absolute {
  position: absolute;
  top: 5px;
  left: 20px;
}
.item {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 10px 10px;
  background-color: #ededed;
  margin: 5px;
  border-radius: 10px;
}
@media (width < 1210px) {
  span {
    display: block;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    text-align-last: left;
  }
  .absolute {
    width: 730px;
  }
  input {
    text-align: left;
  }
}
@media (width < 768px) {
  span {
    display: block;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    text-align-last: left;
  }
  .absolute {
    width: 280px;
  }
  input {
    text-align: left;
  }
}

label {
  display: flex;
  align-items: center;
  user-select: none;
}
input {
  width: 180px;
}
input[type="checkbox"] {
  width: 18px;
  height: 18px;
  margin-left: 10px;
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
button {
  padding: 0;
  background-color: #ffaeae;
  width: 18px;
  height: 18px;
}
button:hover {
  background-color: red;
}
</style>
