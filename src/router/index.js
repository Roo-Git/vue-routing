import { createRouter, createWebHashHistory } from "vue-router";
import TeamsList from "../components/teams/TeamsList.vue";
import UsersList from "../components/users/UsersList.vue";
import TeamMembers from "../components/teams/TeamMembers.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/", redirect: "/teams" }, // redirection to teams

    {
      path: "/teams",
      component: TeamsList,
      children: [
        { path: "/teams/:teamId", component: TeamMembers, props: true }, // dynamic segment
      ],
    },
    { path: "/users", component: UsersList },
    // { path: "/users", component: UsersList, alias: '/'},  // redirection with alias
    { path: "/:notFound(.*)", redirect: "/teams" }, // catch all routes  // component: Not found
  ],
});

export default router;
