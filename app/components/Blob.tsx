"use client";

import { useEffect, useRef, useState } from "react";


export default function Blob() {
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const el = ref.current;
		if (!el) return;

		const target = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
		const current = { ...target };
		let raf = 0;
		let running = false;

		const SMOOTHING = 0.5; // higher = snappier, lower = floatier

		const tick = (now: number) => {
			const dt = Math.min((now - last) / 1000, 0.05);
			last = now;
			const t = 1 - Math.exp(-SMOOTHING * 60 * dt * 0.2);

			current.x += (target.x - current.x) * t;
			current.y += (target.y - current.y) * t;

			el.style.transform = `translate3d(${current.x}px, ${current.y}px, 0) translate(-50%, -50%)`;

			// stop the loop once we've settled
			if (
				Math.abs(target.x - current.x) < 0.1 &&
				Math.abs(target.y - current.y) < 0.1
			) {
				running = false;
				return;
			}
			raf = requestAnimationFrame(tick);
		};

		let last = performance.now();

		const handlePointerMove = (e: PointerEvent) => {
			target.x = e.clientX;
			target.y = e.clientY;
			if (!running) {
				running = true;
				last = performance.now();
				raf = requestAnimationFrame(tick);
			}
		};

		window.addEventListener("pointermove", handlePointerMove);
		return () => {
			window.removeEventListener("pointermove", handlePointerMove);
			cancelAnimationFrame(raf);
		};
	}, []);

	return (
		<div
			ref={ref}
			aria-hidden="true"
            className="blob"
			style={{
				position: "fixed",
				left: 0,
				top: 0,
                width: 500,
                height: 500,
				pointerEvents: "none",
				willChange: "transform",
				zIndex: -1,
			}}
		/>
	);
}
