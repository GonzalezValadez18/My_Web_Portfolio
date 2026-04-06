import { useEffect, useState } from "react";
import { Icon, loadIcon } from "@iconify/react";

function Logo({ name }) {
  const [icon, setIcon] = useState(null);
  const [loading, setLoading] = useState(true);

  const normalizedName = name.toLowerCase().trim();

  const iconAliases = {
    js: "javascript",
    ts: "typescript",
    github: "github",
    git: "git",
    html: "html5",
    css: "css3",
    node: "nodedotjs",
    "node.js": "nodedotjs",
    express: "express",
    mongodb: "mongodb",
    mysql: "mysql",
    postgresql: "postgresql",
    java: "java",
    spring: "spring",
    "spring boot": "springboot",
    react: "react",
    vite: "vite",
    bootstrap: "bootstrap",
    tailwind: "tailwindcss",
    "tailwind css": "tailwindcss",
    firebase: "firebase",
    docker: "docker",
    linux: "linux",
    figma: "figma",
  };

  const iconName =
    iconAliases[normalizedName] || normalizedName.replace(/\s+/g, "");

  useEffect(() => {
    let cancelled = false;

    const candidates = [
      `fa-brands:${iconName}`,
      `carbono:${iconName}`,
      `simple-icons:${iconName}`,
    ];

    async function resolveIcon() {
      setLoading(true);
      setIcon(null);

      for (const candidate of candidates) {
        try {
          await loadIcon(candidate);
          if (!cancelled) {
            setIcon(candidate);
            setLoading(false);
          }
          return;
        } catch (error) {
          // sigue al siguiente fallback
        }
      }

      if (!cancelled) {
        setIcon(null);
        setLoading(false);
      }
    }

    resolveIcon();

    return () => {
      cancelled = true;
    };
  }, [iconName]);

  return (
    <div className={`tool ${!icon && !loading ? "tool--tag" : ""}`}>
      <span className="tool__tooltip">{name}</span>

      {loading ? null : icon ? (
        <Icon icon={icon} width="24" height="24" />
      ) : (
        <span className="tag-fallback">{name.toUpperCase()}</span>
      )}
    </div>
  );
}

export default Logo;
