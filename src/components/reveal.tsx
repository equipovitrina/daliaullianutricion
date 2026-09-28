"use client"

import { motion, useReducedMotion } from "motion/react"
import type { ReactNode } from "react"

const EASE_OUT = [0.23, 1, 0.32, 1] as const

/**
 * Scroll reveal for marketing sections. Fires once. Reduced motion keeps
 * the fade and drops the travel.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  as = "div",
}: {
  children: ReactNode
  className?: string
  delay?: number
  as?: "div" | "li" | "article"
}) {
  const reduce = useReducedMotion()
  const Tag = motion[as]
  return (
    <Tag
      className={className}
      initial={{
        opacity: 0,
        transform: reduce ? "translateY(0px)" : "translateY(20px)",
      }}
      whileInView={{ opacity: 1, transform: "translateY(0px)" }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: reduce ? 0.4 : 0.6, ease: EASE_OUT, delay }}
    >
      {children}
    </Tag>
  )
}
