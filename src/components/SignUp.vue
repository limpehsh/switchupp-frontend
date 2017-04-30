<template>
  <div>
    <div class="layout-padding">
      <q-dialog-select type="radio" v-model="select" :options="selectOptions" ok-label="Pick" cancel-label="Neah" title="Radios"></q-dialog-select>
      <div class="Header">
        <h1>Sign Up</h1>
      </div>

        <div class="foamContainer">
          <form method="post">
            <div class="card bg-grey-2">
              <!-- Username -->
              <div class="floating-label">
                <input v-model.trim="username" required class="full-width">
                <label>Username</label>
              </div>
              <!-- Password -->
              <div class="floating-label">
                <input v-model.trim="password" required class="full-width">
                <label>Password</label>
              </div>
              <!-- Email -->
              <div class="floating-label">
                <input v-model.trim="email" required class="full-width">
                <label>Email</label>
              </div>
            </div>
            <!-- Sign Up Button -->
            <button type="submit" class="pink full-width">Sign Up</button>
          </form>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      select: 'fb',
      multipleSelect: ['goog', 'twtr'],
      selectOptions: [
        {
          label: 'Google',
          value: 'goog'
        },
        {
          label: 'Facebook',
          value: 'fb'
        },
        {
          label: 'Twitter',
          value: 'twtr'
        },
        {
          label: 'Apple Inc.',
          value: 'appl'
        },
        {
          label: 'Oracle',
          value: 'ora'
        }
      ]
    }
  }
}
</script>

<style>
.content
{
  display:flex;
  flex-direction: column;
  align-items: center;

}

.formContainer
{
  /* for beautifying the box */
  background-color: #F6F6F6;
  padding: 20px 50px 20px 50px;
  -webkit-box-shadow: 1px 1px 6px 0.5px rgba(194,194,194,1);
  -moz-box-shadow: 1px 1px 6px 0.5px rgba(194,194,194,1);
  box-shadow: 1px 1px 6px 0.5px rgba(194,194,194,1);

  display:flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 25vw;
  height: 35vh;
}

.btnContainer
{
  display: flex;
  align-items: center;
  justify-content: center;
  margin:12px;
}
</style>
