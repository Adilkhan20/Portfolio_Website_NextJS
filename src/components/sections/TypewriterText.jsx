"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function TypewriterText() {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const phrases = [
    "digital products",
    "scalable applications",
    "modern interfaces",
    "powerful backends",
    "responsive websites",
  ];

  useEffect(() => {
    const handleTyping = () => {
      const currentPhrase = phrases[loopNum % phrases.length];
      const fullText = currentPhrase;

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1),
      );

      setTypingSpeed(isDeleting ? 40 : 90);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(300);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  // Longest phrase length calculate karo space reserve karne ke liye
  const longestPhrase = phrases.reduce(
    (a, b) => (a.length > b.length ? a : b),
    "",
  );

  return (
    <span className="relative inline-block">
      {/* Invisible text for space reservation */}
      <span className="invisible" aria-hidden="true">
        {longestPhrase}
      </span>

      {/* Actual typewriter text */}
      <span className="absolute left-0 top-0 bg-gradient-to-r from-teal-300 to-blue-400 bg-clip-text text-transparent whitespace-nowrap">
        {text}
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{
            duration: 0.4,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="inline-block w-[3px] h-[0.8em] bg-teal-300 ml-1 align-middle"
        />
      </span>
    </span>
  );
}
