<template>
  <b-container class="bv-example-row">
    <h2>Auth</h2>
    <b-row>
      <b-col cols="6">
        <b-form-group horizontal
                      :label-cols="2"
                      label="Login"
                      label-for="Login">
          <b-form-input id="Login"></b-form-input>
        </b-form-group>
       </b-col>
        <b-col cols="6">
          <b-form-group horizontal
                        :label-cols="2"
                        label="Password"
                        label-for="Password">
            <b-form-input id="Password"></b-form-input>
          </b-form-group>
        </b-col>
    </b-row>
  </b-container>
</template>
