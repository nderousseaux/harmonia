"use client";
import Link, { LinkProps } from "next/link";
import React from "react";
import { useRouter } from "next/navigation";

interface TLinkProps extends LinkProps {
  children: React.ReactNode;
  href: string;
  className?: string;
  time?: number;
  classTransition?: string;
  elementTransition?: string;
}


function sleep(ms: number): Promise<void> {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

export const TLink: React.FC<TLinkProps> = ({
  children,
  href,
  className,
  time = 1000,
  classTransition = 'animate-disappear',
  elementTransition = 'body > div',
  ...props
}) => {
  const router = useRouter();

  const handleTransition = async (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();

    // Select first div under body
    const div = document.querySelector(elementTransition);
    if (!div) {
      router.push(href);
      return;
    }
    
    // Add a class to body
    div.classList.add(classTransition);

    // Wait for the transition to finish
    await sleep(time);

    await router.push(href);

    // Remove the class from body
    div.classList.remove(classTransition);
  };

  return (
    <Link {...props} href={href} onClick={handleTransition} className={className}>
      {children}
    </Link>
  );
};