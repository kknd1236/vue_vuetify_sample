<template>
  <v-container fill-height style="max-width:450px;">
    <v-layout align-center wrap>
      <v-flex xs12>
        <v-card>
          <v-toolbar flat>
            <v-toolbar-title>로그인</v-toolbar-title>
          </v-toolbar>
          <div class="pa-3">
            <v-text-field v-model="email" label="이메일"></v-text-field>
            <v-text-field
              :type="'password'"
              v-model="password"
              label="비밀번호"
            ></v-text-field>
          </div>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      email: null,
      password: null
    };
  }
};
</script>

<style lang="scss" scoped></style>
