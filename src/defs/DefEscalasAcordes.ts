import * as def from "./DefAcordesJazz";

export function calculateChords(bas: number = 0, tipo: string = "M") {
  let valueReturn: number[][] = [[]];
  switch (tipo) {
    case "M":
      let major = [
        def.createNotesList(bas + 0, "M"),
        def.createNotesList(bas + 2, "m"),
        def.createNotesList(bas + 4, "m"),
        def.createNotesList(bas + 5, "M"),
        def.createNotesList(bas + 7, "M"),
        def.createNotesList(bas + 9, "m"),
        def.createNotesList(bas + 11, "o"),
        // Septimos
        def.createNotesList(bas + 0, "M7"),
        def.createNotesList(bas + 2, "m7"),
        def.createNotesList(bas + 4, "m7"),
        def.createNotesList(bas + 5, "M7"),
        def.createNotesList(bas + 7, "D7"),
        def.createNotesList(bas + 9, "m7"),
        def.createNotesList(bas + 11, "o/7"),
        def.createNotesList(bas + 4, "m7"),
        // Mayor armonica
        def.createNotesList(bas + 2, "o"),
        // Mayor armonicos septimo
        def.createNotesList(bas + 11, "o7"),
        //Napolitano
        def.createNotesList(bas + 1, "m"),
        //Subdominante armonico
        def.createNotesList(bas + 5, "m"),
        //Dominante noveno
        def.createNotesList(bas + 7, "9"),
        def.createNotesList(bas + 7, "DM9*5"),
        def.createNotesList(bas + 7, "Dm9*5"),
        // 9na de Cristian
        def.createNotesList(bas + 7, "7b9"),
        //Dominantes alterados
        def.createNotesList(bas + 7, "7b5"),
        def.createNotesList(bas + 7, "7#5"),
        def.createNotesList(bas + 7, "D7*5"),
      ];

      valueReturn = major;

      break;
    case "m":
      //    armsList.push(new Armonia(def.crearAcorde(bas+0,"M"),

      // Menor natural
      // {"m", "o", "M", "m", "m", "M", "M"};
      let minor = [
        def.createNotesList(bas + 0, "m"),
        def.createNotesList(bas + 2, "o"),
        def.createNotesList(bas + 3, "M"),
        def.createNotesList(bas + 5, "m"),
        def.createNotesList(bas + 7, "m"),
        def.createNotesList(bas + 8, "M"),
        def.createNotesList(bas + 10, "M"),
        //public static String[] Ac7EscMenNat = {"m7", "o/7", "M7", "m7", "m7", "M7", "D7"};
        def.createNotesList(bas + 0, "m7"),
        //    armsList.push(new Armonia(def.crearAcorde(bas+2,"o/7"),
        def.createNotesList(bas + 3, "M7"),
        def.createNotesList(bas + 5, "m7"),
        def.createNotesList(bas + 7, "m7"),
        def.createNotesList(bas + 8, "M7"),
        def.createNotesList(bas + 10, "D7"),
        //Menor armonico
        //    armsList.push(new Armonia(def.crearAcorde(bas+3,"+"),
        def.createNotesList(bas + 7, "M"),
        //    armsList.push(new Armonia(def.crearAcorde(bas+11,"o"),
        //Setpimos
        //    armsList.push(new Armonia(def.crearAcorde(bas+0,"I+"),
        //    armsList.push(new Armonia(def.crearAcorde(bas+3,"III+"),
        def.createNotesList(bas + 7, "D7"),
        def.createNotesList(bas + 11, "o7"),
        //Menor MelÃ³dico
        // Menor melodica
        def.createNotesList(bas + 2, "m"),
        //    armsList.push(new Armonia(def.crearAcorde(bas+3,"+"),
        def.createNotesList(bas + 5, "M"),
        //    armsList.push(new Armonia(def.crearAcorde(bas+9,"o"),
        //    armsList.push(new Armonia(def.crearAcorde(bas+11,"o"),
        //Septimos
        def.createNotesList(bas + 2, "m7"),
        def.createNotesList(bas + 5, "D7"),
        //    armsList.push(new Armonia(def.crearAcorde(bas+9,"o/7"),
        //    armsList.push(new Armonia(def.crearAcorde(bas+11,"o/7"),
        //Napolitano
        // No jala el napolitano :/
        def.createNotesList(bas + 1, "M"),
        //Dominante noveno
        def.createNotesList(bas + 7, "DM9*5"),
        def.createNotesList(bas + 7, "Dm9*5"),
        def.createNotesList(bas + 7, "D7*5"),
        // 9na de Cristian
        def.createNotesList(bas + 7, "7b9"),
      ];
      valueReturn = minor;
      break;
  }
  return valueReturn;
}
