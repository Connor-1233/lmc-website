document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");

    // Make every image clickable
    document.querySelectorAll("img").forEach(img => {
        img.addEventListener("click", (e) => {
            e.stopPropagation(); // Prevent card flip

            if (modal.classList.contains("hidden")) {
                // Open modal
                modalImg.src = img.src;
                modal.classList.remove("hidden");
                modal.classList.add("flex");
            } else {
                // If modal is already open, clicking the image closes it
                modal.classList.add("hidden");
                modal.classList.remove("flex");
            }
        });
    });

    // Close modal if clicking outside the image
    modal.addEventListener("click", (e) => {
        if (e.target === modal) { // only close if clicked on the modal background
            modal.classList.add("hidden");
            modal.classList.remove("flex");
        }
    });

    // Flip cards on click (only if not clicking on an image)
    const cards = document.querySelectorAll(".flip-card");

    cards.forEach(card => {
        card.addEventListener("click", (e) => {
            if (!e.target.closest("img")) {
                const inner = card.querySelector(".flip-card-inner");
                inner.classList.toggle("is-flipped");
            }
        });
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");

    // Only attach click to images
    document.querySelectorAll(".grid a img").forEach(img => {
        img.addEventListener("click", (e) => {
            e.preventDefault(); // prevent anchor jump
            e.stopPropagation(); // prevent event bubbling to the <a>
            
            modalImg.src = img.src;
            modal.classList.remove("hidden");
            modal.classList.add("flex");
        });
    });

    modal.addEventListener("click", () => {
        modal.classList.add("hidden");
        modal.classList.remove("flex");
    });
});
