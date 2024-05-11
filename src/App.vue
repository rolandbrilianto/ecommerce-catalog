<template>
  <div id="app">
    <div
      v-if="
        currentProduct.category == 'jewelery' ||
        currentProduct.category == 'electronics'
      "
    >
      <div class="bgUnavailable">
        <div class="container">
          <div v-if="isLoading" class="productBox">
            <div class="custom-loaderUnvavailable"></div>
          </div>
          <div v-else class="productBox">
            <img
              src="@/assets/sad-face.png"
              style="margin-left: 55px"
              alt="gambar"
            />
            <div class="unavailable">
              <p style="text-align: center">
                This product is unavailable to show
              </p>
              <button class="tombolUnvailable" @click="nextProduct">
                Next Product
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <div
        :class="[
          'background',
          category === `men's clothing` ? 'bgMan' : 'bgWoman',
        ]"
      >
        <div class="container">
          <div v-if="isLoading" class="productBox">
            <div
              :class="[
                category === `men's clothing`
                  ? 'custom-loaderMan'
                  : 'custom-loaderWoman',
              ]"
            ></div>
          </div>
          <div class="productBox" v-else>
            <div class="gambar">
              <img
                :src="currentProduct.image"
                class="fotoGambar"
                alt="gambar"
              />
            </div>

            <div class="deskripsi">
              <div
                :class="[
                  category === `women's clothing` ? 'judulWoman' : 'judulMan',
                ]"
              >
                {{ currentProduct.title }}
              </div>
              <div class="kategori">
                <p style="color: #3f3f3f">{{ currentProduct.category }}</p>
                <div
                  :class="[
                    category === `women's clothing`
                      ? 'ratingWoman'
                      : 'ratingMan',
                  ]"
                >
                  <div class="nilai">{{ currentProduct.rating.rate }}/5</div>
                  <div v-for="i in 5" :key="i" :class="circleClasses(i)"></div>
                </div>
              </div>
              <div class="horizontal-line"></div>
              <p style="margin-bottom: 35px">
                {{ currentProduct.description }}
              </p>
              <div class="horizontal-line"></div>
              <div
                :class="[
                  category === `women's clothing` ? 'hargaWoman' : 'hargaMan',
                ]"
              >
                ${{ currentProduct.price }}
              </div>
              <div class="tombol">
                <button
                  :class="[
                    category === `women's clothing`
                      ? 'tombolFillWoman'
                      : 'tombolFillMan',
                  ]"
                >
                  Buy Now
                </button>
                <button
                  @click="nextProduct"
                  :class="[
                    category === `women's clothing`
                      ? 'tombolBorderWoman'
                      : 'tombolBorderMan',
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
  </div>
</template>

<script>
import { getProducts } from "./API/request.js";
export default {
  data() {
    return {
      currentIndex: 1,
      isLoading: false,
      currentProduct: {},
      category: "",
    };
  },
  methods: {
    circleClasses(i) {
      return {
        circleWoman: this.category === "women's clothing",
        circleMan: this.category === "men's clothing",
        filledWoman:
          this.category === "women's clothing" &&
          i <= Math.round(this.currentProduct.rating.rate),
        filledMan:
          this.category === "men's clothing" &&
          i <= Math.round(this.currentProduct.rating.rate),
        borderWoman: this.category === "women's clothing",
        borderMan: this.category === "men's clothing",
      };
    },

    async fetchProduct() {
      this.isLoading = true;
      try {
        const response = await fetch(getProducts(this.currentIndex));
        const data = await response.json();

        if (
          data.category === "women's clothing" ||
          data.category === "men's clothing"
        ) {
          this.category = data.category;
        }
        this.currentProduct = {
          title: data.title,
          price: data.price,
          description:
            data.description.length > 576
              ? `${data.description.substring(0, 576)}...`
              : data.description,
          category: data.category,
          image: data.image,
          rating: {
            rate: data.rating.rate,
            count: data.rating.count,
          },
        };
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        this.isLoading = false;
      }
    },

    nextProduct() {
      this.currentIndex = this.currentIndex < 20 ? this.currentIndex + 1 : 1;
      this.fetchProduct();
    },
  },
  mounted() {
    this.fetchProduct();
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
.unavailable {
  display: flex;
  flex-direction: column;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
}
.custom-loaderMan {
  width: 130px;
  height: 130px;
  border-radius: 50%;
  background: conic-gradient(#0000 10%, #002772);
  -webkit-mask: radial-gradient(farthest-side, #0000 calc(100% - 16px), #000 0);
  animation: s3 1s infinite linear;
  margin-top: auto;
  margin-bottom: auto;
  margin-left: auto;
  margin-right: auto;
}
.custom-loaderUnvavailable {
  width: 130px;
  height: 130px;
  border-radius: 50%;
  background: conic-gradient(#0000 10%, #d8d7d7);
  -webkit-mask: radial-gradient(farthest-side, #0000 calc(100% - 16px), #000 0);
  animation: s3 1s infinite linear;
  margin-top: auto;
  margin-bottom: auto;
  margin-left: auto;
  margin-right: auto;
}
.custom-loaderWoman {
  width: 130px;
  height: 130px;
  border-radius: 50%;
  background: conic-gradient(#0000 10%, #720060);
  -webkit-mask: radial-gradient(farthest-side, #0000 calc(100% - 16px), #000 0);
  animation: s3 1s infinite linear;
  margin-top: auto;
  margin-bottom: auto;
  margin-left: auto;
  margin-right: auto;
}

@keyframes s3 {
  to {
    transform: rotate(1turn);
  }
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
.bgUnavailable {
  height: 66vh;
  background-color: #d8d7d7;
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
  height: 350px;
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
.tombolUnvailable {
  height: 42px;
  width: 465px;
  background-color: white;
  border-radius: 4px;
  border: solid 3px black;
  cursor: pointer;
}
#app {
}
</style>
