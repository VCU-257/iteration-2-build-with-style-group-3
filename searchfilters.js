// Remember each card's position in the original DOM order so "Default" sort can restore it after name/party sorts.
function snapshotRepListOrder() {
  const row = document.getElementById("repList");
  [...row.children].forEach((el, i) => {
    el.dataset.i = String(i);
  });
}

snapshotRepListOrder();
// Exposed for pages that load or replace the list later (e.g. after fetch); call again when #repList children change.
window.snapshotRepListOrder = snapshotRepListOrder;

document.getElementById("repSort").addEventListener("change", function () {
  const row = document.getElementById("repList");
  const items = [...row.children];

  const byName = (a, b) => a.dataset.name.localeCompare(b.dataset.name);
  const byI = (a, b) => +a.dataset.i - +b.dataset.i;
  const byParty = (dFirst) => (a, b) => {
    const x = a.dataset.party,
      y = b.dataset.party;
    if (x === y) return byName(a, b);
    if (dFirst) return x === "D" ? -1 : 1;
    return x === "R" ? -1 : 1;
  };

  const v = this.value;
  if (v === "default") items.sort(byI);
  else if (v === "nameAsc") items.sort(byName);
  else if (v === "nameDesc") items.sort((a, b) => byName(b, a));
  else if (v === "partyD") items.sort(byParty(true));
  else items.sort(byParty(false));

  // Re-append in sorted order (moves nodes in the DOM; no duplicate elements).
  items.forEach((el) => row.appendChild(el));
});
