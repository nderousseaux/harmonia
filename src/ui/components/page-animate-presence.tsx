'use client'

import { AnimatePresence, motion } from 'motion/react'
import { LayoutRouterContext } from 'next/dist/shared/lib/app-router-context.shared-runtime'
import { useContext, useRef } from 'react'
import { usePathname } from 'next/navigation'

export const FrozenRoute = ({ children }: { children: React.ReactNode }) => {
  const context = useContext(LayoutRouterContext)
  const frozen = useRef(context).current

  return <LayoutRouterContext.Provider value={frozen}>{children}</LayoutRouterContext.Provider>
}

export default function PageAnimatePresence(
  { children, disableINotfMobile }: { children: React.ReactNode; disableINotfMobile?: boolean }
) {
  disableINotfMobile = disableINotfMobile ?? false;
  const pathname = usePathname()
  const isMobile = window.matchMedia('(max-width: 1024px)').matches;

  if (disableINotfMobile && !isMobile) {
    return <>{children}</>
  }

  return (
    <AnimatePresence mode="wait">
      {/**
       * We use `motion.div` as the first child of `<AnimatePresence />` Component so we can specify page animations at the page level.
       * The `motion.div` Component gets re-evaluated when the `key` prop updates, triggering the animation's lifecycles.
       * During this re-evaluation, the `<FrozenRoute />` Component also gets updated with the new route components.
       */}
      <motion.div 
        key={pathname}
        initial={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        transition={{ duration: 1 }}
      >
        {/* {children} */}
        <FrozenRoute>{children}</FrozenRoute>
      </motion.div>
    </AnimatePresence>
  )
}