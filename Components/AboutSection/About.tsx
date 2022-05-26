
import { animated, useSpring } from 'react-spring'
import { useInView } from 'react-intersection-observer'

export default function About(){
  const {ref, inView} = useInView({
    threshold: 20
  })
  return <></>


}