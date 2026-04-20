// Prototype: while the user types an address, show static placeholder suggestions.
// Each row links to the representatives list page (no real geocoding).

document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("searchAddress");
  const wrap = document.getElementById("searchAddressWrap");
  if (!input || !wrap) return;

  const listPage = "representatives_list.html";
  const placeholders = [
    "123 W Broad St, Richmond, VA 23220",
    "456 Maple Ave, Fairfax, VA 22030",
    "789 Wilson Blvd, Arlington, VA 22209",
    "100 E Franklin St, Richmond, VA 23219",
  ];

  const dropdown = document.createElement("div");
  dropdown.id = "searchAddressDropdown";
  dropdown.className =
    "list-group position-absolute w-100 bg-white shadow rounded border mt-1";
  // Sit below the input; high z-index so it appears above the map and panels.
  dropdown.style.cssText = "top:100%;left:0;z-index:1050;display:none;";
  dropdown.setAttribute("role", "listbox");
  wrap.appendChild(dropdown);

  function render() {
    dropdown.innerHTML = "";
    placeholders.forEach((label) => {
      const a = document.createElement("a");
      a.href = listPage;
      a.className = "list-group-item list-group-item-action py-2 small text-dark";
      a.textContent = label;
      a.setAttribute("role", "option");
      dropdown.appendChild(a);
    });
  }

  function show() {
    if (!input.value.trim()) {
      dropdown.style.display = "none";
      return;
    }
    render();
    dropdown.style.display = "block";
  }

  function hide() {
    dropdown.style.display = "none";
  }

  input.addEventListener("input", show);
  input.addEventListener("focus", show);
  // Delay hiding on blur so a mousedown/click on a suggestion still fires before the panel disappears.
  input.addEventListener("blur", () => {
    setTimeout(hide, 200);
  });

  document.addEventListener("click", (e) => {
    if (!wrap.contains(e.target)) hide();
  });
});
