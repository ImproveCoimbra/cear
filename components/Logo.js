import { motion } from 'framer-motion'

export default ({ isHovered, ...props }) => (
  <motion.svg
    xmlns="http://www.w3.org/2000/svg"
    width="26"
    height="26"
    viewBox="0 0 32 32"
    animate={isHovered ? { rotate: '-15deg' } : { rotate: '0deg' }}
    {...props}
  >
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="iconfinder___restaurant_food_expense_fork_3668842" fill="#FF5470" fill-rule="nonzero">
            <path d="M14.3,9.2 C14.3,8.1 13.8,7 13,6.2 L6.8,0.5 C6.5,0.2 6,0.2 5.7,0.5 C5.4,0.8 5.4,1.3 5.7,1.6 L10.4,7 C10.4,7 10.4,7 10.4,7 C10.6,7.2 10.6,7.6 10.4,7.9 C10.2,8.1 9.8,8.1 9.5,7.9 L4.1,3.1 C3.8,2.8 3.3,2.8 3,3.1 C2.7,3.4 2.7,3.9 3,4.2 L7.8,9.7 C8,9.9 8,10.3 7.8,10.6 C7.6,10.8 7.2,10.8 6.9,10.6 L1.5,5.8 C1.2,5.5 0.7,5.5 0.4,5.8 C0.1,6.1 0.1,6.6 0.4,6.9 L6,13.1 C6.8,14 8,14.5 9.2,14.4 L10.8,14.3 C11.4,14.3 12,14.5 12.4,15 L21.2,24.9 C22.2,26.1 24,26.1 25.1,25 C26.2,23.9 26.1,22.1 25,21.1 L15,12.2 C14.6,11.8 14.3,11.3 14.3,10.7 L14.3,9.2 Z" id="Shape"></path>
        </g>
    </g>
  </motion.svg>
)
