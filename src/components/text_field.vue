<template>
  <div class="text-field" :class="textFieldClass" :style="isFocused">
    <input ref="input" :name="name" :type="type" :value="inputValue" :disabled="disabled" @change="handleChange" @focus="handleFocus" @input="handleInput" @blur="handleBlur" class="text-input" :class="inputClass" :placeholder="placeholder" />
  </div>
</template>
<script>

  export default {
    data () {
      return {
        isFocused: false,
        inputValue: this.value
      }
    },
    name: 'TextField',
    props: {
      name: {
        type: String
      },
      type: {
        type: String
      },
      placeholder: {
        type: String
      },
      value: {},
      inputClass: {
        type: [String, Array, Object]
      },
      disabled: {
        type: Boolean,
        default: false
      }
    },
    components: {
      textFieldClass () {
        return {
          'no-empty-state': this.inputValue,
          'disabled': this.disabled
        }
      },
      float () {
        return !this.isFocused && !this.inputValue && this.inputValue !== 0
      }
    },
    methods: {
      handleInput (val) {
        this.inputValue = val.target ? val.target.value : val
      },
      handleChange (e) {
        this.$emit('change', e, e.target.value)
      },
      handleFocus (e) {
        this.isFocused = true
        this.$emit('focus', e)
      },
      handleBlur (e) {
        this.isFocused = false
        if (this.type === 'number' && !this.inputValue && this.inputValue !== 0 && this.$refs.input) {
          this.$refs.input.value = ''
        }
        this.$emit('blur', e)
      },
      focus () {
        const input = this.$refs
        if (input) {
          input.focus()
        }
      }
    },
    computed: {},
    mounted () {},
    watch: {
      value (val) {
        this.inputValue = val
        console.log(inputValue)
      },
      inputValue (val, oldVal) {
        this.$emit('input', val)
      }
    }
  }
</script>
<style scoped lang="scss" rel="stylesheet/scss">
.text-field {
  display: flex;
  position: relative;
  margin: 0;
  width: 195px;
  height: 30px;
  background: #F5F5F5; 
  border-radius: 15px;
  resize:both;
  border: none;
  outline: none;

  .text-input {
    position: relative;
    padding: 0;
    margin: 0;
    width: 100%;
    line-height: 12px;
    border: none;
    font-size: 12px;
    font-family: MicrosoftYaHei;
    color: #808080;
    background: #F5F5F5;
    border-radius: 15px;
    padding-left: 15px;
    resize: both;
    outline: none;
  }
}
</style>
