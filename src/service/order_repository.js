import { firebaseDatabase } from "./firebase";
import { getDatabase, ref, set } from "firebase/database";

// const createEvent = ;

function addMenu(name, menu) {
  set(ref(firebaseDatabase, "/add_menu"), {
    name,
    menu,
  });
}
