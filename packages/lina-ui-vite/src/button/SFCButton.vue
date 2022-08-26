<template>
  <button
    :class="`
          py-${sizes[size].y}
          px-${sizes[size].x}
          text-${sizes[size].text}
          text-${plain ? color + '-500' : 'white'}
          border-${color}-${plain ? '500' : '500'}
          bg-${color}-${plain ? '100' : '500'}
          hover:bg-${color}-700 
          ${round ? 'rounded-full' : 'rounded-lg'}
          hover:text-white
          transition duration-300 ease-in-out transform hover:scale-105
          mr-2
          ml-2
          font-semibold 
          border-solid
          cursor-pointer `"
  >
    <i v-if="icon" :class="`i-ic-baseline-${icon} p-3`"></i>
    <slot></slot>
  </button>
</template>

<script lang="ts" setup>
import { PropType } from "vue";
import "uno.css";
//颜色
export type IColor =
  | "black"
  | "gray"
  | "red"
  | "yellow"
  | "green"
  | "blue"
  | "indigo"
  | "purple"
  | "pink";
//大小三种
export type ISize = "small" | "medium" | "large";
defineProps({
  size: {
    type: String as PropType<ISize>,
    default: "medium",
  },
  color: {
    type: String as PropType<IColor>,
    default: "blue", // 设定默认颜色
  },
  plain: {
    type: Boolean,
    default: false,
  },
  round: {
    type: Boolean,
    default: false,
  },
  icon: {
    type: String,
    default: "",
  },
});
const sizes = {
  small: {
    x: "2",
    y: "1",
    text: "sm",
  },
  medium: {
    x: "2.5",
    y: "1.5",
    text: "base",
  },
  large: {
    x: "3.5",
    y: "2",
    text: "lg",
  },
};
</script>
