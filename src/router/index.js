import { createRouter, createWebHashHistory } from "vue-router";
import TeamsList from "../components/teams/TeamsList.vue";
import UsersList from "../components/users/UsersList.vue";
import TeamMembers from "../components/teams/TeamMembers.vue";
import TeamsFooter from "../components/teams/TeamsFooter.vue";
import UsersFooter from "../components/users/UsersFooter.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/", redirect: "/teams" }, // redirection to teams

    {
      name: "teams",
      path: "/teams",
      components: { default: TeamsList, footer: TeamsFooter },
      children: [
        {
          name: "team-members",
          path: "/teams/:teamId",
          component: TeamMembers,
          props: true,
        }, // dynamic segment
      ],
    },
    {
      name: "users",
      path: "/users",
      components: { default: UsersList, footer: UsersFooter },
    },
    // { path: "/users", component: UsersList, alias: '/'},  // redirection with alias
    { name: "not-found", path: "/:notFound(.*)", redirect: "/teams" }, // catch all routes  // component: Not found
  ],
  scrollBehavior(savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return { left: 0, top: 0 };
  },
});

router.beforeEach(function (to, from, next) {
  // NAVIGATION GUARDS
  //next(false);
  //if (to.name === 'team-members) {
  //next(true);
  // } else {
  //next({name: 'team-members, params: {teamId: 't2'}});
  next(true);
});

export default router;
