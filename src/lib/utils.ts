import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import ScrollReveal from 'scrollreveal';


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const initScrollReveal = (elements: { element: any; animation: any; }[], options = {}) => {
  elements.forEach(({ element, animation }) => {
    ScrollReveal().reveal(element, { ...options, ...animation });
  });
};
