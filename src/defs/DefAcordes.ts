/**
 * Clasifica el acorde de acuerdo a tipo y el cruce de voces. Revisar articulo
 * para el significado de los numeros % Notacion tipos de acordes 000000xx
 * DER-IZQ primeros dos digitos base del acorde modulo 12 0000xx00 segundos dos
 * digitos tipo del acorde 000x0000 terceros dos digitos es la inversion
 * 00x00000 cruce de voces 2 : cruce, 1 : bueno 0x000000 algun par de voces sep
 * por mas de una octava 2:sep,1:bueno
 *
 * 00 01 02 03 04
 *
 * 00 : No definido
 *
 * 01 : Mayor (TM) [0,4,7]
 *
 * 02 : Menor (Tm) [0,3,7]
 *
 * 03 : Dim (To) [0,3,6]
 *
 * 04 : Aum (T+) [0,4,8]
 *
 * 05 : M7 * Major seventh M7 (TM,7M) [0,4,7,11]
 *
 * 06 : Mm7 * Major minor seventh Mm7 (TM,7m) [0,4,7,10]
 *
 * 07 : m7 * Minor seventh m7 (Tm,7m) [0,3,7,10]
 *
 * 08 : o/7 * Half-dim seventh o/7 (To,7m) [0,3,6,10]
 *
 * 09 : o7 * dim seventh o7 (To,7o) [0,3,6, 9]
 *
 * 10 : I+ * acorde I escala menor con VII grado aumentado [0,3,7,11]
 *
 * 11 : III+ * acorde III escala menor con VII grado aumentado [0,4,8,11]
 *
 * 12 : acorde D7 sin quinta [0,4,10]
 *
 * 13 : Tonica menor sin quinta [0,4]
 *
 * 14 : Tonica mayor sin quinta
 *
 * Triadas Diatonicos en escala mayor I ii iii IV V vi viio
 *
 * Septimos Diatonicos en escala Mayor I_M7 ii_m7 iii_m7 IV_M7 V_Mm7 vi_m7
 * vii/o_o/7
 *
 * Revisar con piano Triadas Diatonicos en escala menor i iio ii III III+ iv IV
 * v V VI #vio VII viio
 *
 * Septimos Diatonicos en escala menor i_m7 ii/o_o/7 III_M7 iv_m7 V_Mm7 VI_M7
 * viio_o7
 */
export default {
  aS_mayor: "M",
  a_mayor: [0, 4, 7],
  bS_menor: "m",
  b_menor: [0, 3, 7],
  cS_dim: "o",
  c_dim: [0, 3, 6],
  dS_aum: "+",
  d_aum: [0, 4, 8],
  eS_M7: "M7",
  e_M7: [0, 4, 7, 11],
  fS_Mm7: "Mm7",
  f_Mm7: [0, 4, 7, 10],
  gS_m7: "m7",
  g_m7: [0, 3, 7, 10],
  hS_semiDim7: "o/7",
  h_semiDim7: [0, 3, 6, 10],
  iS_dim7: "o7",
  i_dim7: [0, 3, 6, 9],
  // Acordes que surgen del menor arm y mel
  jS_ImenVIIdim: "I+", //"o7"
  j_ImenVIIdim: [0, 3, 7, 11],
  kS_IIImenVIIaum: "III+", //"o7"
  k_IIImenVIIaum: [0, 4, 8, 11],
  lS_D7_sin5: "D7*5", //Septimo incompleto sin quinta
  l_D7_sin5: [0, 4, 10],
  // Alteraciones de acordes
  S_nap: "IIb1",
  nap: [0, 4, 7],
  // Dominantes alterados
  S_VM7p5: "VM7#5",
  VM7p5: [0, 4, 8, 10],
  //Dominante novena
  S_V9Ms5: "V9Ms5",
  V9Ms5: [0, 2, 4, 10],
  //       V9Ms5 : [0, 4, 10, 2],

  S_V9ms5: "V9ms5",
  V9ms5: [0, 1, 4, 10],
};
