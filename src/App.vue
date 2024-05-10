<template>
  <div id="app">
    <div :class="['background', gender === 'male' ? 'bgMan' : 'bgWoman']">
      <div class="container">
        <div class="productBox">
          <div class="gambar">
            <img src="@/assets/ImgTest.png" class="fotoGambar" alt="gambar" />
          </div>

          <div class="deskripsi">
            <div :class="[gender === 'female' ? 'judulWoman' : 'judulMan']">
              Lock and Love Women's Removable Hooded Faux Leather Moto Biker
              Jacket
            </div>
            <div class="kategori">
              <p style="color: #3f3f3f">Pakaian</p>
              <div :class="[gender === 'female' ? 'ratingWoman' : 'ratingMan']">
                <div class="nilai">2.4/5</div>
                <div v-for="i in 5" :key="i" :class="circleClasses(i)"></div>
              </div>
            </div>
            <div class="horizontal-line"></div>
            <p style="margin-bottom: 35px">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut sequi
              reiciendis illum ipsum pariatur officiis amet cumque corporis modi
              repellat. Mollitia ipsa veritatis cumque ea aspernatur, rem
              voluptatem dignissimos accusantium.
            </p>
            <div class="horizontal-line"></div>
            <div :class="[gender === 'female' ? 'hargaWoman' : 'hargaMan']">
              $29.5
            </div>
            <div class="tombol">
              <button
                :class="[
                  gender === 'female' ? 'tombolFillWoman' : 'tombolFillMan',
                ]"
              >
                Buy Now
              </button>
              <button
                :class="[
                  gender === 'female' ? 'tombolBorderWoman' : 'tombolBorderMan',
                ]"
              >
                Next Product
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      gender: "male",
      productRating: 4,
    };
  },
  methods: {
    circleClasses(i) {
      return {
        circleWoman: this.gender === "female",
        circleMan: this.gender === "male",
        filledWoman: this.gender === "female" && i <= this.productRating,
        filledMan: this.gender === "male" && i <= this.productRating,
        borderWoman: this.gender === "female",
        borderMan: this.gender === "male",
      };
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap");
html {
  font-family: "Inter", sans-serif;
}
body {
  margin: 0;
  padding: 0;
  height: 100vh;
}
.background {
  height: 66vh;
  background-image: url("@/assets/bg-pattern.svg");
}

.bgWoman {
  background-color: #fde2ff;
}

.bgMan {
  background-color: #d6e6ff;
}
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
.productBox {
  display: flex;
  flex-direction: row;
  top: 15%;
  position: absolute;
  width: 80%;
  height: 70%;
  box-shadow: 2px 4px 21px 0 rgba(0, 0, 0, 0.2);
  background-color: white;
  border-radius: 10px;
}
.gambar {
  flex-basis: 33.333333%;
}
.fotoGambar {
  width: 250px;
  margin-top: 50px;
  margin-left: 50px;
}
.deskripsi {
  flex-basis: 66.666667%;
  display: flex;
  flex-direction: column;
  margin-right: 50px;
}
.judulWoman,
.judulMan {
  font-size: 30px;
  font-weight: 600;
  margin-top: 25px;
}
.judulWoman {
  color: #720060;
}
.judulMan {
  color: #002772;
}
.kategori {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.ratingWoman,
.ratingMan {
  display: flex;
  margin-top: auto;
  margin-bottom: auto;
}
.nilai {
  margin-right: 4px;
}
.circleWoman,
.circleMan {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background-color: white;
  margin-right: 3px;
  border: 1px solid transparent;
}
.borderWoman {
  border-color: #720060;
}
.borderMan {
  border-color: #002772;
}
.filledWoman {
  background-color: #720060;
}
.filledMan {
  background-color: #002772;
}
.horizontal-line {
  border-top: 1px solid #000;
  opacity: 20%;
}
.hargaWoman,
.hargaMan {
  font-weight: 600;
  font-size: 30px;
  margin-top: 10px;
  margin-bottom: 10px;
}
.hargaWoman {
  color: #720060;
}
.hargaMan {
  color: #002772;
}
.tombol {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.tombolFillWoman,
.tombolFillMan {
  flex-basis: 49%;
  height: 42px;
  color: white;
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
  border-radius: 4px;
  border: none;
}
.tombolFillWoman {
  background-color: #720060;
}
.tombolFillMan {
  background-color: #002772;
}
.tombolBorderWoman,
.tombolBorderMan {
  flex-basis: 49%;
  height: 42px;
  background-color: transparent;
  border: solid 3px;
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
  border-radius: 4px;
}
.tombolBorderWoman {
  color: #720060;
  border-color: #720060;
}
.tombolBorderMan {
  color: #002772;
  border-color: #002772;
}
#app {
}
</style>
