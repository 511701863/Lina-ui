import Button from "../Button";

import { shallowMount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";

describe("Button", () => {
  test("mount  @vue/test-utils", () => {
    const wrapper = shallowMount(Button, {
      slots: {
        default: "Button",
      },
    });
    expect(wrapper.text()).toBe("Button");
  });
  //大小
  describe("size", () => {
    test("default", () => {
      const wrapper = shallowMount(Button, {
        slots: {
          default: "Button",
        },
      });
      expect(
        wrapper
          .classes()
          .map((v) => v.replace("\n", ""))
          .includes("py-1.5")
      ).toBe(true);
      expect(
        wrapper
          .classes()
          .map((v) => v.replace("\n", ""))
          .includes("px-2.5")
      ).toBe(true);
      expect(
        wrapper
          .classes()
          .map((v) => v.replace("\n", ""))
          .includes("text-base")
      ).toBe(true);
    });
    test("small", () => {
      const wrapper = shallowMount(Button, {
        slots: {
          default: "Button",
        },
        props: {
          size: "small",
        },
      });
      expect(
        wrapper
          .classes()
          .map((v) => v.replace("\n", ""))
          .includes("py-1")
      ).toBe(true);
      expect(
        wrapper
          .classes()
          .map((v) => v.replace("\n", ""))
          .includes("px-2")
      ).toBe(true);
      expect(
        wrapper
          .classes()
          .map((v) => v.replace("\n", ""))
          .includes("text-sm")
      ).toBe(true);
    });
    test("large", () => {
      const wrapper = shallowMount(Button, {
        slots: {
          default: "Button",
        },
        props: {
          size: "large",
        },
      });
      expect(
        wrapper
          .classes()
          .map((v) => v.replace("\n", ""))
          .includes("py-2")
      ).toBe(true);
      expect(
        wrapper
          .classes()
          .map((v) => v.replace("\n", ""))
          .includes("px-3.5")
      ).toBe(true);
      expect(
        wrapper
          .classes()
          .map((v) => v.replace("\n", ""))
          .includes("text-lg")
      ).toBe(true);
    });
  });
  //颜色
  describe("color", () => {
    test("default", () => {
      const wrapper = shallowMount(Button, {
        slots: {
          default: "Button",
        },
      });
      expect(
        wrapper
          .classes()
          .map((v) => v.replace("\n", ""))
          .includes("bg-blue-500")
      ).toBe(true);
    });
    test("red", () => {
      const wrapper = shallowMount(Button, {
        slots: {
          default: "Button",
        },
        props: {
          color: "red",
        },
      });
      expect(wrapper.classes().includes("bg-red-500")).toBe(true);
    });
  });
  //圆角1
  describe("round", () => {
    test("default", () => {
      const wrapper = shallowMount(Button, {
        slots: {
          default: "Button",
        },
      });

      expect(
        wrapper
          .classes()
          .map((v) => v.replace("\n", ""))
          .includes("rounded-lg")
      ).toBe(true);
    });

    test("round:true", () => {
      const wrapper = shallowMount(Button, {
        slots: {
          default: "Button",
        },
        props: {
          round: true,
        },
      });

      expect(
        wrapper
          .classes()
          .map((v) => v.replace("\n", ""))
          .includes("rounded-full")
      ).toBe(true);
    });
  });
  //透明
  describe("plain", () => {
    test("default", () => {
      const wrapper = shallowMount(Button, {
        slots: {
          default: "Button",
        },
      });

      expect(
        wrapper
          .classes()
          .map((v) => v.replace("\n", ""))
          .includes("bg-blue-500")
      ).toBe(true);
    });

    test("plain:true", () => {
      const wrapper = shallowMount(Button, {
        slots: {
          default: "Button",
        },
        props: {
          plain: true,
        },
      });

      expect(
        wrapper
          .classes()
          .map((v) => v.replace("\n", ""))
          .includes("bg-blue-100")
      ).toBe(true);
    });
  });
  //图标
  test("icon", () => {
    const wrapper = shallowMount(Button, {
      slots: {
        default: "Button",
      },
      props: {
        icon: "edit",
      },
    });

    expect(
      wrapper
        .find("i")
        .classes()
        .map((v) => v.replace("\n", ""))
        .includes("i-ic-baseline-edit")
    ).toBe(true);
  });
});
