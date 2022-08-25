/* eslint-disable prettier/prettier */
import { defineComponent, PropType } from "vue";
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
//大小1
export type ISize = "small" | "medium" | "large";
//边框颜色
export type borderColor = "red" | "green" ;
export const props = {
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
} as const;

export default defineComponent({
  name: "LButton",
  props,
  setup(props, { slots }) {
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
    return () => (
      <button
        class={`
        py-${sizes[props.size].y}
        px-${sizes[props.size].x}
        text-${sizes[props.size].text}
        text-${props.plain ? props.color + "-500" : "white"}
        border-${props.color}-${props.plain ? "500" : "500"}
        bg-${props.color}-${props.plain ? "100" : "500"} 
        hover:bg-${props.color}-700 
        ${props.round ? "rounded-full" : "rounded-lg"}
        hover:text-white
        transition duration-300 ease-in-out transform hover:scale-105
        mr-2
        ml-2
        font-semibold 
        border-solid
        cursor-pointer `}
      >
        {props.icon !== "" ? (
          <i class={`i-ic-baseline-${props.icon} p-3`}></i>
        ) : (
          ""
        )}
        {slots.default ? slots.default() : ""}
      </button>
    );
  },
});
