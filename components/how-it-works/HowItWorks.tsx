// components/how-it-works/HowItWorks.tsx
"use client";

import { useState, useEffect, useRef } from "react";
import { StepNavigation } from "./StepNavigation";
import { StepContent } from "./StepContent";
import { steps } from "./data";

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-advance steps
  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setActiveStep((prev) => (prev + 1) % steps.length);
      }, 5000);
    }
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPaused]);

  const pauseAnimation = () => setIsPaused(true);
  const resumeAnimation = () => setIsPaused(false);

  const goToStep = (index: number) => {
    setActiveStep(index);
    pauseAnimation();
  };

  const goToPrevStep = () => {
    setActiveStep((prev) => (prev - 1 + steps.length) % steps.length);
    pauseAnimation();
  };

  const goToNextStep = () => {
    setActiveStep((prev) => (prev + 1) % steps.length);
    pauseAnimation();
  };

  return (
    <section
      className="py-20 bg-background"
      aria-labelledby="how-it-works-title"
      onMouseEnter={pauseAnimation}
      onMouseLeave={resumeAnimation}
      onFocus={pauseAnimation}
      onBlur={resumeAnimation}
    >
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#011829] mb-4">
            How It Works
          </h2>
          <p className="text-lg text-[#030F1C] max-w-2xl mx-auto">
            Our simple five-step process turns your conviction into an
            autonomous agent.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr_2fr] gap-8 items-center">
          <StepNavigation
            steps={steps}
            activeStep={activeStep}
            goToStep={goToStep}
          />

          <StepContent
            steps={steps}
            activeStep={activeStep}
            goToPrevStep={goToPrevStep}
            goToNextStep={goToNextStep}
          />
        </div>

        <div className="flex justify-center gap-2 mt-6 lg:hidden">
          {steps.map((_, index) => (
            <button
              key={index}
              onClick={() => goToStep(index)}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                activeStep === index
                  ? "bg-primary"
                  : "bg-muted hover:bg-primary/50"
              }`}
              aria-label={`Go to step ${index + 1}`}
              aria-current={activeStep === index ? "step" : undefined}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
