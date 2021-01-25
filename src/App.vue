<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700&display=swap");

* {
  font-family: "Rubik", sans-serif;
}

.button {
  font-size: 16px;
  font-weight: 500;
  border-radius: 70px;
  outline: unset !important;
  padding: 12px 0;
  transition-duration: 0.6s;
}

.btn-blue {
  border: unset;
  background-color: #7e98df;
  color: #fff;
}

.btn-blue:hover {
  background-color: #5678d8;
  -webkit-box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.34);
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.34);
}

.btn-white {
  background-color: #fff;
  color: #7e98df;
  border: 1px solid #7e98df;
}

.btn-white:hover {
  background-color: #fff;
  border: 1px solid #7e98df;
  color: #557adf;
  -webkit-box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.34);
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.34);
}

.text-header-blue {
  font-weight: 500;
  font-size: 22px;
  color: #7e98df;
}

.input-border-bot {
  border-top: unset;
  border-right: unset;
  border-left: unset;
  border-bottom: 1px solid #232323;
  padding-bottom: 4px;
  outline: unset;
  transition-duration: 0.8s;
  font-size: 16px;
  font-weight: 500;
  line-height: 30px;
  color: #232323;
}

.input-border-bot:focus {
  border-bottom: 1px solid #557adf;
  box-shadow: 0px 1px #557adf;
}

.text {
  font-weight: 400;
  font-size: 14px;
}

.text-black {
  color: #232323;
}

.text-grey {
  color: #848484;
}

.text-blue {
  color: #7e98df;
}

a {
  text-decoration: unset !important;
}

input {
  outline: unset;
}

button {
  outline: unset;
}

.modal-backdrop {
  opacity: 0.5 !important;
}

.pointer {
  cursor: pointer;
}

/* width */
::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #d1d1d1;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: rgb(177, 177, 177);
}
</style>
