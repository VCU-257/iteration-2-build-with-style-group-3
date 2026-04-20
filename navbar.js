document.addEventListener("DOMContentLoaded", function () {
    const navbarHTML = `
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary" style="font-family:'Montserrat'">
      <div class="container-fluid">
        <a class="navbar-brand text-light p-0 fs-4" href="/index.html"><i class="bi bi-house"></i></a>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav mx-auto d-flex align-items-center">
            <li class="nav-item">
              <a
                class="nav-link border rounded text-light"
                href="/find_my_representatives.html"
                >Find My Representatives</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link disabled border rounded text-light" href="#"
                >News</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link disabled border rounded text-light" href="#"
                >Glossary & Participation</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link disabled border rounded text-light" href="#"
                >Account & Notifications</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link disabled border rounded text-light" href="#"
                >Account Icon</a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
    `;

    document.getElementById("navbar-container").innerHTML = navbarHTML;
});