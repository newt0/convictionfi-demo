"use client";

import { cn } from "@/lib/utils";
import { Step } from "./types";

interface StepNavigationProps {
  steps: Step[];
  activeStep: number;
  goToStep: (index: number) => void;
}

export function StepNavigation({
  steps,
  activeStep,
  goToStep,
}: StepNavigationProps) {
  return (
    <nav
      className="flex flex-col gap-8 max-w-xs mx-auto lg:mx-0"
      aria-label="Process steps"
    >
      {steps.map((step, index) => (
        <div key={step.id} className="relative flex gap-4 group">
          {/* 丸 + 線 */}
          <div className="relative flex flex-col items-center">
            {/* 縦線 - 上 */}
            {index > 0 && (
              <div className="w-0.5 bg-muted absolute top-0 h-1/2" />
            )}

            {/* 丸 */}
            <div
              className={cn(
                "z-10 flex h-12 w-12 items-center justify-center rounded-full border-2",
                "transition-colors duration-300",
                activeStep === index
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-muted bg-background text-muted-foreground"
              )}
            >
              <span className="text-lg font-medium">{step.id}</span>
            </div>

            {/* 縦線 - 下 */}
            {index < steps.length - 1 && (
              <div className="w-0.5 bg-muted flex-1" />
            )}
          </div>

          {/* テキスト */}
          <button
            onClick={() => goToStep(index)}
            className={cn(
              "text-left flex-1 transition-all duration-300 group",
              "focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
              activeStep === index
                ? "opacity-100"
                : "opacity-60 hover:opacity-80"
            )}
            aria-current={activeStep === index ? "step" : undefined}
          >
            <h3
              className={cn(
                "text-lg font-semibold",
                activeStep === index
                  ? "text-foreground"
                  : "text-muted-foreground"
              )}
            >
              {step.title}
            </h3>
            <p className="text-sm text-muted-foreground mt-1 line-clamp-2 min-h-[2.5rem]">
              {step.subtitle}
            </p>
          </button>
        </div>
      ))}
    </nav>
  );
}
