// import Vue from "vue";
// import Vuex from "vuex";

// Vue.use(Vuex);

// export default new Vuex.Store({
//   state: {
//     matrixA: null,
//     matrixB: null,
//     hasilLima: ""
//   },
//   mutations: {},
//   actions: {

//     },
//     matB(state) {
//       if (state.matrixB > 1) {
//         let arrb = state.matrixB.split("").map(Number);
//         let matrixB = [];
//         for (let i = 3; i > 0; i--) {
//           matrixB.push(arrb.splice(0, Math.ceil(arrb.length / i)));
//         }
//         state.matrixB = matrixB;
//       }
//     },
//     five(state) {
//       let aLength = state.matrixA.length;
//       let b0Length = state.matrixB[0].length;
//       let bLength = state.matrixB.length;
//       if (state.matrixA[0].length !== bLength) {
//         return "Matriks Tidak sama";
//       }
//       let result = [];
//       for (let i = 0; i < aLength; i++) {
//         result.push([]);
//         for (let j = 0; j < b0Length; j++) {
//           result[i][j] = state.matrixA[i][j] + state.matrixB[i][j];
//         }
//       }
//       result = state.hasilLima;
//     }
//   },
//   modules: {}
// });
