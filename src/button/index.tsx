import {defineComponent,h} from 'vue'
import "uno.css";
export default defineComponent({
    name:"LButton",
    setup(props, {slots}) {
        return () => <button 
          class={`
          py-2 
          px-4 
          ml-2
          mr-1
          font-semibold 
          rounded-lg 
          shadow-md 
          text-white 
          bg-green-500 
          hover:bg-green-700 
          border-none 
          cursor-pointer 
          `}
            > 
            {slots.default ? slots.default() : ''}
         </button>
      }
})