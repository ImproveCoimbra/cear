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
            <path d="M28,8.93l-5.3,5.76a3.72,3.72,0,0,1-4.78.25.54.54,0,0,0-.7.08L6,27.52A1.59,1.59,0,0,1,5,28a.86.86,0,0,1-1-1,1.61,1.61,0,0,1,.48-.94L17,14.76a.52.52,0,0,0,.07-.7,3.7,3.7,0,0,1,.24-4.87L23.19,4l.28.28L18.26,9.37a1.3,1.3,0,1,0,1.82,1.86h0l5.19-5.06.63.64-5.18,5.07a1.22,1.22,0,0,0-.37.88,1.31,1.31,0,0,0,2.2,1l5.17-5.06Z"/>
        </g>
    </g>
  </motion.svg>
)
