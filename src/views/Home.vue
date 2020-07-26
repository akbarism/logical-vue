<template>
  <div class="container">
    <div class="user">
      <aside>
        <div class="men">
          <i class="fas fa-user"></i>
          <h4>Soal Logic</h4>
        </div>
      </aside>
      <div class="cover">
        <div class="temp">
          <h4>1. Menampilkan N buah bilangan ganjil pertama</h4>
          <div>
            <input type="number" v-model="ganjil" />
            <button @click="one">submit</button>
          </div>
          <h4>Hasil :</h4>
          {{ hasilSatu }}
        </div>
        <div class="temp">
          <h4>2. menjumlahkan matrix</h4>
          <div>
            <div>
              <input type="number" v-model="matrixA" />
              <button @click="matA">Create Matrix A</button>
            </div>
            <div>
              <input type="number" v-model="matrixB" />
              <button @click="matB">Create Matrix B</button>
            </div>
            <button @click="five">submit</button>
          </div>
          <h4>Hasil :</h4>
          {{ hasilLima }}
        </div>
        <div class="temp">
          <h4>3. Membuat Deret Fibonacci</h4>
          <div>
            <input type="number" v-model="fibonacci" />
            <button @click="two">submit</button>
          </div>
          <h4>Hasil :</h4>
          {{ hasilDua }}
        </div>
        <div class="temp">
          <h4>4. palindrome</h4>
          <div>
            <input type="text" v-model="palindrome" />
            <button @click="three">submit</button>
          </div>
          <h4>Hasil :</h4>
          {{ hasilTiga }}
        </div>
        <div class="temp">
          <h4>5. ascending short</h4>
          <div>
            <input type="text" v-model="asce" />
            <button @click="four">submit</button>
          </div>
          <h4>Hasil :</h4>
          {{ hasilEmpat }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      ganjil: null,
      fibonacci: null,
      matrixA: "",
      matrixB: "",
      palindrome: "",
      hasilTiga: "",
      hasilSatu: "",
      hasilDua: "",
      hasilEmpat: "",
      hasilLima: "",
      asce: ""
    };
  },
  methods: {
    one() {
      let hasil = [];
      for (let i = 0; i < 100; i++) {
        if (i % 2 === 1) {
          hasil.push(i);
        }
      }
      let c;
      c = hasil.slice(0, this.ganjil);
      this.hasilSatu = c;
    },
    two() {
      let fib = [0, 1];
      for (let i = 2; i <= this.fibonacci; i++) {
        fib[i] = fib[i - 2] + fib[i - 1];
      }
      if (fib[0] === 0) {
        fib.shift();
      }
      this.hasilDua = fib;
    },
    three() {
      var re = /[\W_]/g;
      var lowRegStr = this.palindrome.toLowerCase().replace(re, "");
      var reverseStr = lowRegStr
        .split("")
        .reverse()
        .join("");
      if (reverseStr === lowRegStr) {
        this.hasilTiga = "palindrome";
      } else {
        this.hasilTiga = "bukan palindrome";
      }
    },
    four() {
      this.hasilEmpat = this.asce.split("").map(Number);
      this.hasilEmpat.sort(function(a, b) {
        return a - b;
      });
    },
    five() {
      let aLength = this.matrixA.length;
      console.log(this.matrixA);
      console.log(this.matrixB);
      let b0Length = this.matrixB[0].length;
      let bLength = this.matrixB.length;
      if (this.matrixA[0].length !== bLength) {
        return "Matriks Tidak sama";
      }
      let result = [];
      for (let i = 0; i < aLength; i++) {
        result.push([]);
        for (let j = 0; j < b0Length; j++) {
          result[i][j] = this.matrixA[i][j] + this.matrixB[i][j];
        }
      }
      return result;
    },
    matA() {
      if (this.matrixA.length > 1) {
        let arr = this.matrixA.split("").map(Number);
        let matrixA = [];
        for (let i = 3; i > 0; i--) {
          matrixA.push(arr.splice(0, Math.ceil(arr.length / i)));
        }
        this.matrixA = matrixA;
        // console.log(this.matrixA);
      }
    },
    matB() {
      if (this.matrixB.length > 1) {
        let arr = this.matrixB.split("").map(Number);
        let matrixB = [];
        for (let i = 3; i > 0; i--) {
          matrixB.push(arr.splice(0, Math.ceil(arr.length / i)));
        }
        this.matrixB = matrixB;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  position: relative;
  padding: 10px;
  box-sizing: border-box;
  background: #b4b9cd;
  height: 100vh;
  .user {
    display: flex;
    width: 100%;
    height: 100%;
    padding: 10px;
    box-sizing: border-box;
    background: #ffffff;
    border-radius: 20px;
    aside {
      display: flex;
      width: 15%;
      background: #ffffff;
      padding: 0 10px 0 0;
      box-sizing: border-box;
      .men {
        display: flex;
        align-items: center;
        width: 100%;
        height: 40px;
        background: #b4b9cd;
        border-radius: 10px;
        padding: 10px;
        box-sizing: border-box;
        h4 {
          margin-left: 10px;
        }
      }
    }
    .cover {
      width: 85%;
      display: flex;
      flex-wrap: wrap;
      padding: 20px;
      box-sizing: border-box;
      border-radius: 20px;
      background: #f3f3f3;
      overflow-y: scroll;
      .temp {
        display: flex;
        flex-direction: column;
        width: 50%;
        height: 50%;
        h4 {
          margin-bottom: 10px;
        }
        input {
          width: 200px;
          padding: 5px 10px;
          height: 25px;
          border: 1px solid #ccc;
          border-radius: 5px 0 0 5px;
          margin-bottom: 10px;
        }
        button {
          padding: 9px;
          border-radius: 0 5px 5px 0;
          border: 1px solid #ccc;
        }
      }
    }
  }
}
</style>
