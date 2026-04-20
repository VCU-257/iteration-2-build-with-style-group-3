document.addEventListener('DOMContentLoaded', () => {
    const searchAddressInputElement = document.getElementById("searchAddress");
    let typingTimer;
    const doneTypingInterval = 800;

    // listen for inputted address entered/finished
    searchAddressInputElement.addEventListener('keyup', (event) => {
        clearTimeout(typingTimer);

        // pressed Enter
        if (event.key == 'Enter') {
            // input NOT empty
            if (searchAddressInputElement.value.trim() !== "") {
                searchForRepresentatives(searchAddressInputElement.value);
            }
        }
        // stopped typing
      //excluded for now
        /* else {
            typingTimer = setTimeout(() => {
            // input NOT empty
                if (searchAddressInputElement.value.trim() !== "") {
                    searchForRepresentatives(searchAddressInputElement.value);
                }
            }, doneTypingInterval);
        } */
    });

    // in case user starts typing again quickly
    searchAddressInputElement.addEventListener('keydown', () => {
        clearTimeout(typingTimer);
    });

    // In the final product, this would search through the representatives.
    // For this example product, it just sends the user to the list of
    // representatives.
    function searchForRepresentatives(searchParameters) {
        window.location.href="representatives_list.html";
    }
});