import { reactive } from "vue";

const store = reactive({
  urlPrefix: "http://127.0.0.1:8000",
});

export { store };