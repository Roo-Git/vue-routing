import { createRouter, createWebHashHistory } from "vue-router";
import TeamsList from "../components/teams/TeamsList.vue";
import UsersList from "../components/users/UsersList.vue";
import TeamMembers from "../components/teams/TeamMembers.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/", redirect: "/teams" }, // redirection to teams
    { path: "/teams", component: TeamsList },
    { path: "/teams/:teamId", component: TeamMembers }, // dynamic segment
    { path: "/users", component: UsersList },
    // { path: "/users", component: UsersList, alias: '/'},  // redirection with alias
  ],
});

export default router;
