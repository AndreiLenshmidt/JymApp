<script setup>
import { computed, onBeforeMount, provide, ref } from "vue";
import ListItem from "./components/ListItem.vue";
import ListItemCreate from "./components/ListItemCreate.vue";

const ListItems = ref([]);
provide("ListItems", ListItems);

onBeforeMount(() => {
  localStorage.getItem("ListItems")
    ? (ListItems.value = JSON.parse(localStorage.getItem("ListItems")))
    : localStorage.setItem(
        "ListItems",
        JSON.stringify([
          { id: 0, text: "Сделать дело №1", status: false },
          { id: 1, text: "Сделать дело №2", status: true },
          { id: 2, text: "Сделать дело №3", status: false },
        ])
      );
  ListItems.value = JSON.parse(localStorage.getItem("ListItems"));
});

const active = ref("allTask");

const currentId = computed(
  () => ListItems.value[ListItems.value.length - 1].id
);

const createHandler = (text) => {
  ListItems.value.push({
    id: currentId.value + 1,
    text: text,
    status: false,
  });
  localStorage.setItem("ListItems", JSON.stringify(ListItems.value));
};

const deleteHandler = (id) => {
  ListItems.value = ListItems.value.filter((item) => item.id !== id);
  localStorage.setItem("ListItems", JSON.stringify(ListItems.value));
};

const filterHandler = (e) => {
  if (e.target.id) active.value = e.target.id;
};

const filteredListItems = computed(() => {
  if (active.value === "allTask") {
    return ListItems.value;
  } else {
    return ListItems.value.filter(
      (item) => (active.value === "compliteTask") === item.status
    );
  }
});
</script>

<template>
  <div class="wrapped">
    <div class="wrap">
      <header class="header">
        <h1>To-do-list</h1>
      </header>
    </div>
    <div class="wrap">
      <div class="flex">
        <p>Фильтровать задачи</p>
        <div class="filters" @click="filterHandler">
          <button id="allTask" :class="active === 'allTask' && 'active'">
            Все задачи
          </button>
          <button
            id="compliteTask"
            :class="active === 'compliteTask' && 'active'"
          >
            Выполнены
          </button>
          <button id="inWorkTask" :class="active === 'inWorkTask' && 'active'">
            В работе
          </button>
        </div>
      </div>
      <ul class="list">
        <ListItem
          v-for="(item, index) in filteredListItems"
          :key="item.id"
          :item="item"
          @delete-item="deleteHandler(item.id)"
        />
        <ListItemCreate @create-task="createHandler" />
      </ul>
    </div>
  </div>
</template>

<style>
.wrapped {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  text-align: center;
}
.wrap {
  width: 1210px;
  margin: 0 auto;
}

@media (width < 1210px) {
  .wrap {
    width: 768px;
  }
}
@media (width < 768px) {
  .wrap {
    width: 310px;
  }
  p {
    align-self: flex-start;
    padding-left: 10px;
  }
  .filters {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
}

.flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header {
  width: 100%;
}
.filters {
  padding: 10px;
}
.active {
  background-color: #ddffd6;
}
.list {
  padding: 0;
  list-style-position: inside;
}
.footer {
  padding: 20px;
}
button {
  margin-left: 10px;
  border-radius: 5px;
  padding: 5px 20px;
  outline: none;
  border: 1px solid gray;
  background-color: #fff;
  user-select: none;
}
button:hover {
  border: 1px solid gray;
  background-color: #e2e2e2;
}
</style>
