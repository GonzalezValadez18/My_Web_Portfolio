import { useEffect, useState, useRef } from "react";

function SkillBar({
  value,
  size = 150,
  stroke = 10,
  label,
  position = "right",
  tooltip,
  isActive,
  onClick,
}) {
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const cardRef = useRef(null);

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 800;
    const stepTime = 16;
    const step = value / (duration / stepTime);

    const timer = setInterval(() => {
      start += step;
      if (start >= value) {
        start = value;
        clearInterval(timer);
      }
      setProgress(start);
    }, stepTime);

    return () => clearInterval(timer);
  }, [value]);

  useEffect(() => {
    if (isActive && window.innerWidth <= 768) {
      setTimeout(() => {
        cardRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }, 300);
    }
  }, [isActive]);

  const offset = circumference - (progress / 100) * circumference;

  return (
    <div
      ref={cardRef}
      className={`skill-card ${position} ${isActive ? "active" : ""}`}
      onClick={onClick}
    >
      <svg width={size} height={size} className="skill-svg">
        <defs>
          <linearGradient id="skillGradient">
            <stop offset="0%" stopColor="#01e9ca" />
            <stop offset="100%" stopColor="#099b87" />
          </linearGradient>
        </defs>

        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#eee"
          strokeWidth={stroke}
          fill="none"
        />

        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="url(#skillGradient)"
          strokeWidth={stroke}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          style={{ transition: "stroke-dashoffset .3s" }}
        />

        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          className="skill-value"
        >
          {Math.round(progress)}%
        </text>
      </svg>

      {label && <span className="skill-label">{label}</span>}
      {tooltip && <div className="skill-tooltip">{tooltip}</div>}
    </div>
  );
}

export default SkillBar;
