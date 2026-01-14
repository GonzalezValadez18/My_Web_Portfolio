function ProgressBar({ energyLabel, energyPercent, energyColor }) {
  return (
    <div className="energy-container">
      <div className="energy-header">
        <span className="label">{energyLabel}</span>
        <span className="percent" style={{color: energyColor}}>{energyPercent} / 100</span>
      </div>

      <div className="energy-bar">
        <div
          className="energy-fill"
          style={{ width: `${energyPercent}%`, background: energyColor }}
        ></div>
      </div>
    </div>
  );
}

export default ProgressBar;
