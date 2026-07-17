function euro(v) {
  return "€ " + v.toLocaleString("it-IT");
}

function perc(v) {
  if (v === null) return "—";
  const s = v > 0 ? "+" : "";
  return s + v.toFixed(2) + "%";
}

function loadJSON(callback) {
  fetch("portafoglio.json")
    .then(r => r.json())
    .then(callback);
}
