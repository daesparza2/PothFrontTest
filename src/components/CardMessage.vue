<template>
  <section class="section-tours">
    <div class="row">
      <div class="col-lg-100% mb-7">
        <div class="my-flip-container">
          <div class="my-flip-inner my-flip-right">
            <div class="my-flip-inner-wrapper">
              <div class="my-flip-side my-flip-front">
                <div class="my-flip-color my-flip-color--1">
                  <div class="background-color-header"></div>
                </div>
                <div class="my-flip-details">
                  <h4 class="my-flip-heading">
                    El siguiente mensaje fue escrito por:
                  </h4>
                  <div class="my-flip-text">
                    <p>{{ remitente }}</p>
                  </div>
                </div>
              </div>
              <div class="my-flip-side my-flip-back my-flip-back-1">
                <div class="my-flip-back-inner">
                  <div class="my-flip-Description">
                    <h3>Contenido</h3>
                  </div>
                  <div class="my-flip-back-text">
                    <p><span v-html="contenido"></span></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
    
<script>
export default {
  name: "CardMessage",
  props: {
    contenido: String,
    remitente: String
  },
};
</script>

<style>

a:hover {
  text-decoration: none;
}

.my-flip-inner-wrapper {
  perspective: 150rem;
  -moz-perspective: 150rem;
  position: relative;
}
.my-flip-side {
  display: block;
  height: 500px;
  top: 0;
  right: 0;
  left: 0;
  box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.15);
  transition: all 0.8s ease;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border-radius: 30px;
}

.my-flip-back {
  transform: rotateY(180deg);
  color: #fff;
  position: absolute;
  z-index: -1;
  box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.15);
  padding: 46px;
  border-radius: 30px;
}

.my-flip-back-1 {
  background: linear-gradient(to right bottom, #5b3cc4, #ff7730);
}

.my-flip-inner-wrapper:hover .my-flip-front {
  transform: rotateY(-180deg);
}

.my-flip-inner-wrapper:hover .my-flip-back {
  transform: rotateY(0);
}
.my-flip-color {
  height: 15rem;
  background-blend-mode: screen;
  clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
}
.my-flip-color col {
  width: 100%;
  height: 100%;
  background-blend-mode: screen;
  object-fit: cover;
}
.my-flip-heading {
  margin: 0 0 15px;
}
.my-flip-details {
  padding: 2rem;
}
.my-flip-details p {
  font-size: 15px;
  margin: 0;
  line-height: 2;
  color: #848484;
}
.my-flip-back-inner ul {
  list-style: none;
  margin: 0 0 1.5rem;
  padding: 0;
}
.my-flip-back-text ul li {
  text-align: center;
  color: #fff;
  font-size: 1rem;
  padding: 0.8rem 0;
}
.my-flip-back-inner ul li:not(:last-child) {
  border-bottom: 1px solid #ffffff;
}
.my-flip-Description {
  color: #fff;
  text-align: center;
  margin-bottom: 1rem;
}
.my-flip-Description h3 {
  font-size: 3rem;
  font-weight: 300;
}
.my-flip-btn {
  text-transform: uppercase;
  padding: 1rem 1.8rem;
  font-size: 1rem;
  background-color: #fff;
  color: #000;
  border-radius: 10rem;
  display: inline-block;
  transition: all 0.2s;
  color: initial;
  position: relative;
}
.my-flip-btn:hover {
  transform: translateY(-4px);
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
  color: #000;
}
.background-color-header {
  background: linear-gradient(to right bottom, rgb(36, 33, 69), #5b3cc4);
  width: 100%;
  border: 1px solid black;
  margin: 0px;
  padding: 0px !important;
  height: 100%;
  border-radius: 30px 30px 30px 5px;
}
</style>