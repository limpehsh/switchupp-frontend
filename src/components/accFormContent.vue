<template >
  <transition name="fade" mode="out-in" >
    <div v-if="login === true" key="login" class="formContent">
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
        <span class="formSwitch">Don't have an account? <a @click="toggleType">Sign Up</a></span>
      </div>
    </div>

    <div v-else key="signup" class="formContent" >
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
        <button class="form-btn primary raised">Sign Up</button>
        <span class="formSwitch">Already have an account? <a @click="toggleType">Log in</a></span>
      </div>
    </div>
  </transition>
</template>


<script>
export default {
  name: 'accFormContent',

  methods:
  {
    toggleType: function () {
      this.login = !this.login
    }
  },

  data: function () {
    return {
      login: true
    }
  }
}
</script>

<style>
/* for transition effect, vue thing */
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0
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
