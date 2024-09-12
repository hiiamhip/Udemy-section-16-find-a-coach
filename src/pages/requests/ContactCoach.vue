<template>
  <base-card>
    <div>
      <h2>{{ coachName }}</h2>
      <h3>${{ coachRate }}/hour</h3>
    </div>
  </base-card>
  <base-card>
    <form @submit.prevent="submitForm">
      <div class="form-control">
        <label for="email">Your E-mail</label>
        <input type="email" id="email" v-model.trim="email" />
      </div>
      <div class="form-control">
        <label for="message">Message</label>
        <textarea rows="5" id="message" v-model.trim="message"></textarea>
      </div>
      <p class="errors" v-if="!formIsValid">
        Please enter a valid email and non-empty message.
      </p>
      <div class="action">
        <base-button>Send message</base-button>
      </div>
    </form>
  </base-card>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      currentCoach: null,
      email: '',
      message: '',
      formIsValid: true,
    };
  },
  computed: {
    coachName() {
      return this.currentCoach.firstName + ' ' + this.currentCoach.lastName;
    },
    coachRate() {
      return this.currentCoach.hourlyRate;
    },
  },
  methods: {
    // log() {
    //   console.log(this.$store.getter['requests/']);
    // },
    submitForm() {
      this.formIsValid = true;
      if (
        this.email === '' ||
        !this.email.includes('@') ||
        this.message === ''
      ) {
        this.formIsValid = false;
        return;
      }
      this.$store.dispatch('requests/contactCoach', {
        email: this.email,
        message: this.message,
        coachId: this.currentCoach.id,
      });
      this.$router.replace('/coaches');
    },
  },
  created() {
    const coach = this.$store.getters['coaches/coaches'].find(
      (coach) => coach.id === this.id
    );
    this.currentCoach = coach;
  },
};
</script>

<style scoped>
form {
  margin: 1rem;
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 1rem;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}

input:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}

.errors {
  font-weight: bold;
  color: red;
}

.actions {
  text-align: center;
}
</style>
