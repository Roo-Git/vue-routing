import { createRouter, createWebHashHistory } from "vue-router";
import TeamsList from "../components/teams/TeamsList.vue";
import UsersList from "../components/users/UsersList.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/teams", component: TeamsList },
    { path: "/users", component: UsersList },
  ],
});

export default router;
