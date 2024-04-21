import { createWebHistory, createRouter } from "vue-router";
// import ContactBook from "@/views/ContactBook.vue";
import NotFound from "@/views/NotFound.vue";
// import ContactEdit from "@/views/ContactEdit.vue";
// import ContactAdd from "@/views/ContactAdd.vue";
import Home from "@/views/quanly/Home.vue";
import Book from "@/views/quanly/Book.vue";
import Reader from "@/views/quanly/Reader.vue";
import AddBook from "@/views/quanly/AddBook.vue";
import AddReader from "@/views/quanly/AddReader.vue";
import Signin from "@/components/quanly/signin.vue";


const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },

  {
    path: "/book",
    name: "books",
    component: Book,
  },

  {
    path: "/reader",
    name: "readers",
    component: Reader,
  },
    
  {
    path: "/addbook",
    name: "book.add",
    component: AddBook,
  },

  {
    path: "/addreader",
    name: "reader.add",
    component: AddReader,
  },

  {
    path: "/signin",
    name: "admin.signin",
    component: Signin,
  },
  // {
  //   path: "/",
  //   name: "contactbook",
  //   component: ContactBook,
  // },
  {
    path: "/:pathMatch(.*)*",
    name: "notfound",
    component: NotFound,
  },

  // {
  //   path: "/contacts/",
  //   name: "contact.add",
  //   component: ContactAdd,
  // },

];

const router = createRouter( {
  history: createWebHistory( import.meta.env.BASE_URL ),
  routes,
} );

export default router;