<!-- form
TODO:
- need to connect with the drawer
- need to add it into the index, add directly into its child to make it show
-->
<template>

  <div class="overlayForm" v-bind:class="{formActive: formShow}">
    <div class="overlayForm-click" @click="toggleForm"></div>
    <div class="formBox">
      <!-- Login -->
      <transition name="fade" mode="out-in">
        <div class="formContent" v-if="login === true" key="login">
          <div>
            <h4 class="formHeader">Log in</h4>
            <!-- form fields -->
            <div class="floating-label">
              <input required class="full-width">
              <label>Username</label>
            </div>
            <div class="floating-label">
              <input required class="full-width">
              <label>Password</label>
            </div>
            <div class="form-btn-container">
              <button class="form-btn primary raised">Log In</button>
              <span class="formSwitch">Don't have an account? <a @click="login=false">Sign Up</a></span>
            </div>
          </div>
        </div>

        <!-- Sign Up -->
        <div class="formContent" v-else key="signup">
          <h4 class="formHeader">Sign Up</h4>
          <!-- form fields -->
          <div class="floating-label">
            <input required class="full-width">
            <label>Username</label>
          </div>
          <div class="floating-label">
            <input required class="full-width">
            <label>Password</label>
          </div>
          <div class="floating-label">
            <input required class="full-width">
            <label>Email</label>
          </div>
          <div class="form-btn-container">
            <button class="form-btn primary raised" @click="foo">Sign Up</button>
            <span class="formSwitch">Already have an account? <a @click="login=true">Log in</a></span>
          </div>
        </div>

      </transition>
    </div>

  </div>

</template>


<script>
/*
TODO:
  the form-btn
*/
export default{
  name: 'accForm',
  methods:
  {
    toggleForm: function () {
      this.login = true// true
      // document.getElementById('accountForm').style.opacity = '0'
      // document.getElementById('accountForm').style.display = 'none'
      this.formShow = !this.formShow
    },
    foo: function () {
      console.log('clicked')
    }
  },
  data: function () {
    return {
      login: true,
      formShow: false
    }
  }
}
</script>


<style>


.overlayForm
{
  background-color: rgba(12,23,40,0.7);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom:0;
  z-index:40;

  display: flex;
  align-items:     center;
  justify-content: center;

  opacity: 0;
  visibility: hidden;


}

.formActive
{

  visibility: visible;
  opacity: 1;
  transition: visibility 0s, opacity .3s ease;
}


.overlayForm-click
{
  position: fixed;
  top:    0;
  left:   0;
  right:  0;
  bottom: 0;

  z-index: 50;
}

/* for transition effect, vue thing */
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0
}

.formBox
{
  background-color: #F9F9F9;
  border-radius: 5px;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;

  position: fixed;
  z-index: 99;

  width: 400px;
  height: 420px;
  padding: 25px 25px 25px 25px;

}

.formContent
{
  padding: 0px 15px 0px 15px;
}

.form-btn
{
  width: 250px;
}

.formHeader
{
  text-align: center;
}

.form-btn-container
{
  margin-top: 20px;
  padding: 20px 5px 7px 5px;
  text-align: center;

  display: flex;
  flex-direction: column;
  align-items: center;
}

.formSwitch
{
  font-size: 12px;
  margin-top: 10px;
  padding: 15px 15px 15px 15px;

}

.formSwitch a:hover
{
  color: !important #122041 ;
  text-decoration: underline;
}
</style>
