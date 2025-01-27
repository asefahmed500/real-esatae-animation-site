"use client"
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

/**
 * Custom hook to animate an element in a specified direction.
 * @param {string} direction - The animation direction: "left", "right", "up", or "down".
 * @param {number} duration - The duration of the animation in seconds.
 * @param {number} delay - The delay before the animation starts in seconds.
 * @returns {React.RefObject} - A ref to attach to the element you want to animate.
 */
const useAnimation = (direction = "left", duration = 1, delay = 0) => {
    const elementRef = useRef(null);

    useEffect(() => {
        const element = elementRef.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // Set initial position based on direction
                        switch (direction) {
                            case "left":
                                gsap.set(element, { x: "-100%" });
                                break;
                            case "right":
                                gsap.set(element, { x: "100%" });
                                break;
                            case "up":
                                gsap.set(element, { y: "100%" });
                                break;
                            case "down":
                                gsap.set(element, { y: "-100%" });
                                break;
                            default:
                                break;
                        }

                        // Animate to the final position
                        gsap.to(element, {
                            x: 0,
                            y: 0,
                            duration,
                            delay,
                            ease: "power2.out",
                        });

                        // Unobserve the element after the animation to prevent re-triggering
                        observer.unobserve(element);
                    }
                });
            },
            {
                threshold: 0.1, // Trigger when 10% of the element is visible
            }
        );

        observer.observe(element);

        return () => {
            observer.unobserve(element);
        };
    }, [direction, duration, delay]);

    return elementRef;
};

export default useAnimation;