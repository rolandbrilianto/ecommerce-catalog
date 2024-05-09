<template>
  <div id="app">
    <div class="background"
    :class="{'bgMale':gender==='male','bgFemale':gender === 'female'}">
      <div class="container">
        <div class="productBox">

          <div class="gambar">
            gambar
          </div>

          <div class="deskripsi">
            <div>judul</div>
            <div>kategori</div>
            <div>isi</div>
            <div>harga</div>
            <div>tombol</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      gender:'female'
    }
  }
}
</script>

<style>
body{
    margin: 0;
    padding: 0;
    height: 100vh;
  
}
.background{
  height: 66vh;
  
}

.bgFemale{
  background-color: #FDE2FF;
  
}

.bgMale{
  background-color: #D6E6FF;
  
}
.container{
  display: flex;
  justify-content: center;
  align-items: center;
  
  height: 100%;
}
.productBox{
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
.gambar{
  flex-basis: 33.333333%
}
.deskripsi{
  flex-basis: 66.666667%;
  display: flex;
  flex-direction: column;
}
#app {
 
}
</style>
