import type { Actions } from "@sveltejs/kit";


export const actions: Actions = {
  register: async (event) => {
    console.log("AQUI");
  },
}